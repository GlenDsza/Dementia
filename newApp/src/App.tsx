import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import "@ionic/react/css/palettes/dark.always.css";
// import "@ionic/react/css/palettes/dark.system.css";
import '@ionic/react/css/palettes/dark.class.css';

/* Theme variables */
import './theme/variables.css';

/* Global styles */
import './App.scss';
import { connect } from './data/connect';
import { AppContextProvider } from './data/AppContext';
import { loadConfData } from './data/sessions/sessions.actions';
import {
  setIsLoggedIn,
  setUsername,
  loadUserData,
} from './data/user/user.actions';
import Account from './pages/Patient/Account';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Support from './pages/Patient/Support';
import Tutorial from './pages/Patient/Tutorial';
import { ScheduleModel } from './models/Schedule';
import RedirectToLogin from './components/RedirectToLogin';
import PTabs from './pages/Patient/PTabs';
import CTabs from './pages/Caretaker/CTabs';
import Notifications from './pages/Caretaker/Notifications/Notifications';
import { LocalNotifications } from '@capacitor/local-notifications';

// ...
import Uploads from './pages/Caretaker/Uploads/Uploads';

setupIonicReact();

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean;
  schedule: ScheduleModel;
}

interface DispatchProps {
  loadConfData: typeof loadConfData;
  loadUserData: typeof loadUserData;
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface IonicAppProps extends StateProps, DispatchProps {}

const IonicApp: React.FC<IonicAppProps> = ({
  darkMode,
  schedule,
  setIsLoggedIn,
  setUsername,
  loadConfData,
  loadUserData,
}) => {
  const getRandomId = () => {
    const randomId = Math.floor(Math.random() * 10000) + 1;
    return randomId;
  };

  const scheduleNotification = () => {
    LocalNotifications.schedule({
      notifications: [
        {
          title: 'Reva - Attention Required',
          body: 'Customer seems uncomfortable. Panicked locoking for help !',
          id: getRandomId(),
          smallIcon: 'information.svg',
          schedule: {
            at: new Date(Date.now() + 1000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
        {
          title: 'Reva - Information',
          body: 'Harit has completed his morning walk. Now he is at home !',
          id: getRandomId(),
          smallIcon: 'warning.svg',
          iconColor: '#FF0000',
          schedule: {
            at: new Date(Date.now() + 3000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
        {
          title: 'Reva - Information',
          body: 'Harit has completed his morning walk. Now he is at home !',
          id: getRandomId(),
          smallIcon: 'warning.svg',
          iconColor: '#FF0000',
          schedule: {
            at: new Date(Date.now() + 6000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
        {
          title: 'Reva - Information',
          body: 'Harit has completed his morning walk. Now he is at home !',
          id: getRandomId(),
          smallIcon: 'warning.svg',
          iconColor: '#FF0000',
          schedule: {
            at: new Date(Date.now() + 9000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
        {
          title: 'Reva - Information',
          body: 'Harit has completed his morning walk. Now he is at home !',
          id: getRandomId(),
          smallIcon: 'warning.svg',
          iconColor: '#FF0000',
          schedule: {
            at: new Date(Date.now() + 30000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
        {
          title: 'Reva - Information',
          body: 'Harit has completed his morning walk. Now he is at home !',
          id: getRandomId(),
          smallIcon: 'warning.svg',
          iconColor: '#FF0000',
          schedule: {
            at: new Date(Date.now() + 13000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
        {
          title: 'Reva - Information',
          body: 'Harit has completed his morning walk. Now he is at home !',
          id: getRandomId(),
          smallIcon: 'warning.svg',
          iconColor: '#FF0000',
          schedule: {
            at: new Date(Date.now() + 23000),
            repeats: true,
            every: 'second',
          }, // 5 seconds from now
          sound: 'beep.wav', // Optional: specify a custom sound
        },
      ],
    });
  };

  useEffect(() => {
    loadUserData();
    loadConfData();
    scheduleNotification();
  }, []);

  return schedule.groups.length === 0 ? (
    <div></div>
  ) : (
    <IonApp className={`${darkMode ? 'ion-palette-dark' : ''}`}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/ptabs" render={() => <PTabs />} />
            <Route path="/ctabs" render={() => <CTabs />} />
            <Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/support" component={Support} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/ctabs/uploads" component={Uploads} />
            <Route
              path="/logout"
              render={() => {
                return (
                  <RedirectToLogin
                    setIsLoggedIn={setIsLoggedIn}
                    setUsername={setUsername}
                  />
                );
              }}
            />
            <Route path="/" exact={true}>
              <Redirect to="/login" />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    schedule: state.data.schedule,
  }),
  mapDispatchToProps: {
    loadConfData,
    loadUserData,
    setIsLoggedIn,
    setUsername,
  },
  component: IonicApp,
});
