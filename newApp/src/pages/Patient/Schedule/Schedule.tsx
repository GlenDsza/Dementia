import React, { useState, useRef, Ref, useMemo } from 'react';

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonHeader,
  getConfig,
  IonInput,
  IonLabel,
  IonItemGroup,
  IonItemDivider,
  ActionSheetButton,
  IonActionSheet,
} from '@ionic/react';
import { options, search, calendar, add, star } from 'ionicons/icons';
import './Schedule.scss';

import * as selectors from '../../../data/selectors';
import { connect } from '../../../data/connect';
import { setSearchText } from '../../../data/sessions/sessions.actions';
import { ScheduleModel } from '../../../models/Schedule';
import { RoutineInterface, routines } from '../../../constants';
import SessionItem from './components/SessionItem';

interface OwnProps {}

interface StateProps {
  schedule: ScheduleModel;
  mode: 'ios' | 'md';
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}
type ScheduleProps = OwnProps & StateProps & DispatchProps;

const Schedule: React.FC<ScheduleProps> = ({
  schedule,
  setSearchText,
  mode,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');
  interface GroupedRoutine {
    [key: string]: RoutineInterface[];
  }

  const groupRoutinesByTime = (
    routines: RoutineInterface[]
  ): GroupedRoutine => {
    const groups: GroupedRoutine = {
      '12am': [],
      '3am': [],
      '6am': [],
      '9am': [],
      '12pm': [],
      '3pm': [],
      '6pm': [],
      '9pm': [],
    };

    const parseTime = (time: string): Date => {
      const date = new Date();
      const [timeString, period] = time.split(' ');
      const [hours, minutes] = timeString.split(':').map(Number);
      date.setHours(period === 'PM' ? (hours % 12) + 12 : hours % 12, minutes);
      return date;
    };

    const getGroupKey = (time: Date): string => {
      const hour = time.getHours();
      if (hour >= 0 && hour < 3) return '12am';
      if (hour >= 3 && hour < 6) return '3am';
      if (hour >= 6 && hour < 9) return '6am';
      if (hour >= 9 && hour < 12) return '9am';
      if (hour >= 12 && hour < 15) return '12pm';
      if (hour >= 15 && hour < 18) return '3pm';
      if (hour >= 18 && hour < 21) return '6pm';
      return '9pm';
    };

    routines.forEach((routine) => {
      const time = parseTime(routine.startTime);
      const groupKey = getGroupKey(time);
      groups[groupKey].push(routine);
    });

    return groups;
  };

  const groupedRoutines = useMemo(() => {
    return groupRoutinesByTime(routines);
  }, [routines]);

  const pageRef = useRef<HTMLElement>(null);
  const handleSOSClick = () => {
    openContact();
  };

  function openContact() {
    setActionSheetButtons([
      {
        text: `Call - +91 9967878741`,
        handler: () => {
          window.open('tel: +91 9967878741');
        },
      },
      {
        text: `Call - +91 9000078741`,
        handler: () => {
          window.open('tel: +91 9000078741');
        },
      },
    ]);
    setActionSheetHeader(`Call All for SOS Situation`);
    setShowActionSheet(true);
  }

  return (
    <IonPage ref={pageRef} id="schedule-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Schedule</IonTitle>
          <IonButtons slot="end">
            <IonButton
              color="danger"
              className="sos-button"
              onClick={handleSOSClick}
            >
              SOS
            </IonButton>
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
        <div className="flex flex-col p-2">
          <IonItemGroup key="12am">
            {groupedRoutines['12am'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>12:00 am</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['12am'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['3am'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>03:00 am</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['3am'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['6am'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>06:00 am</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['6am'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['9am'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>09:00 am</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['9am'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['12pm'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>12:00 pm</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['12pm'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['3pm'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>03:00 pm</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['3pm'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['6pm'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>06:00 pm</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['6pm'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
            {groupedRoutines['9pm'].length > 0 && (
              <>
                <IonItemDivider sticky>
                  <IonLabel>09:00 pm</IonLabel>
                </IonItemDivider>
                <div className="py-1">
                  {groupedRoutines['9pm'].map((routine) => (
                    <SessionItem routine={routine} key={routine.id} />
                  ))}
                </div>
              </>
            )}
          </IonItemGroup>
        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    schedule: selectors.getSearchedSchedule(state),
    mode: getConfig()!.get('mode'),
  }),
  mapDispatchToProps: {
    setSearchText,
  },
  component: React.memo(Schedule),
});
