import React, { FC, useRef, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonText,
  IonCardTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonModal,
} from '@ionic/react';
import './Login.scss';
import { useHistory } from 'react-router';
import OTPInput from 'react-otp-input';
import { call } from 'ionicons/icons';
import '../../theme/styles.css';
import {
  setIsLoggedIn,
  setUsername,
  setUserType,
} from '../../data/user/user.actions';
import { connect } from '../../data/connect';
import { RouteComponentProps } from 'react-router';
interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setUserType: typeof setUserType;
}

interface LoginProps extends OwnProps, DispatchProps {}

const Login: React.FC<any> = ({
  setIsLoggedIn,
  setUsername: setUsername,
  setUserType: setUserType,
}) => {
  const history = useHistory();
  const otpModal = useRef<HTMLIonModalElement>(null);
  const [mobile, setMobile] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [userType, setType] = useState<'patient' | 'caretaker'>('patient');

  const handleGetOtp = () => {
    console.log('Get OTP');
  };

  const handleSubmitOtp = () => {
    // Save user type to local storage
    localStorage.setItem('userType', userType);
    const url = userType === 'patient' ? '/ptabs' : '/ctabs';
    setIsLoggedIn(true);
    setUsername('Harit2101');
    setUserType(userType);
    history.push(url);
    otpModal.current?.dismiss();
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center ion-padding">
        <div className="login-container">
          <img src="/assets/icon/logo.png" alt="Logo" className="app-logo" />
          <h1 className="app-name">Reva</h1>

          <IonCard className="mx-4">
            <IonCardHeader>
              <IonCardSubtitle className="flex justify-center">
                Login to your account
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="p-3">
              <IonSegment value={userType} className="mt-4" color={'primary'}>
                <IonSegmentButton
                  value="patient"
                  onClick={() => setType('patient')}
                >
                  <IonLabel>Patient</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton
                  value="caretaker"
                  onClick={() => setType('caretaker')}
                >
                  <IonLabel>Caretaker</IonLabel>
                </IonSegmentButton>
              </IonSegment>

              <IonInput
                label="Mobile No."
                labelPlacement="floating"
                type="number"
                value={mobile}
                onIonChange={(e) => setMobile(e.detail.value! as string)}
                counter={true}
                maxlength={10}
                className="mt-8"
              >
                <IonIcon slot="start" icon={call} aria-hidden="true"></IonIcon>
              </IonInput>
              <IonButton
                id="getOtpBtn"
                className="my-8 "
                expand="block"
                onClick={handleGetOtp}
              >
                Get OTP
              </IonButton>
              <IonText
                color="medium"
                slot="end"
                className="flex justify-end"
                onClick={() => {
                  history.push('/signup');
                }}
              >
                <h3>Don't have an account? Sign up</h3>
              </IonText>
            </IonCardContent>
          </IonCard>
        </div>

        <IonModal
          ref={otpModal}
          trigger="getOtpBtn"
          initialBreakpoint={0.4}
          breakpoints={[0, 0.4]}
        >
          <div className="p-8">
            <IonCardTitle className="flex justify-center">
              Enter OTP
            </IonCardTitle>
            <OTPInput
              containerStyle={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                marginTop: '0.25rem',
              }}
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-4">-</span>}
              renderInput={(props) => <input {...props} />}
              inputType="number"
              inputStyle={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                width: '3rem',
                textAlign: 'center',
              }}
            />
            <IonButton fill="outline" expand="block" onClick={handleSubmitOtp}>
              Submit
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setUserType,
  },
  component: Login,
});
