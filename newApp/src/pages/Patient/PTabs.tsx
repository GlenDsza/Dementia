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
  notifications,
} from 'ionicons/icons';
import SchedulePage from './Schedule/Schedule';
import SpeakerList from './Speaker/SpeakerList';
import SpeakerDetail from './Speaker/SpeakerDetail';
import SessionDetail from './Schedule/components/SessionDetail';
import MapView from './MapView';
import About from './About';
import NotificationContainer from './Notifications/NotificationContainer';
import './PTab.css';
import { TbMessageChatbot } from 'react-icons/tb';

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
        <Route path="/ptabs/map" render={() => <MapView />} exact={true} />
        <Route path="/ptabs/about" render={() => <About />} exact={true} />
        <Route
          path="/ptabs/notifications"
          render={() => <NotificationContainer />}
          exact={true}
        />
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
        <IonTabButton tab="notifications" href="/ptabs/notifications">
          <IonIcon icon={notifications} />
          <div className="red-dot"></div>
          <IonLabel>Notification</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chatbot" href="/ctabs/chatbot">
          <TbMessageChatbot size={25} />
          <IonLabel>Reva</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default PTabs;
