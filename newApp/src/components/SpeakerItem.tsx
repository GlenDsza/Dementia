import React, { useState } from 'react';
import { Session } from '../models/Schedule';
import { Speaker } from '../models/Speaker';
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonList,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon,
  ActionSheetButton,
  IonActionSheet,
} from '@ionic/react';
import { callOutline, callSharp } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './SpeakerItem.css';

interface SpeakerItemProps {
  speaker: Speaker;
  sessions: Session[];
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({ speaker, sessions }) => {
  const history = useHistory();

  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openContact(speaker: Speaker, event: any) {
    event.stopPropagation(); // Prevents the card click event
    setActionSheetButtons([
      {
        text: `Call ( ${speaker.phone} )`,
        handler: () => {
          window.open('tel:' + speaker.phone);
        },
      },
    ]);
    setActionSheetHeader(`Share ${speaker.name}`);
    setShowActionSheet(true);
  }

  const navigateToPage = () => {
    history.push(`/ptabs/speakers/${speaker.id}`);
  };

  return (
    <>
      <IonCard onClick={navigateToPage} className="speaker-container">
        <img
          src={speaker.profilePic}
          alt="Speaker profile pic"
          className="speaker-custom-image"
        />
        <IonCardHeader>
          <IonCardTitle>{speaker.name}</IonCardTitle>
          <IonCardSubtitle>{speaker.title}</IonCardSubtitle>
          <IonButton
            onClick={(e) => openContact(speaker, e)}
            className="speaker-call-button"
          >
            <IonIcon
              slot="icon-only"
              ios={callOutline}
              md={callSharp}
            ></IonIcon>
          </IonButton>
        </IonCardHeader>
      </IonCard>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </>
  );
};

export default SpeakerItem;
