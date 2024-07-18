import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  useIonViewWillEnter,
} from '@ionic/react';
import { connect } from '../../../data/connect';
import { withRouter, RouteComponentProps, useParams } from 'react-router';
import * as selectors from '../../../data/selectors';
import { starOutline, star, share, cloudDownload } from 'ionicons/icons';
import { GoogleMap, Polyline } from '@capacitor/google-maps';
import './SessionDetail.scss';
import {
  addFavorite,
  removeFavorite,
} from '../../../data/sessions/sessions.actions';
import { Session } from '../../../models/Schedule';
import { RoutineInterface, routines } from '../../../constants';
import { decode } from '@googlemaps/polyline-codec';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  session?: Session;
}

interface DispatchProps {}

interface RouteParams {
  id: string;
}

type SessionDetailProps = OwnProps & StateProps & DispatchProps;

const SessionDetail: React.FC<SessionDetailProps> = ({ session }) => {
  const { id } = useParams<RouteParams>();
  const [routine, setRoutine] = useState<RoutineInterface | undefined | null>(
    null
  );
  const routineRef = useRef<RoutineInterface>();
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;
  if (!session) {
    return <div>Session not found</div>;
  }

  useEffect(() => {
    const routine = routines[Number(id) - 1];
    setRoutine(routine);
    routineRef.current = routine;
    createMap();
  }, [id]);

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

  const addRoutineMarkers = async (): Promise<void> => {
    console.log(routineRef.current);
    if (routineRef.current?.location) {
      console.log('noroute');
      const res = await newMap.addMarker({
        coordinate: {
          lat: routineRef.current?.location.lat,
          lng: routineRef.current?.location.lng,
        },
        title: routineRef.current?.location.name,
        snippet: routineRef.current?.description,
      });
      console.log(res);
    } else if (
      routineRef.current?.startLocation &&
      routineRef.current?.endLocation
    ) {
      await newMap.addMarker({
        coordinate: {
          lat: routineRef.current?.startLocation.lat,
          lng: routineRef.current?.startLocation.lng,
        },
        title: routineRef.current?.startLocation.name,
        snippet: routineRef.current?.description,
      });
      await newMap.addMarker({
        coordinate: {
          lat: routineRef.current?.endLocation.lat,
          lng: routineRef.current?.endLocation.lng,
        },
        title: routineRef.current?.endLocation.name,
        snippet: routineRef.current?.description,
      });
      console.log('route');
    }
  };

  const addRoute = async (id: string | null | undefined): Promise<void> => {
    if (id === '1' || id === '7' || id === '3' || id === '4') {
      let routiePolyline = '';
      if (id === '1' || id === '7') {
        routiePolyline =
          'ip~oBcaebMlBDPCDEDi@HiJHoF`JRd@yIt@kJH[HMdDfChGlFTLt@JzBHFERCjFJdDLhAJt@C~@aEp@}DJiBTmCHiBDUTqI|AiTKe@?qA`@}HJy@JYRWRM`@Sr@En@Cd@I^WvE_GzBgCv@eAr@h@XHR?~@k@VCTD';
      } else if (id === '3' || id === '4') {
        routiePolyline =
          'ip~oBcaebMaLWgGKAvDXPNZBVG^SX]JKpGDj@HT_Cd@eF|@oBJgIL}EJ_EzA}E|AoFhBkDBmFNiML}DNkQPgBBCGYFIZKFMBYd@w@|Ae@pAEZaBhDkChG{CpGg@nAaFlKoArCuBzEeBnDk@tAq@lBSv@}@hGu@~DyKiCgCk@yDs@k@ZLdA@f@C`B_A~H{@hIc@fF[lB_@fBaBfESROBuPcBmH]oCKuJLyAFc@JSLORj@rCHX]`@OhDUzLQdOE|Dv@LdBJCc@f@@';
      }
      const latLngs = decode(routiePolyline);
      const path = latLngs.map((latLng) => ({
        lat: latLng[0],
        lng: latLng[1],
      }));
      const lines: Polyline[] = [
        {
          path: path,
          strokeColor: '#FF0000',
          strokeWeight: 2,
        },
      ];
      await newMap.addPolylines(lines);
    }
  };

  const createMap = async () => {
    if (!mapRef.current) {
      return;
    }

    newMap = await GoogleMap.create({
      id: 'my-map',
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GMAPS_KEY,
      config: {
        center: {
          lat: 18.511564,
          lng: 73.922984,
        },
        zoom: 10,
      },
    });

    // await newMap.setOnMarkerClickListener((marker) => markerClick(marker));
    await addPatientMarker();
    await addRoutineMarkers();
    await addRoute(routineRef?.current?.id);
    await newMap.enableCurrentLocation(true);
  };

  return (
    <IonPage id="session-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/ctabs/schedule"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <capacitor-google-map
            ref={mapRef}
            style={{
              display: 'inline-block',
              width: '100%',
              height: '300px',
            }}
          />
          <h1>{routine?.name}</h1>
          <IonText color="medium">
            <div className="mt-2">
              {routine?.startTime} &ndash; {routine?.endTime}
            </div>
            <div className="mt-2">
              {routine?.location
                ? routine.location.name
                : 'Route: ' +
                  routine?.startLocation?.name +
                  ' - ' +
                  routine?.endLocation?.name}
            </div>
          </IonText>
          <p>{routine?.description}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({
    session: selectors.getSession(state, OwnProps),
  }),
  mapDispatchToProps: {},
  component: withRouter(SessionDetail),
});
