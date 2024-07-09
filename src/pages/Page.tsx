import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import { call, camera, home } from "ionicons/icons";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>

     
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/folder/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="camera" href="/folder/camera">
          <IonIcon icon={camera} />
          <IonLabel>Camera</IonLabel>
        </IonTabButton>
        <IonTabButton tab="sos" href="/folder/sos">
          <IonIcon icon={call} />
          <IonLabel>SOS</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Page;
