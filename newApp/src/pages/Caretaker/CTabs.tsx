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

import SchedulePage from './Schedule/Schedule';
import SpeakerList from './Speaker/SpeakerList';
import SpeakerDetail from './Speaker/SpeakerDetail';
import SessionDetail from './Schedule/components/SessionDetail';
import MapView from './Map/Map';
import Home from './Home/Home';
import Community from './Community';
import Chat from './Chat';
import ChatBot from './ChatBot';
import Uploads from './Uploads/Uploads';
import Notification from './Notifications/Notifications';
import { TbMessageChatbot } from 'react-icons/tb';

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
          path="/ctabs/uploads"
          render={() => <Uploads />}
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
        <Route path="/ctabs/community/chat" component={Chat} exact={true} />
        <Redirect from="/" to="/community/chat" exact />
        <Route path="/ctabs/notifications" render={() => <Notification />} exact={true}/>
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
          <TbMessageChatbot size={25} />
          <IonLabel>Reva</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CTabs;
