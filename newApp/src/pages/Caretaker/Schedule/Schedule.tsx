import React, { useState, useRef, forwardRef, Ref } from 'react';

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
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
  IonToast,
  IonModal,
  IonHeader,
  getConfig,
  IonInput,
  IonCardTitle,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { options, search, calendar, add, star } from 'ionicons/icons';

import SessionList from '../../../components/SessionList';
import './Schedule.scss';

import * as selectors from '../../../data/selectors';
import { connect } from '../../../data/connect';
import { setSearchText } from '../../../data/sessions/sessions.actions';
import { ScheduleModel } from '../../../models/Schedule';
import { close } from 'ionicons/icons';
import { RoutineInterface } from '../../../constants';
import StartTimeModal from './components/StartTimeModal';
import EndTimeModal from './components/EndTimeModal';
import StartDateModal from './components/StartDateModal';
import EndDateModal from './components/EndDateModal';
import SelectedDateModal from './components/SelectedDateModal';
import SelectLocationModal from './components/SelectLocationModal';

interface OwnProps {}

interface StateProps {
  schedule: ScheduleModel;
  favoritesSchedule: ScheduleModel;
  mode: 'ios' | 'md';
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}

type ScheduleProps = OwnProps & StateProps & DispatchProps;

const Schedule: React.FC<ScheduleProps> = ({
  favoritesSchedule,
  schedule,
  setSearchText,
  mode,
}) => {
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [showCompleteToast, setShowCompleteToast] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateModalRef = useRef<HTMLIonModalElement>(null);
  const startDateModalRef = useRef<HTMLIonModalElement>(null);
  const endDateModalRef = useRef<HTMLIonModalElement>(null);
  const startTimeModalRef = useRef<HTMLIonModalElement>(null);
  const endTimeModalRef = useRef<HTMLIonModalElement>(null);
  const locationModalRef = useRef<HTMLIonModalElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageFileName, setImageFileName] = useState<string>('');
  const hiddenInput = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<RoutineInterface>({
    name: '',
    description: '',
    endDate: new Date(),
    startDate: new Date(),
    startTime: '',
    endTime: '',
    location: null,
  });

  const {
    name,
    description,
    endDate,
    endTime,
    startDate,
    startTime,
    location,
  } = formState;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImageFile(file);
    setImageFileName(file?.name || '');
  };

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  const doRefresh = () => {
    setTimeout(() => {
      ionRefresherRef.current!.complete();
      setShowCompleteToast(true);
    }, 2500);
  };

  const handleDateChange = (e: CustomEvent) => {
    const value = e.detail.value as string | string[];
    if (typeof value === 'string') {
      setSelectedDate(new Date(value));
    } else if (Array.isArray(value) && value.length > 0) {
      setSelectedDate(new Date(value[0]));
    }
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
          {!ios && !showSearchbar && <IonTitle>Schedule</IonTitle>}
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
          </IonButtons>
        </IonToolbar>
        <IonToolbar className="px-4 pb-2">
          <IonInput
            id="dateInput"
            fill="solid"
            placeholder="Select Date"
            className="rounded-xl"
            value={selectedDate.toDateString()}
            onClick={() => {}}
          >
            <IonIcon slot="start" icon={calendar} aria-hidden="true" />
          </IonInput>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Schedule</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              placeholder="Search"
              onIonInput={(e: CustomEvent) => setSearchText(e.detail.value)}
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>

        <IonRefresher
          slot="fixed"
          ref={ionRefresherRef}
          onIonRefresh={doRefresh}
        >
          <IonRefresherContent />
        </IonRefresher>

        <IonToast
          isOpen={showCompleteToast}
          message="Refresh complete"
          duration={2000}
          onDidDismiss={() => setShowCompleteToast(false)}
        />

        <SessionList schedule={schedule} listType={'all'} hide={false} />
      </IonContent>

      {/* Selected Date Modal */}
      <SelectedDateModal
        dateModalRef={dateModalRef}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      {/* Add To-Do Modal */}
      <IonModal
        isOpen={showAddModal}
        onDidDismiss={() => setShowAddModal(false)}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add to Schedule</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowAddModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding flex flex-col gap-8">
          {/* Name */}
          <IonItem className="mt-4">
            <IonInput
              fill="solid"
              label="Name"
              labelPlacement="floating"
              className="rounded-xl"
              value={name}
              onIonChange={(e) =>
                setFormState({ ...formState, name: e.detail.value! })
              }
            />
          </IonItem>

          {/* Description */}
          <IonItem className="mt-4">
            <IonInput
              fill="solid"
              label="Description"
              labelPlacement="floating"
              className="rounded-xl"
              value={description}
              onIonChange={(e) =>
                setFormState({ ...formState, description: e.detail.value! })
              }
            />
          </IonItem>

          {/* Start Date */}
          <IonItem className="mt-4">
            <IonInput
              id="startDateInput"
              fill="solid"
              label="Start Date"
              labelPlacement="floating"
              placeholder="Select Date"
              className="rounded-xl"
              value={startDate.toDateString()}
            />
          </IonItem>

          {/* End Date */}
          <IonItem className="mt-4">
            <IonInput
              id="endDateInput"
              fill="solid"
              label="End Date"
              labelPlacement="floating"
              placeholder="Select Date"
              className="rounded-xl"
              value={endDate.toDateString()}
            />
          </IonItem>

          {/* Start Time */}
          <IonItem className="mt-4">
            <IonInput
              id="startTimeInput"
              fill="solid"
              label="Start Time"
              labelPlacement="floating"
              className="rounded-xl"
              value={startTime}
              onIonChange={(e) =>
                setFormState({ ...formState, startTime: e.detail.value! })
              }
            />
          </IonItem>

          {/* End Time */}
          <IonItem className="mt-4">
            <IonInput
              id="endTimeInput"
              fill="solid"
              label="End Time"
              labelPlacement="floating"
              className="rounded-xl"
              value={endTime}
              onIonChange={(e) =>
                setFormState({ ...formState, endTime: e.detail.value! })
              }
            />
          </IonItem>

          {/* Location */}
          <IonItem className="mt-4">
            <IonInput
              id="locationInput"
              fill="solid"
              label="Location (Co-ordinates)"
              labelPlacement="floating"
              className="rounded-xl"
              value={location ? `${location?.lat}, ${location?.lng}` : ''}
            />
          </IonItem>

          <IonItem className="mt-4">
            <IonInput
              id="imageInput"
              fill="solid"
              label="Add Image"
              labelPlacement="floating"
              className="rounded-lg"
              readonly
              value={imageFileName}
              onClick={() => hiddenInput.current?.click()}
            />
            <input
              type="file"
              accept="image/*"
              ref={hiddenInput}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Image Preview</IonLabel>
            {imageFile && (
              <img
                src={'/assets/img/patient.png'}
                alt="Uploaded"
                className="w-full rounded-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            )}
          </IonItem>
          <IonButton expand="block" onClick={() => {}}>
            Add Item
          </IonButton>
        </IonContent>

        {/* Start Date Modal */}
        <StartDateModal
          formState={formState}
          setFormState={setFormState}
          startDateModalRef={startDateModalRef}
        />

        {/* End Date Modal */}
        <EndDateModal
          formState={formState}
          setFormState={setFormState}
          endDateModalRef={endDateModalRef}
        />

        {/* Start Time Modal */}
        <StartTimeModal
          formState={formState}
          setFormState={setFormState}
          startTimeModalRef={startTimeModalRef}
        />

        {/* Selected End Time Modal */}
        <EndTimeModal
          formState={formState}
          setFormState={setFormState}
          endTimeModalRef={endTimeModalRef}
        />

        {/* Location input Modal */}
        <SelectLocationModal
          formState={formState}
          setFormState={setFormState}
          locationModalRef={locationModalRef}
        />
      </IonModal>

      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton onClick={() => setShowAddModal(true)}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
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
  component: React.memo(Schedule),
});
