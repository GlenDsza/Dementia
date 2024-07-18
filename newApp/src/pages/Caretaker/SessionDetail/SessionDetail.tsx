import React, { useEffect, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonText,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { connect } from '../../../data/connect';
import { withRouter, RouteComponentProps, useParams } from 'react-router';
import * as selectors from '../../../data/selectors';
import { starOutline, star, share, cloudDownload } from 'ionicons/icons';
import './SessionDetail.scss';
import {
  addFavorite,
  removeFavorite,
} from '../../../data/sessions/sessions.actions';
import { Session } from '../../../models/Schedule';
import { RoutineInterface, routines } from '../../../constants';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  session?: Session;
}

interface DispatchProps {}

interface RouteParams {
  id: string;
}

type SessionDetailProps = OwnProps & StateProps & DispatchProps;

const SessionDetail: React.FC<SessionDetailProps> = ({ session }) => {
  const { id } = useParams<RouteParams>();
  const [routine, setRoutine] = useState<RoutineInterface | undefined | null>(
    null
  );
  if (!session) {
    return <div>Session not found</div>;
  }

  useEffect(() => {
    const routine = routines.find((r) => r.id === id);
    setRoutine(routine);
  }, [id]);

  return (
    <IonPage id="session-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <h1>{session.name}</h1>
          {session.tracks.map((track) => (
            <span
              key={track}
              className={`session-track-${track.toLowerCase()}`}
            >
              {track}
            </span>
          ))}
          <p>{session.description}</p>
          <IonText color="medium">
            {session.timeStart} &ndash; {session.timeEnd}
            <br />
            {session.location}
          </IonText>
        </div>
        <IonList>
          <IonItem onClick={() => {}} button>
            <IonLabel color="primary">Leave Feedback</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({
    session: selectors.getSession(state, OwnProps),
  }),
  mapDispatchToProps: {},
  component: withRouter(SessionDetail),
});
