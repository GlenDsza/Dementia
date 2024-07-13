import React from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';

interface Props {
  onChange: (field: string, value: string) => void;
  onAdd: () => void;
  card: {
    title: string;
    subtitle: string;
    content: string;
  };
}

export const NewCardForm: React.FC<Props> = ({ onChange, onAdd, card }) => {
  return (
    <div>
      <IonItem>
        <IonLabel position="floating">Title</IonLabel>
        <IonInput value={card.title} onIonChange={(e) => onChange('title', e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Subtitle</IonLabel>
        <IonInput value={card.subtitle} onIonChange={(e) => onChange('subtitle', e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Content</IonLabel>
        <IonInput value={card.content} onIonChange={(e) => onChange('content', e.detail.value!)} />
      </IonItem>
      <IonButton expand="block" onClick={onAdd}>
        Add Card
      </IonButton>
    </div>
  );
};
