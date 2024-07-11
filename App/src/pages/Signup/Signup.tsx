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
import { call } from "ionicons/icons";
import OTPInput from "react-otp-input";

const Signup: FC = () => {
  const otpModal = useRef<HTMLIonModalElement>(null);
  const [otp, setOtp] = useState<string>("");
  const [userType, setUserType] = useState<"patient" | "caretaker">("patient");
  const handleGetOtp = () => {
    console.log("Get OTP");
  };
  const handleSubmitOtp = () => {
    console.log("Submit OTP");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        "Hello World!"
        {/* <IonHeader>
          <IonToolbar style={{ borderRadius: "1rem" }}>
            <div className="title">
              <img src="/favicon.png" alt="Logo" width={30} height={30} />
              <h1>Dementia 101</h1>
            </div>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonText className="flex justify-center mt-8">
            <IonCardTitle>Welcome back!</IonCardTitle>
          </IonText>
        </div>
        <IonCard className="mx-8">
          <IonCardHeader>
            <IonCardSubtitle className="flex justify-center">
              Login to your account
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className="p-3">
            <IonSegment value={userType} className="mt-4" color={"primary"}>
              <IonSegmentButton
                value="patient"
                onClick={() => setUserType("patient")}
              >
                <IonLabel>Patient</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="caretaker"
                onClick={() => setUserType("caretaker")}
              >
                <IonLabel>Caretaker</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            <IonInput
              label="Mobile No."
              labelPlacement="floating"
              type="number"
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
              onClick={() => {}}
            >
              <h3>Don't have an account? Sign up</h3>
            </IonText>
          </IonCardContent>
        </IonCard>
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
              Submit
            </IonButton>
          </div>
        </IonModal> */}
      </IonContent>
    </IonPage>
  );
};

export default Signup;
