import React from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';
import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonToggle,
} from '@ionic/react';
import {
  calendarOutline,
  hammer,
  moonOutline,
  help,
  informationCircleOutline,
  logIn,
  logOut,
  mapOutline,
  peopleOutline,
  person,
  personAdd,
  notifications,
} from 'ionicons/icons';

import { connect } from '../data/connect';
import { setDarkMode } from '../data/user/user.actions';

import './Menu.css';

const routes = {
  appPages: [
    { title: 'Schedule', path: '/ctabs/schedule', icon: calendarOutline },
    { title: 'Members', path: '/ctabs/speakers', icon: peopleOutline },
    { title: 'Map', path: '/tabs/map', icon: mapOutline },
    { title: 'About', path: '/tabs/about', icon: informationCircleOutline },
  ],
  loggedInPages: [{ title: 'Logout', path: '/logout', icon: logOut }],
  loggedOutPages: [
    { title: 'Login', path: '/login', icon: logIn },
    { title: 'Signup', path: '/signup', icon: personAdd },
  ],
};

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}

interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
  menuEnabled: boolean;
  userType: string;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode;
}

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps {}

const Menu: React.FC<MenuProps> = ({
  darkMode,
  history,
  isAuthenticated,
  setDarkMode,
  menuEnabled,
  userType,
}) => {
  const location = useLocation();

  const renderSideNav = () => {
    const cData = [
      { title: 'Schedule', path: '/ctabs/schedule', icon: calendarOutline },
      { title: 'Members', path: '/ctabs/speakers', icon: peopleOutline },
      { title: 'Notification', path: '/ctabs/map', icon: notifications },
      {
        title: 'Anything for REVA',
        path: '/ctabs/uploads',
        icon: help,
      },
    ];

    const pData = [
      { title: 'Schedule', path: '/ctabs/schedule', icon: calendarOutline },
      { title: 'Members', path: '/ctabs/speakers', icon: peopleOutline },
      {
        title: 'Notification',
        path: '/tabs/map',
        icon: notifications,
      },
    ];

    const nav = userType === 'patient' ? pData : cData;
    return renderlistItems(nav);
  };

  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={
              location.pathname.startsWith(p.path) ? 'selected' : undefined
            }
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  const renderImage = () => {
    if (userType === 'patient') {
      return <img src="/assets/img/patient.png" alt="User Avatar" />;
    } else {
      return <img src="/assets/img/member/brother.jpg" alt="User Avatar" />;
    }
  };

  const getRole = () => {
    if (userType === 'patient') {
      return 'Patient';
    } else {
      return 'Care Taker';
    }
  };

  const getUserNamer = () => {
    if (userType === 'patient') {
      return 'John Doe Patient';
    } else {
      return 'Michael C';
    }
  };

  return (
    <IonMenu type="overlay" disabled={!menuEnabled} contentId="main">
      <div className="user-info">
        <IonAvatar>{renderImage()}</IonAvatar>
        <div className="user-details">
          <h2>{getUserNamer()}</h2>
          <p>{getRole()}</p>
        </div>
      </div>
      <IonContent forceOverscroll={false}>
        <IonList lines="none" className="reva-menu">
          <IonListHeader>Reva</IonListHeader>
          {renderSideNav()}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated
            ? renderlistItems(routes.loggedInPages)
            : renderlistItems(routes.loggedOutPages)}
          <IonItem>
            <IonIcon
              slot="start"
              icon={moonOutline}
              aria-hidden="true"
            ></IonIcon>
            <IonToggle
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
    menuEnabled: state.data.menuEnabled,
    userType: state.user.usertype,
  }),
  mapDispatchToProps: {
    setDarkMode,
  },
  component: withRouter(Menu),
});
