import React, { useEffect, useRef, useState } from 'react';
import './Notifications.scss';
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Notification from './Notifications';

const NotificationContainer = () => {
  return (
    <IonPage id="care-notification-container">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Notification />
    </IonPage>
  );
};

export default NotificationContainer;
