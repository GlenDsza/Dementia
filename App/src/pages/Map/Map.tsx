import React, { Component } from 'react';
import {
  IonLabel,
  IonTitle,
  IonList,
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
                    <IonCard color="primary">
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
                <IonCard color="primary">
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>Card Content</IonCardContent>
                </IonCard>
                </IonCol>

                <IonCol>
                <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Card Content</IonCardContent>
                </IonCard>
                </IonCol>

                <IonCol>
                <IonCard color="tertiary">
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Card Content</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Card Content</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol>
                <IonCard color="primary">
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>Card Content</IonCardContent>
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
