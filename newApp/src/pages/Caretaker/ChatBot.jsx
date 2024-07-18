import React, { useState, useRef, useEffect } from 'react';
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
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

const ChatBot = () => {
  const [messages, setMessages] = useState([
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
  const [isAudioAvailable, setIsAudioAvailable] = useState(false);
  const textRef = useRef('');

  const checkAudioPermission = async () => {
    await SpeechRecognition.requestPermissions();
    const res = await SpeechRecognition.available();
    setIsAudioAvailable(res.available);
  };

  useEffect(() => {
    checkAudioPermission();
  }, []);

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

  const getAudioInput = async () => {
    textRef.current = '';
    await SpeechRecognition.start({
      language: 'en-US',
      maxResults: 2,
      prompt: 'Say something',
      partialResults: true,
      popup: true,
    });
    // listen to partial results
    SpeechRecognition.addListener('partialResults', (data) => {
      if (data.matches && data.matches.length > 0) {
        setText(data.matches[0]);
        textRef.current = data.matches[0];
      }
    });

    SpeechRecognition.addListener('end', () => {
      console.log('Stopped listening');
    });
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
          className="chat-list pt-8"
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
            <IonRow className="flex items-center">
              <div>
                <IonFabButton size="small" onClick={getAudioInput}>
                  <IonIcon icon={mic} />
                </IonFabButton>
              </div>

              <div className="flex-grow">
                <IonInput
                  value={textRef.current}
                  className={`ml-2`}
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
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatBot;
