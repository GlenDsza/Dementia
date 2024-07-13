import React, { Component } from 'react';
import { call } from 'ionicons/icons';
import {
  IonLabel,
  IonTitle,
  IonItem,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCard,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonPopover,
  IonButton,
  IonIcon,
  IonAvatar,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { Task } from './Task';
import { Card } from './Card';
import { NewTaskForm } from './NewTaskForm';
import { NewCardForm } from './NewCardForm'; // Ensure this import is correct
import { TasksList } from './TasksList';

import './Map.css';

interface State {
  newTask: Task;
  tasks: Task[];
  showInputPopover: boolean;
  newCard: Card;
  cards: Card[];
  showCardPopover: boolean;
}

class Map extends Component<{}, State> {
  state: State = {
    newTask: {
      id: 1,
      name: '',
    },
    tasks: [],
    showInputPopover: false,
    newCard: {
      id: 1,
      title: '',
      subtitle: '',
      content: '',
    },
    cards: [],
    showCardPopover: false,
  };

  showPopover = () => {
    this.setState({
      showInputPopover: true,
    });
  };

  hidePopover = () => {
    this.setState({
      showInputPopover: false,
    });
  };

  showCardPopover = () => {
    this.setState({
      showCardPopover: true,
    });
  };

  hideCardPopover = () => {
    this.setState({
      showCardPopover: false,
    });
  };

  addTask = () => {
    this.setState((previousState) => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: '',
      },
      tasks: [...previousState.tasks, previousState.newTask],
    }));
  };

  handleTaskChange = (value: string) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: value,
      },
    });
  };

  handleCardChange = (field: string, value: string) => {
    this.setState({
      newCard: {
        ...this.state.newCard,
        [field]: value,
      },
    });
  };

  addCard = () => {
    this.setState((previousState) => ({
      newCard: {
        id: previousState.newCard.id + 1,
        title: '',
        subtitle: '',
        content: '',
      },
      cards: [...previousState.cards, previousState.newCard],
    }));
  };

  // deleteTask = (taskToDelete: Task) => {
  //   this.setState(previousState => ({
  //     tasks: previousState.tasks.filter(task => task.id !== taskToDelete.id),
  //   }));
  // };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar style={{ borderRadius: '1rem' }}>
            <div className="title">
              <img src="/favicon.png" alt="Logo" width={30} height={30} />
              <h1>Dementia 102</h1>
              <IonButton onClick={this.showPopover}>
                <IonIcon icon={add} />
                Task
              </IonButton>
              <IonButton onClick={this.showCardPopover}>
                <IonIcon icon={add} />
                Member
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding">
          <div className="card-container">
            <IonCard>
              <IonCardTitle className="centered-title">Patient's Detail</IonCardTitle>
            </IonCard>
          </div>

          <div className="horizontal-scroll-container">
            <div className="scrollable-cards">
              <IonRow>
                {this.state.cards.map((card) => (
                  <IonCol key={card.id}>
                    <IonCard color="primary" className="custom-card">
                      <IonCardHeader>
                        <IonCardTitle>{card.title}</IonCardTitle>
                        <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>{card.content}</IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </div>
          </div>

          <IonPopover isOpen={this.state.showInputPopover} onDidDismiss={this.hidePopover}>
            <IonToolbar>
              <IonTitle> New To-Do: </IonTitle>
            </IonToolbar>
            <NewTaskForm onChange={this.handleTaskChange} onAdd={this.addTask} task={this.state.newTask} />
            <IonButton expand="block" onClick={this.hidePopover}>
              Close
            </IonButton>
          </IonPopover>
          <IonGrid>
  <IonRow>
    <IonCol>
      <IonCard color="tertiary" className="custom-card">
        <div className="image-container">
          <img
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            className="custom-image"
            alt="Silhouette of mountains"
            src="https://i.pinimg.com/736x/34/d9/47/34d94780b4d1b478349d9aa4cfc13342.jpg"
          />
        </div>
        <IonCardContent>
          <IonItem lines="none">
            <IonCardSubtitle>Daughter</IonCardSubtitle>
            <IonButton slot="end" color="primary" href="tel:9321131937">
              <IonIcon icon={call} />
            </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonCol>

    <IonCol>
      <IonCard color="primary" className="custom-card">
        <div className="image-container">
          <img
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            className="custom-image"
            alt="Silhouette of mountains"
            src="https://i.pinimg.com/564x/8a/48/f5/8a48f5981a3ce5351d33ace13d58b08e.jpg"
          />
        </div>
        <IonCardContent>
          <IonItem lines="none">
            <IonCardSubtitle>Wife</IonCardSubtitle>
            <IonButton slot="end" color="primary" href="tel:1234567890">
              <IonIcon icon={call} />
            </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonCol>

    <IonCol>
      <IonCard color="secondary" className="custom-card">
        <div className="image-container">
          <img
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            className="custom-image"
            alt="Silhouette of mountains"
            src="https://i.pinimg.com/564x/b2/56/42/b256422ed45df565a723960119729969.jpg"
          />
        </div>
        <IonCardContent>
          <IonItem lines="none">
            <IonCardSubtitle>Son</IonCardSubtitle>
            <IonButton slot="end" color="primary" href="tel:1234567890">
              <IonIcon icon={call} />
            </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonCol>

    <IonCol>
      <IonCard color="tertiary" className="custom-card">
        <div className="image-container">
          <img
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            className="custom-image"
            alt="Silhouette of mountains"
            src="https://i.pinimg.com/564x/3a/8c/a1/3a8ca11cb18aefeb69a0a61b25b94e8e.jpg"
          />
        </div>
        <IonCardContent>
          <IonItem lines="none">
            <IonCardSubtitle>Sister</IonCardSubtitle>
            <IonButton slot="end" color="primary" href="tel:9321131937">
              <IonIcon icon={call} />
            </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonCol>

    <IonCol>
      <IonCard color="primary" className="custom-card">
        <div className="image-container">
          <img
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            className="custom-image"
            alt="Silhouette of mountains"
            src="https://i.pinimg.com/564x/9c/f1/2f/9cf12f1a98ac1e6ad7bf35488c904cdd.jpg"
            />
        </div>
        <IonCardContent>
          <IonItem lines="none">
            <IonCardSubtitle>Caretaker</IonCardSubtitle>
            <IonButton slot="end" color="primary" href="tel:1234567890">
              <IonIcon icon={call} />
            </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
</IonGrid>

          {/* <IonPopover isOpen={this.state.showCardPopover} onDidDismiss={this.hideCardPopover}>
            <IonToolbar>
              <IonTitle> New Card: </IonTitle>
            </IonToolbar>

            <NewCardForm onChange={this.handleCardChange} onAdd={this.addCard} card={this.state.newCard} />
            <IonButton expand="block" onClick={this.hideCardPopover}>
              Close
            </IonButton>
          </IonPopover> */}

          <IonGrid>
            <IonRow>
              <IonCol size="12" size-md="4">
                <IonCard>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" size-md="4">
                <IonCard>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" size-md="4">
                <IonCard>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* <IonList inset={true}>
            <IonLabel>ToDo List</IonLabel>
            <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
          </IonList> */}
        </IonContent>
      </IonPage>
    );
  }
}

export default Map;
