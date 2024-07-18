
import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonCardContent,
  IonCheckbox,
} from '@ionic/react';
import { add, trash } from 'ionicons/icons';
// import SpeakerItem from '../../components/SpeakerItem';
import { Speaker } from '../../models/Speaker';
import { Session } from '../../models/Schedule';
import { connect } from '../../data/connect';
import * as selectors from '../../data/selectors';
import { Todo } from '../../models/Todo';

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerList: React.FC<SpeakerListProps> = ({
  speakers: initialSpeakers,
  speakerSessions,
}) => {
  const [speakers, setSpeakers] = useState<Speaker[]>(initialSpeakers);
  const [showSpeakerModal, setShowSpeakerModal] = useState(false);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  //caller list
  const [newSpeaker, setNewSpeaker] = useState<Partial<Speaker>>({
    id: undefined,
    profilePic: '',
    name: '',
    phone: '',
  });

  // Todo list state
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Partial<Todo>>({
    id: 0,
    name: '',
    time: '',
    activity: '',
    location: '',
    image: '',
    mapUrl: '',
    completed: false,
  });

  // Location list state
  const [locations, setLocations] = useState<any[]>([]);
  const [newLocation, setNewLocation] = useState<Partial<any>>({
    id: 0,
    name: '',
    imageUrl: '',
    locationUrl: '',
  });

  const handleSpeakerInputChange = (e: CustomEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewSpeaker((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddSpeaker = () => {
    setShowSpeakerModal(false);
    const newId = speakers.length > 0 ? Math.max(...speakers.map(s => s.id)) + 1 : 1;
    const newSpeakerWithId = { ...newSpeaker, id: newId };
    setSpeakers([...speakers, newSpeakerWithId as Speaker]);
    setNewSpeaker({ id: undefined, profilePic: '', name: '', phone: '' });
  };

  const handleDeleteSpeaker = (id: number) => {
    setSpeakers(speakers.filter(speaker => speaker.id !== id));
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Assuming you are storing the image as base64 for simplicity
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTodo((prevState) => ({
          ...prevState,
          image: reader.result as string, // store image as base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Functions for managing todos
  const handleTodoInputChange = (e: CustomEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddTodo = () => {
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    const newTodoWithId = { ...newTodo, id: newId };
    setTodos([...todos, newTodoWithId as Todo]);
    setNewTodo({
      id: 0,
      name: '',
      time: '',
      activity: '',
      location: '',
      image: '',
      mapUrl: '',
      completed: false,
    });
    setShowTodoModal(false);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Functions for managing locations
  const handleLocationInputChange = (e: CustomEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewLocation((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddLocation = () => {
    const newId = locations.length > 0 ? Math.max(...locations.map(l => l.id)) + 1 : 1;
    const newLocationWithId = { ...newLocation, id: newId };
    setLocations([...locations, newLocationWithId]);
    setNewLocation({
      id: 0,
      name: '',
      imageUrl: '',
    });
    setShowLocationModal(false);
  };

  const handleDeleteLocation = (id: number) => {
    setLocations(locations.filter(location => location.id !== id));
  };

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="scrollable-container">
          <IonGrid fixed>
            <IonRow className="speaker-list-add" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
              {speakers.map((speaker) => (
                <IonCol size="11" size-md="4" size-lg="4" key={speaker.id}>
                  {/* <SpeakerItem
                    key={speaker.id}
                    speaker={speaker}
                    sessions={speakerSessions[speaker.name]}
                    onDelete={() => handleDeleteSpeaker(speaker.id)}
                  /> */}
                </IonCol>
              ))}
            </IonRow>
            <IonCol size="12" size-md="6" size-lg="8" className="add-speaker-col">
              <IonFab vertical="bottom" horizontal="end">
                <IonFabButton onClick={() => setShowSpeakerModal(true)}>
                  <IonIcon icon={add} />
                </IonFabButton>
              </IonFab>
            </IonCol>

            <IonRow className="todo-list">
              <IonCol size="12" size-md="6" size-lg="8">
                <h5 style={{ paddingLeft: '14px' }}>Routine</h5>
                <IonFab vertical="top" horizontal="end">
                  <IonFabButton onClick={() => setShowTodoModal(true)}>
                    <IonIcon icon={add} />
                  </IonFabButton>
                </IonFab>
                <IonList>
                  {todos.map(todo => (
                    <IonCard key={todo.id}>
                      <IonCardContent className='todo-list-card'>
                        <IonItem className='todo-list-card-item'>
                          <IonLabel>{todo.name}</IonLabel>
                          <IonCheckbox slot="end" checked={todo.completed} />
                          <IonButton fill="clear" slot="end" onClick={() => handleDeleteTodo(todo.id)}>
                            <IonIcon icon={trash} />
                          </IonButton>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  ))}
                </IonList>
              </IonCol>
            </IonRow>

            <IonRow className="location-list-add" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
            {/* <h5 style={{ paddingLeft: '14px' }}>Let's Go</h5> */}
            
              {locations.map((location) => (
                <IonCol className='location-card' size="11" size-md="7" size-lg="4" key={location.id}>
                  <IonCard>
                    <img src={location.imageUrl} alt={location.name} />
                    <IonCardContent>
                      <h2>{location.name}</h2>
                      <IonButton fill="solid" onClick={() => { /* Add navigation logic here */ }}>
                        Go
                      </IonButton>
                      <IonButton fill="clear" onClick={() => handleDeleteLocation(location.id)}>
                        <IonIcon icon={trash}/>
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
            <IonCol size="12" size-md="6" size-lg="8" className="add-speaker-col">
              <IonFab vertical="bottom" horizontal="end">
                <IonFabButton onClick={() => setShowLocationModal(true)}>
                  <IonIcon icon={add} />
                </IonFabButton>
              </IonFab>
            </IonCol>
          </IonGrid>
        </div>

        <IonModal isOpen={showSpeakerModal} onDidDismiss={() => setShowSpeakerModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add New Speaker</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowSpeakerModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput
                name="name"
                value={newSpeaker.name}
                onIonChange={handleSpeakerInputChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Profile Picture URL</IonLabel>
              <IonInput
                name="profilePic"
                value={newSpeaker.profilePic}
                onIonChange={handleSpeakerInputChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Phone</IonLabel>
              <IonInput
                name="phone"
                value={newSpeaker.phone}
                onIonChange={handleSpeakerInputChange}
              />
            </IonItem>
            <IonButton expand="block" onClick={handleAddSpeaker}>
              Add Speaker
            </IonButton>
          </IonContent>
        </IonModal>

        <IonModal isOpen={showTodoModal} onDidDismiss={() => setShowTodoModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add New To-Do</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowTodoModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="stacked">Task Name</IonLabel>
              <IonInput
                name="name"
                value={newTodo.name}
                onIonChange={handleTodoInputChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Time</IonLabel>
              <IonInput
                name="time"
                value={newTodo.time}
                onIonChange={handleTodoInputChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Activity</IonLabel>
              <IonInput
                name="activity"
                value={newTodo.activity}
                onIonChange={handleTodoInputChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Location</IonLabel>
              <IonInput
                name="location"
                value={newTodo.location}
                onIonChange={handleTodoInputChange}
              />
            </IonItem>
            {/* <IonItem>
              <IonLabel position="stacked">Image URL</IonLabel>
              <IonInput
                name="image"
                value={newTodo.image}
                onIonChange={handleTodoInputChange}
              />
            </IonItem> */}
            <IonItem>
              <IonLabel position="stacked">Image URL</IonLabel>
              <IonInput name="image" value={newTodo.image} onIonChange={handleTodoInputChange} />
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />
            </IonItem>
            <IonItem>
            <IonLabel position="stacked">Image Preview</IonLabel>
            {newTodo.image && (
              <img src={newTodo.image} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
            )}
          </IonItem>

            <IonItem>
              <IonLabel position="stacked">Map URL</IonLabel>
              <IonInput
                name="mapUrl"
                value={newTodo.mapUrl}
                onIonChange={handleTodoInputChange}
              />
            </IonItem>
            <IonButton expand="block" onClick={handleAddTodo}>
              Add To-Do
            </IonButton>
          </IonContent>
        </IonModal>

        <IonModal isOpen={showLocationModal} onDidDismiss={() => setShowLocationModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add New Location</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowLocationModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="stacked">Location Name</IonLabel>
              <IonInput
                name="name"
                value={newLocation.name}
                onIonChange={handleLocationInputChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Image</IonLabel>
              <IonInput
                name="imageUrl"
                value={newLocation.imageUrl}
                onIonChange={handleLocationInputChange}
              />
            </IonItem>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />

            <IonItem>
              <IonLabel position="stacked">Location URL</IonLabel>
              <IonInput
                name="locationUrl"
                value={newLocation.location}
                onIonChange={handleLocationInputChange}
              />
            </IonItem>
            <IonButton expand="block" onClick={handleAddLocation}>
              Add Location
            </IonButton>
          </IonContent>
        </IonModal>
         {/* Embedded CSS */}
        
          <style>{`
            #speaker-list {
              .scrollable-container {
                height: 100vh; 
                overflow-y: auto; 
              }

              .todo-list {
                height: 35vh; 
                overflow-y: auto; 
                background-color: #FDAB96;
                border-radius: 15px;
                padding: 10px;
              }

              .speaker-list-add {
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;
                border-radius: 15px;
                height: 16vh; 
                padding-bottom: 0px;
                margin-bottom:0px;
              }
              .location-list-add{
               display: flex;
               flex-wrap: nowrap;
               overflow-x: auto;
               border-radius: 15px;
               height: 30vh; 
               padding-bottom: 10px;
               margin-bottom:0px; 
              }
              .location-list-add img{
                width: 100px;
                height: 50px;
                object-fit: cover;
               }
              .speaker-card {
                min-width: 100px;
                flex: 0 0 auto;
                border-radius: 15px;
                padding-bottom: 0px;

              }

              .speaker-item {
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .speaker-item img {
                width: 100px;
                height: 50px;
                object-fit: cover;
              }

              .speaker-item h2 {
                font-size: 16px;
                margin: 5px 0;
              }

              .speaker-item ion-button {
                margin-top: 5px;
              }
              .scrollable-container {
               overflow-x: auto;
             }
            
             .speaker-list-add {
               display: flex;
               flex-wrap: nowrap;
               overflow-x: auto;
             }
            
             .speaker-list-add ion-col {
               min-width: 200px; /* adjust this value as needed */
             }
            
             .add-speaker-col {
               display: flex;
               justify-content: center;
               align-items: center;
               min-width: 200px; /* adjust this value as needed */
             }
             .todo-list-card{
               padding-top: 0px;
               padding-bottom: 0px;
              
             }
             todo-list-card-item{
               padding-top: 0px;
               padding-bottom: 0px
              
             }
            
            }
          `}</style>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    speakers: selectors.getSpeakers(state),
    speakerSessions: selectors.getSpeakerSessions(state),
  }),
  component: React.memo(SpeakerList),
});
