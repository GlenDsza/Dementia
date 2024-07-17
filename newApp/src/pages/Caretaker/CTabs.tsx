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
import {
  calendar,
  location,
  informationCircle,
  people,
  home,
  chatboxEllipses,
} from 'ionicons/icons';

import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import MapView from './Map/Map';
import Home from './Home/Home';
import Community from './Community';
import Chat from './Chat';
import ChatBot from './ChatBot';

interface CTabsProps {}

const CTabs: React.FC<CTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/ctabs" to="/ctabs/home" />
        <Route path="/ctabs/home" render={() => <Home />} exact={true} />
        <Route
          path="/ctabs/schedule"
          render={() => <SchedulePage />}
          exact={true}
        />
        <Route
          path="/ctabs/speakers"
          render={() => <SpeakerList />}
          exact={true}
        />
        <Route
          path="/ctabs/speakers/:id"
          component={SpeakerDetail}
          exact={true}
        />
        <Route path="/ctabs/community" component={Community} exact={true} />
        <Route path='/ctabs/community/chat' component={Chat} exact={true}/>
        <Redirect from="/" to="/community/chat" exact />
        <Route path="/ctabs/chatbot" component={ChatBot} exact={true}/>
        <Route path="/ctabs/schedule/:id" component={SessionDetail} />
        <Route path="/ctabs/speakers/sessions/:id" component={SessionDetail} />
        <Route path="/ctabs/map" render={() => <MapView />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/ctabs/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="schedule" href="/ctabs/schedule">
          <IonIcon icon={calendar} />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>
        <IonTabButton tab="community" href="/ctabs/community">
          <IonIcon icon={people} />
          <IonLabel>Community</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/ctabs/map">
          <IonIcon icon={location} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chatbot" href="/ctabs/chatbot">
          <IonIcon icon={chatboxEllipses} />
          <IonLabel>Chat Bot</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CTabs;
