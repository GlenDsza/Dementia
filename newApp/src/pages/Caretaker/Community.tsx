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
    IonImg,
  } from '@ionic/react';
  import React from 'react';
  import './Community.scss';
  
  const mockData = [
    {
      name: 'Dementia Care Circle',
      description: 'Sharing experiences and tips in dementia care.',
      image: 'https://img.freepik.com/premium-vector/cute-elephant-logo-icon-vector-character_760408-50.jpg'
    },
    {
      name: 'Memory Lane Companions',
      description: 'A space to discuss and share memory care strategies.',
      image: 'https://play-lh.googleusercontent.com/Jrnpp_Um2QspmwhSnG9WHgBZXvXN-Z7mbjlAJyaZxI--Prvzemx3Qkjz23io7y8-JlM'
    },
    {
      name: 'Caring Hearts Network',
      description: 'Dedicated to compassionate dementia caregiving.'      ,
      image: 'https://media.istockphoto.com/id/1170794027/vector/yin-yang-panda-cute-logo-vector-illustration.jpg?s=612x612&w=0&k=20&c=xiWk8WaN9dyqRSsptwU_RAckfFiiTdOPzbtuxzJfynY='
    },
    {
      name: 'Mindful Caregivers',
      description: 'Mindful approaches to dementia care.',
      image: 'https://static.vecteezy.com/system/resources/previews/021/730/507/original/rainbow-logo-cute-hand-drawn-flat-design-modern-colors-free-vector.jpg'
    },
    {
        name: 'Supportive Hands',
        description: '',
        image: 'https://logowik.com/content/uploads/images/cute-peeking-dog8044.logowik.com.webp'
      },
      {
        name: 'Dementia Allies',
        description: '',
        image: 'https://cdn5.vectorstock.com/i/1000x1000/61/19/cute-cartoon-unicorn-fantasy-logo-vector-27996119.jpg'
      },
      {
        name: 'Dementia Caregivers United',
        description: '',
        image: 'https://img.freepik.com/premium-vector/cute-peace-hand-cartoon-vector-icon-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-176.jpg'
      },
      {
        name: 'Memory Keepers',
        description: '',
        image: 'https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg'
      },
      {
          name: 'Gentle Care Network',
          description: '',
          image: 'https://c8.alamy.com/comp/2G9PA3A/cute-funny-happy-star-sign-character-vector-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-star-rating-symbol-review-doodle-character-concept-2G9PA3A.jpg'
        },
        {
          name: "Caregiver's Oasis",
          description: '',
          image: 'https://i.pinimg.com/736x/86/79/be/8679be5b00e470cd84e5a19513451d52.jpg'
        },
        {
          name: 'Hope and Healing',
          description: '',
          image: 'https://thumbs.dreamstime.com/b/caring-hands-team-vector-illustration-logo-vector-illustration-caring-hands-team-suitable-logo-white-background-88084233.jpg'
        },
      {
        name: 'Memory Care Network',
        description: '',
        image: 'https://st4.depositphotos.com/16921356/20303/v/450/depositphotos_203031124-stock-illustration-cute-owl-logo-vector-dsign.jpg'
      },
      {
        name: 'Peaceful Minds',
        description: '',
        image: 'https://www.shutterstock.com/image-vector/teamwork-logo-abstract-two-hands-260nw-2282414665.jpg'
      }
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
            <IonTitle>Community</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="avatars-list-content">
          <IonImg src= 'https://static.vecteezy.com/system/resources/thumbnails/007/509/583/small/lively-characters-of-old-age-flat-design-style-illustration-free-vector.jpg'/>
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
  