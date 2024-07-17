import React, { useState, useRef } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonInput,
  IonButton,
  IonIcon,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { ChatList, MessageList } from 'react-chat-elements';
import { image, videocam, mic, location as locIcon, send } from 'ionicons/icons';
import 'react-chat-elements/dist/main.css';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
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
      title: 'Hello',
      subtitle: 'World',
      text: messageType === 'text' ? content : undefined,
      data: {
        uri: messageType === 'photo' || messageType === 'video' || messageType === 'audio' ? content : undefined,
        status: {
          click: false,
          loading: 0,
        },
      },
      date: new Date(), // example date
      id: Math.random().toString(), // example id (converted to string)
      avatar: 'https://placeimg.com/50/50/any', // example avatar
    };
    setMessages([...messages, newMessage]);
    console.log(newMessage)
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
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChatList
          className="chat-list"
          dataSource={messages.map((msg, index) => ({
            position: msg.position,
            type: msg.type,
            text: msg.text,
            title:msg.text,
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
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="image-upload"
                  ref={imageUploadRef}
                  onChange={(e) => handleFileUpload(e, 'photo')}
                />
                <IonFabButton size="small" onClick={() => triggerFileInput(imageUploadRef)}>
                  <IonIcon icon={image} />
                </IonFabButton>
              </IonCol>
              <IonCol size="1">
                <input
                  type="file"
                  accept="video/*"
                  style={{ display: 'none' }}
                  id="video-upload"
                  ref={videoUploadRef}
                  onChange={(e) => handleFileUpload(e, 'video')}
                />
                <IonFabButton size="small" onClick={() => triggerFileInput(videoUploadRef)}>
                  <IonIcon icon={videocam} />
                </IonFabButton>
              </IonCol>
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
              <IonCol size="1">
                <IonFabButton size="small">
                  <IonIcon icon={locIcon} />
                </IonFabButton>
              </IonCol>
              <IonCol size="1">
                <input
                  type="file"
                  style={{ display: 'none' }}
                  id="file-upload"
                  ref={fileUploadRef}
                  onChange={(e) => handleFileUpload(e, 'file')}
                />
                {/* <IonFabButton size="small" onClick={() => triggerFileInput(fileUploadRef)}>
                  <IonIcon icon={document} />
                </IonFabButton> */}
              </IonCol>
              <IonCol size="6">
                <IonInput
                  value={text}
                  placeholder="Type a message"
                  onIonChange={(e) => {
                    setText(e.detail.value!)
                    textRef.current = e.detail.value!;
                  }}
                />
              </IonCol>
              <IonCol size="1">
                <IonFabButton size="small" onClick={() => {
                  handleSend('text', textRef.current)
                  }}>
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

export default Chat;
