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
  IonCol,
  IonGrid,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import {
  callOutline,
  callSharp,
  logoTwitter,
  logoGithub,
  logoInstagram,
  shareOutline,
  shareSharp,
  navigateCircle,
  navigateCircleSharp,
} from 'ionicons/icons';

import { connect } from '../../../data/connect';
import * as selectors from '../../../data/selectors';

import { Speaker } from '../../../models/Speaker';
import SpeakerMap from './SpeakerMap';
import SpeakerItem from './SpeakerItem';
import { Geolocation } from '@capacitor/geolocation';
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

  const openGoogleMaps = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const url = `https://www.google.com/maps/dir/18.5132841,73.9240567/RADHE+HEIGHTS,+Ravet+Village+Road,+Shinde+Vasti,+Ravet,+Pimpri-Chinchwad,+Maharashtra/@18.5886813,73.7546992,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3bc2b9f6cd14121f:0xbbba0636df641329!2m2!1d73.7535776!2d18.643833!3e9?entry=ttu`;
      window.open(url, '_system');
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return (
    <IonPage id="speaker-detail-new">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/ctabs/speakers" />
          </IonButtons>
          <IonTitle>{speaker.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonCard className="speaker-container">
          <img
            src={speaker.profilePic}
            alt="Speaker profile pic"
            className="speaker-custom-image"
          />
          <IonCardHeader>
            <IonCardTitle>{speaker.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{speaker.phone}</p>
            <p>{speaker.about}</p>
            <p>
              {speaker.type != 'person' ? (
                <div className="ion-padding speaker-map">
                  <img
                    src="/assets/img/map/member.png"
                    onClick={() => openGoogleMaps()}
                  />
                </div>
              ) : null}
            </p>
          </IonCardContent>
        </IonCard>
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

export default connect({
  mapStateToProps: (state, ownProps) => ({
    speaker: selectors.getSpeaker(state, ownProps),
  }),
  component: SpeakerDetail,
});
