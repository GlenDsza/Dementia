import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { FC } from "react";
import "./Login.css";

const Login: FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar style={{ borderRadius: "1rem" }}>
            <div className="title">
              <img src="/favicon.png" alt="Logo" width={30} height={30} />
              <h1>Dementia 101</h1>
            </div>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonText className="flex justify-center mt-8">
            <IonCardTitle>Welcome back!</IonCardTitle>
          </IonText>
        </div>
        <IonCard className="mx-8">
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
