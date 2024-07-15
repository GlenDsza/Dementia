import { GoogleMap, Polyline } from '@capacitor/google-maps';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonProgressBar,
  IonToolbar,
  useIonModal,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { FC, useEffect, useRef, useState } from 'react';
import './Map.scss';
import { MarkerInfoWindow } from './components/MarkerInfoWindow';
import { markers } from '../../../constants';
import { decode } from '@googlemaps/polyline-codec';

const Map: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  const [present, dismiss] = useIonModal(MarkerInfoWindow, {
    marker: selectedMarker,
  });

  const modalOptions = {
    initialBreakpoint: 0.4,
    breakpoints: [0, 0.4],
    backdropBreakpoint: 0,
    onDidDismiss: () => dismiss(),
  };

  const markerClick = (marker: any) => {
    setSelectedMarker(
      markers.filter(
        (m) => m.lat === marker.latitude && m.lng === marker.longitude
      )[0]
    );
    present(modalOptions);
  };

  const addMapMarker = async (marker: any) => {
    await newMap.addMarker({
      coordinate: {
        lat: marker.lat,
        lng: marker.lng,
      },
      title: marker.title,
    });
  };

  const addMapMarkers = () =>
    markers.forEach(async (marker) => await addMapMarker(marker));

  const createMap = async () => {
    setLoading(true);
    if (!mapRef.current) {
      setLoading(false);
      return;
    }

    newMap = await GoogleMap.create({
      id: 'my-map',
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GMAPS_KEY,
      config: {
        center: {
          lat: 19.075983,
          lng: 72.877655,
        },
        zoom: 10,
      },
    });

    await newMap.setOnMarkerClickListener((marker) => markerClick(marker));
    addMapMarkers();
    const latLngs = decode(
      'guorBwzo{LmDBeAAe@@?fGIZWZaG@gBCuAIkEa@aD_@{JaAYGu@[oAy@aAe@gGkBcE{A]Wd@aBvAkHgBe@_@QgBg@HQl@q@FOBa@CUO{@Eq@McABs@TwATyBPcA{HiAaEq@aMqBqm@mJyMuBcPcCkBUwEw@QAsAY]OyHuAg@Q[Qo@m@m@m@i@_@cA_@qD}@oHwBkDy@gGgAqBUyGQaCAuIWgCBcBHwGn@wEh@oFz@aFf@{D?eBI}AQqB[sBk@gHeCsWuJ}GcCkUsI_YgKoDsAuH}CuJsD_GiBoG_Bs@MwAOcDMoCEkHNyCA}@Em@M[G}@a@{@k@kAiAq@aAs@uA{A{DkCwIYw@uAyCs@kBsAaEqEoLkAcDScAEcAB_A\\{DDiA?eAMeBKs@[{A_@gAWg@gA_Bq@u@aAu@qAy@kAa@gB_@eD_@kEy@yBm@uDyAiFkCkIaFyCcBqI}Ei@c@o@s@qGeIm@}@_AqBuCcHmKoXi@aBiDaJs@qBy@oBeAiB}@oAmBeCeBqCSc@wOql@]sBIgA@kBt@sHD_BA_AMsAO{@a@uAmCmHcCgG}CuGc@uAs@uAm@u@u@i@a@W_AYiAYeBQm@AcA@aAVqC\\gADmC?{BIkKk@qIm@qAOgAWeA[oBa@_LoB_Dq@}AWcAGmHM{G]gCUgEk@gA[sAq@uCgBgF{CiBmAuB_AaCy@k@EqB]_BKuI[o@FSF{@`@o@tD[zAi@zA{@nAgB|BwDhDy@b@q@TqAVwGf@gALgAVqAh@mAv@i@f@o@|@a@z@i@hBHzCvEfI~@|CVd@XHtDzFdAfBLn@B`AFVxF|JtBfE~BdEN`@T~AD|@Cl@Gl@sDnTaCjNYv@e@z@sDdEuE|DsEtD_At@aKlI}A~AsC~Co@~@]x@WjAKfAG~BEp@G\\e@dBu@|AgA|Aq@pAEZsAhD{BzDa@`Ag@]Xe@'
    );
    const path = latLngs.map((latLng) => ({
      lat: latLng[0],
      lng: latLng[1],
    }));
    const lines: Polyline[] = [
      {
        path: path,
        // geodesic: true,
        strokeColor: '#FF0000',
        strokeWeight: 2,
      },
    ];
    await newMap.addPolylines(lines);
    await newMap.enableCurrentLocation(true);

    setLoading(false);
  };

  useIonViewWillEnter(() => {
    createMap();
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              type="button"
              className="backbutton"
              defaultHref="/home"
            ></IonBackButton>
          </IonButtons>
          <div className="title">
            <img
              src="/assets/icon/favicon.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <h1>Dementia 101</h1>
          </div>
          {loading && <IonProgressBar type="indeterminate" />}
        </IonToolbar>

        <capacitor-google-map
          ref={mapRef}
          style={{
            display: 'inline-block',
            width: '100%',
            height: '100%',
          }}
        ></capacitor-google-map>
      </IonContent>
    </IonPage>
  );
};

export default Map;
