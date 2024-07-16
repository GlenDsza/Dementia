import {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonAvatar,
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonCol,
    IonRow,
    IonButton,
  } from '@ionic/react';
  import React from 'react';
  import './Community.scss';
  
  const mockData = [
    {
      name: 'John Doe',
      description: 'Software Engineer at XYZ Company.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      description: 'Marketing Specialist at ABC Inc.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Sam Wilson',
      description: 'Project Manager at DEF Corp.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Sara Connor',
      description: 'UX Designer at GHI Ltd.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'John Doe',
        description: 'Software Engineer at XYZ Company.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Jane Smith',
        description: 'Marketing Specialist at ABC Inc.',
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
      },
      {
        name: 'Sam Wilson',
        description: 'Project Manager at DEF Corp.',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        name: 'Sara Connor',
        description: 'UX Designer at GHI Ltd.',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name: 'John Doe',
        description: 'Software Engineer at XYZ Company.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Jane Smith',
        description: 'Marketing Specialist at ABC Inc.',
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
      },
      {
        name: 'Sam Wilson',
        description: 'Project Manager at DEF Corp.',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        name: 'Sara Connor',
        description: 'UX Designer at GHI Ltd.',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
          name: 'John Doe',
          description: 'Software Engineer at XYZ Company.',
          image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
          name: 'Jane Smith',
          description: 'Marketing Specialist at ABC Inc.',
          image: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
          name: 'Sam Wilson',
          description: 'Project Manager at DEF Corp.',
          image: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
          name: 'Sara Connor',
          description: 'UX Designer at GHI Ltd.',
          image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
    // Add more mock data as needed
  ];
  
  const Community: React.FC = () => {
    return (
      <IonPage>
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Community Members</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="avatars-list-content">
          {mockData.map((person, index) => (
            <IonCard key={index} className="avatars-card">
                <IonRow>
                    <IonAvatar className="avatar-img">
                <img src={person.image} alt={`${person.name} image`} />
              </IonAvatar>
                <IonCol>
                <div className="avatar-details">
                <IonCardHeader>
                  <IonCardTitle className="avatar-name">{person.name}</IonCardTitle>
                  <IonCardSubtitle className="avatar-description">{person.description}</IonCardSubtitle>
                </IonCardHeader>
              </div>
                </IonCol>
                <IonCol size="auto">
                    <IonButton routerLink="/join" className="join-button">Join</IonButton>
                </IonCol>
                </IonRow>
              
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    );
  };
  
  export default Community;
  