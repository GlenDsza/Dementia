import { GoogleMap, Polyline } from '@capacitor/google-maps';
import {
  IonBackButton,
  IonButtons,
  IonContent,
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
import { Geolocation } from '@capacitor/geolocation';
import axios from 'axios';

interface InterfaceCoordinates {
  lat: number;
  lng: number;
}

const Map: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const mapRef = useRef<HTMLElement>();
  const locationRef = useRef<InterfaceCoordinates>({
    lat: 19.075983,
    lng: 72.877655,
  });
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
      snippet: marker.description,
      iconUrl: '/assets/svgs/family.svg',
      iconSize: {
        width: 30,
        height: 30,
      },
    });
  };

  const addMapMarkers = () =>
    markers.forEach(async (marker) => await addMapMarker(marker));

  const addSelfMarker = async (): Promise<void> => {
    await newMap.addMarker({
      coordinate: {
        lat: locationRef.current.lat,
        lng: locationRef.current.lng,
      },
      title: 'Current Location',
      iconUrl: '/assets/svgs/caretaker.svg',
      iconSize: {
        width: 30,
        height: 30,
      },
    });
  };

  const addPatientMarker = async (): Promise<void> => {
    await newMap.addMarker({
      coordinate: {
        lat: 18.701212,
        lng: 73.644495,
      },
      title: 'Patient',
      iconUrl: '/assets/svgs/patient.svg',
      iconSize: {
        width: 30,
        height: 30,
      },
    });
  };

  const getRoute = async (): Promise<string> => {
    try {
      const res = await axios.post(
        'https://routes.googleapis.com/directions/v2:computeRoutes',
        {
          origin: {
            location: {
              latLng: {
                latitude: locationRef.current.lat,
                longitude: locationRef.current.lng,
              },
            },
          },
          destination: {
            location: {
              latLng: {
                latitude: 18.701212,
                longitude: 73.644495,
              },
            },
          },
          travelMode: 'DRIVE',
          routingPreference: 'TRAFFIC_AWARE',
          departureTime: '2024-10-15T15:01:23.045123456Z',
          computeAlternativeRoutes: false,
          routeModifiers: {
            avoidTolls: false,
            avoidHighways: false,
            avoidFerries: false,
          },
          languageCode: 'en-US',
          units: 'IMPERIAL',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': import.meta.env.VITE_GMAPS_KEY,
            'X-Goog-FieldMask':
              'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline',
          },
        }
      );
      return res.data.routes[0].polyline.encodedPolyline;
    } catch (error) {
      console.error('Error getting route:', (error as Error).message);
      return (error as Error).message;
    }
  };

  const createMap = async () => {
    setLoading(true);
    if (!mapRef.current) {
      setLoading(false);
      return;
    }

    await getCurrentPosition();

    newMap = await GoogleMap.create({
      id: 'my-map',
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GMAPS_KEY,
      config: {
        center: {
          lat: locationRef.current.lat,
          lng: locationRef.current.lng,
        },
        zoom: 10,
      },
    });

    await newMap.setOnMarkerClickListener((marker) => markerClick(marker));
    await addSelfMarker();
    await addPatientMarker();
    addMapMarkers();
    const encodedPolyline = await getRoute();
    const latLngs = decode(encodedPolyline);
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

  const getCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      locationRef.current = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  };

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
