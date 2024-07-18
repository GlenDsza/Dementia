import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './SpeakerDetail.scss';

import { ActionSheetButton } from '@ionic/core';
import {
  IonActionSheet,
  IonChip,
  IonIcon,
  IonHeader,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonBackButton,
  IonPage,
} from '@ionic/react';
import {
  callOutline,
  callSharp,
  logoTwitter,
  logoGithub,
  logoInstagram,
  shareOutline,
  shareSharp,
} from 'ionicons/icons';

import { connect } from '../../../data/connect';
import * as selectors from '../../../data/selectors';

import { Speaker } from '../../../models/Speaker';
import SpeakerMap from './SpeakerMap';

interface OwnProps extends RouteComponentProps {
  speaker?: any;
}

interface StateProps {}

interface DispatchProps {}

interface SpeakerDetailProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerDetail: React.FC<SpeakerDetailProps> = ({ speaker }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openSpeakerShare(speaker: Speaker) {
    setActionSheetButtons([
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy Link clicked');
        },
      },
      {
        text: 'Share via ...',
        handler: () => {
          console.log('Share via clicked');
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ]);
    setActionSheetHeader(`Share ${speaker.name}`);
    setShowActionSheet(true);
  }

  function openContact(speaker: Speaker) {
    setActionSheetButtons([
      {
        text: `Email ( ${speaker.email} )`,
        handler: () => {
          window.open('mailto:' + speaker.email);
        },
      },
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

  function openExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  if (!speaker) {
    return <div>Speaker not found</div>;
  }

  return (
    <IonPage id="speaker-detail-new">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/ptabs/speakers" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => openContact(speaker)}>
                <IonIcon
                  slot="icon-only"
                  ios={callOutline}
                  md={callSharp}
                ></IonIcon>
              </IonButton>
              <IonButton onClick={() => openSpeakerShare(speaker)}>
                <IonIcon
                  slot="icon-only"
                  ios={shareOutline}
                  md={shareSharp}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="speaker-background">
          <img src={speaker.profilePic} alt={speaker.name} />
        </div>

        <div className="ion-padding speaker-detail">
          <h2>{speaker.name}</h2>
          <p>{speaker.about}</p>

          <hr />
        </div>
        {speaker.type != 'person' ? (
          <div className="ion-padding speaker-map">
            <SpeakerMap />
          </div>
        ) : null}
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default connect({
  mapStateToProps: (state, ownProps) => ({
    speaker: selectors.getSpeaker(state, ownProps),
  }),
  component: SpeakerDetail,
});
