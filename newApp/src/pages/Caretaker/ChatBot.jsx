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
import { mic, send } from 'ionicons/icons';
import 'react-chat-elements/dist/main.css';

const ChatBot = () => {
  const [messages, setMessages] =
    useState(
    [
      {
        position: 'left',
        type: 'text',
        text: "Welcome! I'm ChatBot, your AI assistant. Let me know how can I help you",
        date: new Date(),
        id: '3',
        avatar:
          'https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user',
        title: 'Reva',
      },
    ]);
  const [text, setText] = useState('');
  const textRef = useRef({});

  const audioUploadRef = useRef(null);

  const handleSend = (messageType, content) => {
    const newMessage = {
      position: 'right',
      type: messageType,
      text: messageType === 'text' ? content : undefined,
      data: {
        uri:
          messageType === 'photo' ||
          messageType === 'video' ||
          messageType === 'audio'
            ? content
            : undefined,
        status: {
          click: false,
          loading: 0,
        },
      },
      date: new Date(),
      id: Math.random().toString(),
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg',
    };
    setMessages([...messages, newMessage]);
    setText('');
    textRef.current = '';
  };

  const handleFileUpload = (event, type) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      handleSend(type, file);
    }
  };

  const triggerFileInput = (inputRef) => {
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
            data: msg.data,
            date: msg.date,
            id: msg.id,
            avatar: msg.avatar,
            key: index.toString(), // Ensure each item has a unique key
          }))}
          id="chat-list-id"
          lazyLoadingImage="lazy-loading-image-url"
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
                <IonFabButton
                  size="small"
                  onClick={() => triggerFileInput(audioUploadRef)}
                >
                  <IonIcon icon={mic} />
                </IonFabButton>
              </IonCol>

              <IonCol size="8">
                <IonInput
                  value={text}
                  placeholder="Type a message"
                  onIonChange={(e) => {
                    setText(e.detail.value);
                    textRef.current = e.detail.value;
                  }}
                />
              </IonCol>
              <IonCol size="1">
                <IonFabButton
                  size="small"
                  onClick={() => handleSend('text', textRef.current)}
                >
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
