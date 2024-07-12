import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const Map = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader>
          <IonToolbar style={{ borderRadius: "1rem" }}>
            <div className="title">
              <img src="/favicon.png" alt="Logo" width={30} height={30} />
              <h1>Dementia 101</h1>
            </div>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Map;
