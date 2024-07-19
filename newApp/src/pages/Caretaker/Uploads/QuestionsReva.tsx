import React, { useState, useRef } from 'react';

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonItem,
  IonText,
  IonModal,
  IonHeader,
  IonFooter,
  IonInput,
  getConfig,
  IonTextarea,
} from '@ionic/react';
import { arrowUpOutline } from 'ionicons/icons';
import { UploadsDescription } from '../../../constants';

import SessionListFilter from '../../../components/SessionListFilter';
import './Uploads.scss';


import * as selectors from '../../../data/selectors';
import { connect } from '../../../data/connect';
import { setSearchText } from '../../../data/sessions/sessions.actions';
import { ScheduleModel } from '../../../models/Schedule';

interface OwnProps {}

interface StateProps {
  schedule: ScheduleModel;
  favoritesSchedule: ScheduleModel;
  mode: 'ios' | 'md';
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}

type RevaQuestionsProps = OwnProps & StateProps & DispatchProps;

const RevaQuestions: React.FC<RevaQuestionsProps> = ({
  favoritesSchedule,
  schedule,
  setSearchText,
  mode,
}) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [pdfFile, setPDFFile] = useState<File | null>(null);
  const [pdfFileName, setPDFFileName] = useState<string>('');
  const hiddenInput = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<UploadsDescription>({
    description: '',
  });
  const { description, } = formState;
  
  const [showCompleteToast, setShowCompleteToast] = useState(false);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  const doRefresh = () => {
    setTimeout(() => {
      ionRefresherRef.current!.complete();
      setShowCompleteToast(true);
    }, 2500);
  };

  const handlePDFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setPDFFile(file);
    setPDFFileName(file?.name || '');
  };

  return (
    <IonPage ref={pageRef} id="schedule-page">

<IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Please help Mary</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen={true}>

        <IonItem className="mt-4">
          <IonText color="secondary">
            <h4>Where is my blue jacket?</h4>
          </IonText>
        </IonItem>

        <IonItem className="mt-4">
          <IonTextarea
            fill="solid"
            label="Description"
            autoGrow={true}
            labelPlacement="floating"
            className="rounded-xl"
            value={description}
            onIonChange={(e) =>
            setFormState({ ...formState, description: e.detail.value! })
            }
          />
        </IonItem>

        <div className="flex justify-center mt-4">
          <IonText>
            <h3>OR</h3>
          </IonText>
        </div>

        <div className='flex justify-center'>
          <IonItem className="mt-8">
            <IonInput
              id="pdfInput"
              fill="outline"
              label="Add PDF"
              labelPlacement="floating"
              className="rounded-lg"
              readonly
              value={pdfFileName}
              onClick={() => hiddenInput.current?.click()}
            />
            <input
              type="file"
              accept="pdf/*"
              ref={hiddenInput}
              onChange={handlePDFChange}
              style={{ display: 'none' }}
            />
          </IonItem>

          <div className='mt-8'>
            <IonButton>
              <IonIcon icon={arrowUpOutline} />
            </IonButton>
          </div>
        </div>
        
      </IonContent>

      <IonFooter>
            <div className='flex justify-center gap-4 mb-4'>
              <IonButton>Save</IonButton>
            </div> 
      </IonFooter>

      <IonModal
        isOpen={showFilterModal}
        onDidDismiss={() => setShowFilterModal(false)}
        presentingElement={pageRef.current!}
      >
        <SessionListFilter onDismissModal={() => setShowFilterModal(false)} />
      </IonModal>

      {/* <ShareSocialFab /> */}
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    schedule: selectors.getSearchedSchedule(state),
    favoritesSchedule: selectors.getGroupedFavorites(state),
    mode: getConfig()!.get('mode'),
  }),
  mapDispatchToProps: {
    setSearchText,
  },
  component: React.memo(RevaQuestions),
});
