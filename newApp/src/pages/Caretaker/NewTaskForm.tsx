import React, { useState } from 'react';
import {
  IonDatetime,
  IonButton,
  IonContent,
  IonModal,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';

const NewTaskForm: React.FC<{ isOpen: boolean; onClose: () => void; onSave: (task: any) => void }> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const handleSave = () => {
    const newTask = { name, time, activity, location, image };
    onSave(newTask);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">Routine Name</IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Time</IonLabel>
          <IonDatetime
            value={time}
            onIonChange={(e) => setTime(e.detail.value as string)}
            presentation="time"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Activity</IonLabel>
          <IonInput value={activity} onIonChange={(e) => setActivity(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Location</IonLabel>
          <IonInput value={location} onIonChange={(e) => setLocation(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Image URL</IonLabel>
          <IonInput value={image} onIonChange={(e) => setImage(e.detail.value!)} />
        </IonItem>

        <IonButton expand="full" onClick={handleSave}>Save</IonButton>
        <IonButton expand="full" color="medium" onClick={onClose}>Cancel</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default NewTaskForm;
