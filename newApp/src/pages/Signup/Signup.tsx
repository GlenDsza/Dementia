import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { FC, useRef, useState } from "react";
import { call, person } from "ionicons/icons";
import OTPInput from "react-otp-input";
import "./Signup.scss";
import { useHistory } from "react-router";

export interface UserDetailsInterface {
  name: string;
  mobile: string;
}

const Signup: FC = () => {
  const history = useHistory();
  const otpModal = useRef<HTMLIonModalElement>(null);
  const [otp, setOtp] = useState<string>("");
  const [userDetails, setUserDetails] = useState<UserDetailsInterface>({
    name: "abcd",
    mobile: "",
  });
  const { name, mobile } = userDetails;
  const handleSubmit = () => {
    console.log({ name, mobile });
  };
  const handleSubmitOtp = () => {
    console.log(otp);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader>
          <IonToolbar style={{ borderRadius: "1rem" }}>
            <div className="title">
              <img src="/assets/icon/favicon.png" alt="Logo" width={30} height={30} />
              <h1>Dementia 101</h1>
            </div>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonText className="flex justify-center mt-8">
            <IonCardTitle>Register (Caretaker)</IonCardTitle>
          </IonText>
        </div>
        <IonCard className="mx-4">
          <IonCardHeader>
            <IonCardSubtitle className="flex justify-center">
              Fill following details
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className="p-3">
            <IonInput
              label="Name"
              labelPlacement="floating"
              type="text"
              counter={false}
              maxlength={50}
              value={name}
              onIonChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  name: e.detail.value! as string,
                })
              }
              className="mt-4 inputField"
            >
              <IonIcon slot="start" icon={person} aria-hidden="true"></IonIcon>
            </IonInput>
            <IonInput
              label="Mobile No."
              labelPlacement="floating"
              type="number"
              counter={true}
              maxlength={10}
              value={mobile}
              onIonChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  mobile: e.detail.value! as string,
                })
              }
              className="mt-4"
              helperText="Used for OTP authentication"
            >
              <IonIcon slot="start" icon={call} aria-hidden="true"></IonIcon>
            </IonInput>
            <IonButton
              id="submitBtn"
              className="my-8 "
              expand="block"
              onClick={handleSubmit}
            >
              Submit
            </IonButton>
            <IonText
              color="medium"
              slot="end"
              className="flex justify-end"
              onClick={() => history.goBack()}
            >
              <h3>Have account already? Login</h3>
            </IonText>
          </IonCardContent>
        </IonCard>
        <IonModal
          ref={otpModal}
          trigger="submitBtn"
          initialBreakpoint={0.4}
          breakpoints={[0, 0.4]}
        >
          <div className="p-8">
            <IonCardTitle className="flex justify-center">
              Enter OTP
            </IonCardTitle>
            <OTPInput
              containerStyle={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                marginTop: "0.25rem",
              }}
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-4">-</span>}
              renderInput={(props) => <input {...props} />}
              inputType="number"
              inputStyle={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                width: "3rem",
                textAlign: "center",
              }}
            />
            <IonButton fill="outline" expand="block" onClick={handleSubmitOtp}>
              Submit OTP
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
