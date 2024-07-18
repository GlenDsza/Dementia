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
import {
  callOutline,
  callSharp,
  navigateCircleSharp,
  navigateCircle,
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './SpeakerItem.css';

interface SpeakerItemProps {
  speaker: any;
  sessions: Session[];
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({ speaker, sessions }) => {
  const history = useHistory();

  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openContact(speaker: any, event: any) {
    event.stopPropagation(); // Prevents the card click event
    if (speaker.type === 'person') {
      setActionSheetButtons([
        {
          text: `Call ( ${speaker.phone} )`,
          handler: () => {
            window.open('tel:' + speaker.phone);
          },
        },
      ]);
      setActionSheetHeader(`Call ${speaker.name}`);
      setShowActionSheet(true);
    } else {
      history.push(`/ptabs/speakers/${speaker.id}`);
    }
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
            {speaker.type == 'person' ? (
              <IonIcon
                slot="icon-only"
                ios={callOutline}
                md={callSharp}
              ></IonIcon>
            ) : (
              <IonIcon
                slot="icon-only"
                ios={navigateCircle}
                md={navigateCircleSharp}
              ></IonIcon>
            )}
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
