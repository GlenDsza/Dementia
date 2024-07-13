import { GoogleMap } from "@capacitor/google-maps";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonProgressBar,
  IonToolbar,
} from "@ionic/react";
import React, { FC, useEffect, useRef, useState } from "react";
import "./Map.css";

const markers = [
  {
    title: "Mumbai",
    snippet: "Hello World :D",
    // iconUrl: "assets/icon/icon1.png",
    // iconSize: {
    //   width: 35,
    //   height: 35,
    // },
    coordinate: {
      lat: 19.075983,
      lng: 72.877655,
    },
  },
  {
    title: "Yakima",
    snippet: "City",
    // iconUrl: "assets/icon/icon2.png",
    // iconSize: {
    //   width: 35,
    //   height: 35,
    // },
    coordinate: {
      lat: 46.60207,
      lng: -120.505898,
    },
  },
];

const Map: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  const createMap = async () => {
    setLoading(true);
    if (!mapRef.current) {
      setLoading(false);
      return;
    }

    newMap = await GoogleMap.create({
      id: "my-map",
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

    markers.forEach((marker) => {
      newMap.addMarker(marker);
    });

    setLoading(false);
  };

  useEffect(() => {
    createMap();
  }, []);

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
            <img src="/favicon.png" alt="Logo" width={30} height={30} />
            <h1>Dementia 101</h1>
          </div>
          <IonProgressBar type="determinate"></IonProgressBar>
        </IonToolbar>

        <capacitor-google-map
          ref={mapRef}
          style={{
            display: "inline-block",
            width: "100%",
            height: "100%",
          }}
        ></capacitor-google-map>
      </IonContent>
    </IonPage>
  );
};

export default Map;
