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
  IonButtons,
} from '@ionic/react';
import { MessageList } from 'react-chat-elements';
import { FaChevronLeft } from 'react-icons/fa6';
import { useHistory } from 'react-router';
import { image, mic, send } from 'ionicons/icons';
import './Chat.scss';
import 'react-chat-elements/dist/main.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      position: 'left',
      type: 'text',
      text: 'Hello!',
      date: new Date(),
      id: '1',
      avatar:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/vector-objects/jcr_content/main-pars/image_738713385/vector-objects-Step1_900x506.jpg',
      title: 'Ben',
    },
    {
      position: 'right',
      type: 'text',
      text: 'Hey! How have you been Ben?',
      date: new Date(),
      id: '2',
      avatar:
        'https://cdn.pixabay.com/photo/2020/08/19/09/52/vector-art-5500539_640.jpg',
      title: 'Ben',
    },
    {
      position: 'left',
      type: 'text',
      text: "Hi everyone, \nI'm Ben. I wanted to share a story about my mom, who has dementia. \nOne Saturday, I found Mom trying to make breakfast, looking confused. I took over and then suggested we go to the park, a place she loves. As we walked, I talked about our old picnics, and she smiled, remembering bits and pieces. \nWe sat by the pond, and Mom started humming an old tune. I joined in, and for a moment, everything felt normal. When we got home, we looked through a photo album. Mom recognized some pictures and told me stories, even if some details were mixed up. \nI know my mom's situation is worsening gradually. But that day reminded me that even though things are tough, we can still have special moments. It’s these moments that make all the challenges worthwhile.",
      date: new Date(),
      id: '3',
      avatar:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/vector-objects/jcr_content/main-pars/image_738713385/vector-objects-Step1_900x506.jpg',
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
  const [text, setText] = useState('');
  const textRef = useRef('');
  const history = useHistory();

  const imageUploadRef = useRef(null);
  const audioUploadRef = useRef(null);
  const fileUploadRef = useRef(null);

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
          <IonButtons
            slot="start"
            className="ml-4"
            onClick={() => history.push('/ctabs/community')}
          >
            <FaChevronLeft />
          </IonButtons>
          <IonTitle>Chat</IonTitle>
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
          id="chat-list-id"
          lazyLoadingImage="lazy-loading-image-url"
        />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <div className="flex">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="image-upload"
                  ref={imageUploadRef}
                  onChange={(e) => handleFileUpload(e, 'photo')}
                />
                <IonFabButton
                  size="small"
                  onClick={() => triggerFileInput(imageUploadRef)}
                >
                  <IonIcon icon={image} />
                </IonFabButton>
              </div>
              <div>
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
              </div>
              <div>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  id="file-upload"
                  ref={fileUploadRef}
                  onChange={(e) => handleFileUpload(e, 'file')}
                />
              </div>
              <div className="flex-grow flex items-center">
                <IonInput
                  value={text}
                  placeholder="Type a message"
                  onIonChange={(e) => {
                    setText(e.detail.value);
                    textRef.current = e.detail.value;
                  }}
                />
              </div>
              <div>
                <IonFabButton
                  size="small"
                  onClick={() => handleSend('text', textRef.current)}
                >
                  <IonIcon icon={send} />
                </IonFabButton>
              </div>
            </div>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;
