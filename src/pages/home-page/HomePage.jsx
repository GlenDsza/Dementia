import React from 'react';
import { IonContent, IonList, IonPage } from '@ionic/react';
import HomePageListItem from './HomePageListItem';

const items = [
  { id: 1, title: 'My Brother', photo: 'https://via.placeholder.com/150' },
  { id: 2, title: 'My Building', photo: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Mother', photo: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Maid', photo: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Doctor', photo: 'https://via.placeholder.com/150' },
  // Add more items as needed
];

const HomePage = () => {
  return (
        <IonList>
          {items.map(item => (
            <HomePageListItem key={item.id} item={item} />
          ))}
        </IonList>
  );
};

export default HomePage;
