import React, { useState, useRef } from 'react';

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonIcon,
  IonItem,
  IonSearchbar,
  IonText,
  IonModal,
  IonHeader,
  IonFooter,
  IonInput,
  getConfig,
  IonTextarea,
} from '@ionic/react';
import { options, search } from 'ionicons/icons';
import { UploadsDescription } from '../../../constants';

import SessionListFilter from '../../../components/SessionListFilter';
import './Uploads.scss';

import ShareSocialFab from '../../../components/ShareSocialFab';

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

type UploadsProps = OwnProps & StateProps & DispatchProps;

const Uploads: React.FC<UploadsProps> = ({
  favoritesSchedule,
  schedule,
  setSearchText,
  mode,
}) => {
  const [segment, setSegment] = useState<'all' | 'favorites'>('all');
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
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
          {!showSearchbar && (
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          )}
          {ios && (
            <IonSegment
              value={segment}
              onIonChange={(e) => setSegment(e.detail.value as any)}
            ></IonSegment>
          )}
          {!ios && !showSearchbar && <IonTitle>Upload File</IonTitle>}
          {showSearchbar && (
            <IonSearchbar
              showCancelButton="always"
              placeholder="Search"
              onIonInput={(e: CustomEvent) => setSearchText(e.detail.value)}
              onIonCancel={() => setShowSearchbar(false)}
            ></IonSearchbar>
          )}

          <IonButtons slot="end">
            {!ios && !showSearchbar && (
              <IonButton onClick={() => setShowSearchbar(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            )}
            {!showSearchbar && (
              <IonButton onClick={() => setShowFilterModal(true)}>
                {mode === 'ios' ? (
                  'Filter'
                ) : (
                  <IonIcon icon={options} slot="icon-only" />
                )}
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>

        {!ios && (
          <IonToolbar>
            <IonSegment
              value={segment}
              onIonChange={(e) => setSegment(e.detail.value as any)}
            >
            </IonSegment>
          </IonToolbar>
        )}
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Uploads</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              placeholder="Search"
              onIonInput={(e: CustomEvent) => setSearchText(e.detail.value)}
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>

        <IonItem className="mt-4">
            <IonInput
              id="pdfInput"
              fill="solid"
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

          <div className='ml-4'>
            <IonButton>Upload</IonButton>
          </div>

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
      </IonContent>

      <IonFooter>
            <div className='flex justify-center gap-4 mb-4'>
              <IonButton>Submit</IonButton>
              <IonButton color="danger">Delete</IonButton>
            </div> 
      </IonFooter>

      <IonModal
        isOpen={showFilterModal}
        onDidDismiss={() => setShowFilterModal(false)}
        presentingElement={pageRef.current!}
      >
        <SessionListFilter onDismissModal={() => setShowFilterModal(false)} />
      </IonModal>

      <ShareSocialFab />
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
  component: React.memo(Uploads),
});
