import React from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people } from 'ionicons/icons';
import SchedulePage from '../Patient/SchedulePage';
import SpeakerList from '../Patient/Speaker/SpeakerList';
import SpeakerDetail from '../Patient/Speaker/SpeakerDetail';
import SessionDetail from '../Patient/SessionDetail';
import MapView from '../Patient/MapView';
import About from '../Patient/About';

interface PTabsProps {}

const PTabs: React.FC<PTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/ptabs" to="/ptabs/schedule" />
        <Route
          path="/ptabs/schedule"
          render={() => <SchedulePage />}
          exact={true}
        />
        <Route
          path="/ptabs/speakers"
          render={() => <SpeakerList />}
          exact={true}
        />
        <Route
          path="/ptabs/speakers/:id"
          component={SpeakerDetail}
          exact={true}
        />
        <Route path="/ptabs/schedule/:id" component={SessionDetail} />
        <Route path="/ptabs/speakers/sessions/:id" component={SessionDetail} />
        <Route path="/ptabs/map" render={() => <MapView />} exact={true} />
        <Route path="/ptabs/about" render={() => <About />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/ptabs/schedule">
          <IonIcon icon={calendar} />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/ptabs/speakers">
          <IonIcon icon={people} />
          <IonLabel>Members</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/ptabs/map">
          <IonIcon icon={location} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/ptabs/about">
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default PTabs;
