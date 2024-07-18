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
  IonButton,
  IonIcon,
  IonActionSheet,
  ActionSheetButton,
} from '@ionic/react';
import SpeakerItem from './SpeakerItem';
import { Speaker } from '../../../models/Speaker';
import { Session } from '../../../models/Schedule';
import { connect } from '../../../data/connect';
import * as selectors from '../../../data/selectors';
import './SpeakerList.scss';

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerList: React.FC<SpeakerListProps> = ({
  speakers,
  speakerSessions,
}) => {
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
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Members</IonTitle>
          <IonButtons slot="end">
            <IonButton color="danger" onClick={handleSOSClick}>
              SOS
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonGrid fixed>
          <IonRow>
            {speakers.map((speaker) => (
              <IonCol size="12" size-md="6" key={speaker.id}>
                <SpeakerItem
                  key={speaker.id}
                  speaker={speaker}
                  sessions={speakerSessions[speaker.name]}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonActionSheet
          isOpen={showActionSheet}
          header={actionSheetHeader}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={actionSheetButtons}
        />
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
