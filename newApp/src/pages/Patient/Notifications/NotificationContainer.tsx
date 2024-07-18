import React, { useEffect, useRef, useState } from 'react';
import './Notifications.scss';
import {
  ActionSheetButton,
  IonActionSheet,
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Notification from './Notifications';

const NotificationContainer = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  const handleSOSClick = () => {
    openContact();
  };

  function openContact() {
    setActionSheetButtons([
      {
        text: `Call - +91 9967878741`,
        handler: () => {
          window.open('tel: +91 9967878741');
        },
      },
      {
        text: `Call - +91 9000078741`,
        handler: () => {
          window.open('tel: +91 9000078741');
        },
      },
    ]);
    setActionSheetHeader(`Call All for SOS Situation`);
    setShowActionSheet(true);
  }
  return (
    <IonPage id="care-notification-container">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
          <IonButtons slot="end">
            <IonButton
              color="danger"
              className="sos-button"
              onClick={handleSOSClick}
            >
              SOS
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Notification />
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default NotificationContainer;
