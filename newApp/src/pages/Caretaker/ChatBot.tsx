import React, { useState, useRef } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonInput,
  IonIcon,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { MessageList } from 'react-chat-elements';
import { image, videocam, mic, send } from 'ionicons/icons';
import 'react-chat-elements/dist/main.css';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([
    {
      position: 'left',
      type: 'text',
      text: 'Hello!',
      date: new Date(),
      id: '1',
      avatar: 'https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/vector-objects/jcr_content/main-pars/image_738713385/vector-objects-Step1_900x506.jpg',
      title: 'John',
    },
    {
      position: 'left',
      type: 'text',
      text: 'How are you?',
      date: new Date(),
      id: '2',
      avatar: 'https://cdn.pixabay.com/photo/2020/08/19/09/52/vector-art-5500539_640.jpg',
      title: 'Mary',
    },
    {
      position: 'left',
      type: 'text',
      text: 'Good morning!',
      date: new Date(),
      id: '3',
      avatar: 'https://static.vecteezy.com/vite/assets/vector-qneIUV6W.webp',
      title: 'Cris',
    },
  ]);
  const [text, setText] = useState<string>('');
  const textRef = useRef<string>('');

  const imageUploadRef = useRef<HTMLInputElement>(null);
  const videoUploadRef = useRef<HTMLInputElement>(null);
  const audioUploadRef = useRef<HTMLInputElement>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleSend = (messageType: string, content: any) => {
    const newMessage = {
      position: 'right',
      type: messageType,
      text: messageType === 'text' ? content : undefined,
      data: {
        uri: messageType === 'photo' || messageType === 'video' || messageType === 'audio' ? content : undefined,
        status: {
          click: false,
          loading: 0,
        },
      },
      date: new Date(),
      id: Math.random().toString(),
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg',
    };
    setMessages([...messages, newMessage]);
    setText('');
    textRef.current = '';
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      handleSend(type, file);
    }
  };

  const triggerFileInput = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ChatBot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MessageList
          className="chat-list"
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={messages.map((msg, index) => ({
            position: msg.position,
            type: msg.type,
            text: msg.text,
            title: msg.title,
            data: msg.data,
            date: msg.date,
            id: msg.id,
            avatar: msg.avatar,
            key: index.toString(), // Ensure each item has a unique key
          }))}
          id = "chat-list-id"
          lazyLoadingImage = "lazy-loading-image-url"
        />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>

              <IonCol size="1">
                <input
                  type="file"
                  accept="audio/*"
                  style={{ display: 'none' }}
                  id="audio-upload"
                  ref={audioUploadRef}
                  onChange={(e) => handleFileUpload(e, 'audio')}
                />
                <IonFabButton size="small" onClick={() => triggerFileInput(audioUploadRef)}>
                  <IonIcon icon={mic} />
                </IonFabButton>
              </IonCol>

              <IonCol size="8">
                <IonInput
                  value={text}
                  placeholder="Type a message"
                  onIonChange={(e) => {
                    setText(e.detail.value!);
                    textRef.current = e.detail.value!;
                  }}
                />
              </IonCol>
              <IonCol size="1">
                <IonFabButton size="small" onClick={() => handleSend('text', textRef.current)}>
                  <IonIcon icon={send} />
                </IonFabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatBot;
