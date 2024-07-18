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
    name: 'Pune LGBTQ Community',
    description: 'It is inclusive and vibrant community, providing a safe space for connection, support, and celebration of diversity.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbTPr5WaSA2ClKizasA2-Ku_ESlxwcC2uUg&s',
  },
  {
    name: 'Dementia Care Circle',
    description: 'Sharing experiences and tips in dementia care.',
    image:
      'https://img.freepik.com/premium-vector/cute-elephant-logo-icon-vector-character_760408-50.jpg',
  },
   {
    name: 'The Queer Republic',
    description: 'The Queer Republic organizes events, meet-ups, and discussions, creating a safe and inclusive space for LGBTQ. Join us to be part of a vibrant community advocating for equality and acceptance.',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fpair-of-hands-in-heart-shape-painted-with-rainbow-colors-of-lgbt-or-glbt-flag-the-symbol-of-lesbian-gay-bisexual-transgender-and-queer-lgbtq-white-transparent-background-vector-illustration%2F199971386&psig=AOvVaw2zQdPVJUxpO1smVhToQiGT&ust=1721415234075000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjssIqisYcDFQAAAAAdAAAAABAZ',
  },
    {
    name: 'Pride Circle',
    description: 'Pride Circle is an LGBTQ+ advocacy group in India, promoting workplace inclusivity and community support through resources, training, and events.',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FPrideCircles%2F&psig=AOvVaw3HuBMQs2-vgPl2ydCCV0cy&ust=1721416030565000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDcm-GksYcDFQAAAAAdAAAAABAE',
  },
   {
    name: 'Pride Circle',
    description: 'Bangalore’s LGBTQ+ community is active and inclusive, supported by groups like Namma Pride and Sangama. The city hosts pride events and offers various safe spaces and support networks.',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    name: 'Memory Lane Companions',
    description: 'A space to discuss and share memory care strategies.',
    image:
      'https://play-lh.googleusercontent.com/Jrnpp_Um2QspmwhSnG9WHgBZXvXN-Z7mbjlAJyaZxI--Prvzemx3Qkjz23io7y8-JlM',
  },
  {
    name: 'Caring Hearts Network',
    description: 'Dedicated to compassionate dementia caregiving.',
    image:
      'https://media.istockphoto.com/id/1170794027/vector/yin-yang-panda-cute-logo-vector-illustration.jpg?s=612x612&w=0&k=20&c=xiWk8WaN9dyqRSsptwU_RAckfFiiTdOPzbtuxzJfynY=',
  },
  {
    name: 'Mindful Caregivers',
    description: 'Mindful approaches to dementia care.',
    image:
      'https://static.vecteezy.com/system/resources/previews/021/730/507/original/rainbow-logo-cute-hand-drawn-flat-design-modern-colors-free-vector.jpg',
  },
  {
    name: 'Supportive Hands',
    description: '',
    image:
      'https://logowik.com/content/uploads/images/cute-peeking-dog8044.logowik.com.webp',
  },
  {
    name: 'Dementia Allies',
    description: '',
    image:
      'https://cdn5.vectorstock.com/i/1000x1000/61/19/cute-cartoon-unicorn-fantasy-logo-vector-27996119.jpg',
  },
  {
    name: 'Dementia Caregivers United',
    description: '',
    image:
      'https://img.freepik.com/premium-vector/cute-peace-hand-cartoon-vector-icon-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-176.jpg',
  },
  {
    name: 'Memory Keepers',
    description: '',
    image:
      'https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg',
  },
  {
    name: 'Gentle Care Network',
    description: '',
    image:
      'https://c8.alamy.com/comp/2G9PA3A/cute-funny-happy-star-sign-character-vector-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-star-rating-symbol-review-doodle-character-concept-2G9PA3A.jpg',
  },
  {
    name: "Caregiver's Oasis",
    description: '',
    image:
      'https://i.pinimg.com/736x/86/79/be/8679be5b00e470cd84e5a19513451d52.jpg',
  },
  {
    name: 'Hope and Healing',
    description: '',
    image:
      'https://thumbs.dreamstime.com/b/caring-hands-team-vector-illustration-logo-vector-illustration-caring-hands-team-suitable-logo-white-background-88084233.jpg',
  },
  {
    name: 'Memory Care Network',
    description: '',
    image:
      'https://st4.depositphotos.com/16921356/20303/v/450/depositphotos_203031124-stock-illustration-cute-owl-logo-vector-dsign.jpg',
  },
  {
    name: 'Peaceful Minds',
    description: '',
    image:
      'https://www.shutterstock.com/image-vector/teamwork-logo-abstract-two-hands-260nw-2282414665.jpg',
  },
  // Add more mock data as needed
];

const Community: React.FC = () => {
  return (
    <IonPage className="community-container">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Community</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="avatars-list-content">
        <IonImg src="https://static.vecteezy.com/system/resources/thumbnails/007/509/583/small/lively-characters-of-old-age-flat-design-style-illustration-free-vector.jpg" />
        {mockData.map((person, index) => (
          <IonCard key={index} className="avatars-card">
            <IonRow>
              <IonAvatar className="avatar-img">
                <img src={person.image} alt={`${person.name} image`} />
              </IonAvatar>
              <IonCol>
                <div className="avatar-details">
                  <IonCardHeader>
                    <IonCardTitle className="avatar-name">
                      {person.name}
                    </IonCardTitle>
                    <IonCardSubtitle className="avatar-description">
                      {person.description}
                    </IonCardSubtitle>
                  </IonCardHeader>
                </div>
              </IonCol>
              <IonCol size="auto">
                <IonButton routerLink="community/chat" className="join-button">
                  Join
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Community;
