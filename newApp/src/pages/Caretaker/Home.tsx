
import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { add, trash } from 'ionicons/icons';
import SpeakerItem from '../../components/SpeakerItemHome';
import { Speaker } from '../../models/Speaker';
import { Session } from '../../models/Schedule';
import { connect } from '../../data/connect';
import * as selectors from '../../data/selectors';

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerList: React.FC<SpeakerListProps> = ({
  speakers: initialSpeakers,
  speakerSessions,
}) => {
  const [speakers, setSpeakers] = useState<Speaker[]>(initialSpeakers);
  const [showModal, setShowModal] = useState(false);
  const [newSpeaker, setNewSpeaker] = useState<Partial<Speaker>>({
    id: undefined,
    profilePic: '',
    name: '',
    phone: '',
  });

  const handleInputChange = (e: CustomEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewSpeaker((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddSpeaker = () => {
    setShowModal(false);
    const newId = speakers.length > 0 ? Math.max(...speakers.map(s => s.id)) + 1 : 1;
    const newSpeakerWithId = { ...newSpeaker, id: newId };
    setSpeakers([...speakers, newSpeakerWithId as Speaker]);
    setNewSpeaker({ id: undefined, profilePic: '', name: '', phone: '' });
  };

  const handleDeleteSpeaker = (id: number) => {
    setSpeakers(speakers.filter(speaker => speaker.id !== id));
  };

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="scrollable-container">
          <IonGrid fixed>
            <IonRow className="speaker-list">
              {speakers.map((speaker) => (
                <IonCol size="12" size-md="6" size-lg="4" key={speaker.id}>
                  <SpeakerItem
                    key={speaker.id}
                    speaker={speaker}
                    sessions={speakerSessions[speaker.name]}
                    onDelete={() => handleDeleteSpeaker(speaker.id)}
                  />
                </IonCol>
              ))}
            </IonRow>
            <IonCol size="22" size-md="7" size-lg="4" className="add-speaker-col">
                <IonFab vertical="center" horizontal="center">
                  <IonFabButton onClick={() => setShowModal(true)}>
                    <IonIcon icon={add} />
                  </IonFabButton>
                </IonFab>
        </IonCol>
        </IonGrid>
        </div>
        {/* <div className="additional-content">
        <div className="scrollable-container">
          <IonGrid fixed>
            <IonRow className="speaker-list">
              {speakers.map((speaker) => (
                <IonCol size="12" size-md="6" size-lg="4" key={speaker.id}>
                  <SpeakerItem
                    key={speaker.id}
                    speaker={speaker}
                    sessions={speakerSessions[speaker.name]}
                    onDelete={() => handleDeleteSpeaker(speaker.id)}
                  />
                </IonCol>
              ))}
            </IonRow>
            <IonCol size="22" size-md="7" size-lg="4" className="add-speaker-col">
                <IonFab vertical="center" horizontal="center">
                  <IonFabButton onClick={() => setShowModal(true)}>
                    <IonIcon icon={add} />
                  </IonFabButton>
                </IonFab>
        </IonCol>
        </IonGrid>
        </div> */}
        {/* </div> */}

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add New Speaker</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="stacked">Image URL</IonLabel>
              <IonInput name="profilePic" value={newSpeaker.profilePic} onIonChange={handleInputChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput name="name" value={newSpeaker.name} onIonChange={handleInputChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Phone</IonLabel>
              <IonInput name="phone" value={newSpeaker.phone} onIonChange={handleInputChange} />
            </IonItem>
            <IonButton expand="block" onClick={handleAddSpeaker}>Add Speaker</IonButton>
          </IonContent>
        </IonModal>

        {/* Embedded CSS */}
        <style>{`
          #speaker-list {
            .scrollable-container {
              height: 22vh; 
              overflow-y: auto; 
            }

            .additional-content {
              height: 50vh; 
            }

            .speaker-list {
              display: flex;
              flex-wrap: nowrap;
              overflow-x: auto;
            }

            .speaker-card {
              min-width: 100px;
              flex: 0 0 auto;
            }

            .speaker-item {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .speaker-item img {
              width: 100px;
              height: 100px;
              object-fit: cover;
            }

            .speaker-item h2 {
              font-size: 16px;
              margin: 5px 0;
            }

            .speaker-item ion-button {
              margin-top: 5px;
            }

            .add-speaker-col {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        `}</style>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    speakers: selectors.getSpeakers(state),
    speakerSessions: selectors.getSpeakerSessions(state),
  }),
  component: React.memo(SpeakerList),
});
