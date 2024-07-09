import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const HomePageListItem = ({ item }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${item.id}`);
  };

  return (
    <IonItem button onClick={handleClick}>
      <IonThumbnail slot="start">
        <img src={item.photo} alt={item.title} />
      </IonThumbnail>
      <IonLabel>
        <h2>{item.title}</h2>
        <p>ID: {item.id}</p>
      </IonLabel>
    </IonItem>
  );
};

export default HomePageListItem;
