import { IonCardTitle, IonDatetime, IonModal } from '@ionic/react';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { RoutineInterface } from '../../../../constants';
import '../Schedule.scss';

interface SelectedDateModalProps {
  dateModalRef: RefObject<HTMLIonModalElement>;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

const SelectedDateModal: FC<SelectedDateModalProps> = ({
  dateModalRef,
  selectedDate,
  setSelectedDate,
}) => {
  const handleDateChange = (e: CustomEvent) => {
    const value = e.detail.value as string | string[];
    if (typeof value === 'string') {
      setSelectedDate(new Date(value));
    } else if (Array.isArray(value) && value.length > 0) {
      setSelectedDate(new Date(value[0]));
    }
  };
  return (
    <IonModal
      ref={dateModalRef}
      trigger="dateInput"
      initialBreakpoint={0.4}
      breakpoints={[0, 0.4]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">Select Date</IonCardTitle>

        <IonDatetime
          presentation="date"
          preferWheel={true}
          value={selectedDate.toISOString()}
          onIonChange={handleDateChange}
        />
      </div>
    </IonModal>
  );
};

export default SelectedDateModal;
