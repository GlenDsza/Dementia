import React from 'react';
import { Session } from '../models/Schedule';
import { Speaker } from '../models/Speaker';
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { callOutline, trashOutline } from 'ionicons/icons';

interface SpeakerItemProps {
  speaker: Speaker;
  sessions: Session[];
  onDelete: () => void;
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({ speaker, sessions, onDelete }) => {
  const handleCallSpeaker = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_system');
  };

  return (
    <>
      <IonCard color = "primary" className="speaker-card">
        <IonCardHeader>
          <IonItem
            button
            detail={false}
            lines="none"
            className="speaker-item"
            routerLink={`/tabs/speakers/${speaker.id}`}
          >
            <IonAvatar slot="start">
              <img src={speaker.profilePic} alt="Speaker profile pic" />
            </IonAvatar>
            <IonLabel>
              <h2>{speaker.name}</h2>
            </IonLabel>
            <IonButton fill="clear" slot="end" onClick={() => handleCallSpeaker(speaker.phone)}>
              <IonIcon icon={callOutline} />
            </IonButton>
            <IonButton fill="clear" slot="end" onClick={onDelete}>
              <IonIcon icon={trashOutline} />
            </IonButton>
          </IonItem>
        </IonCardHeader>
      </IonCard>
    </>
  );
};

export default SpeakerItem;
