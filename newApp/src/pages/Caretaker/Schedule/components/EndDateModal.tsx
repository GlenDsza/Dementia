import { IonCardTitle, IonDatetime, IonModal } from '@ionic/react';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { RoutineInterface } from '../../../../constants';
import '../Schedule.scss';

interface EndDateModalProps {
  formState: RoutineInterface;
  setFormState: Dispatch<SetStateAction<RoutineInterface>>;
  endDateModalRef: RefObject<HTMLIonModalElement>;
}

const EndDateModal: FC<EndDateModalProps> = ({
  endDateModalRef,
  formState,
  setFormState,
}) => {
  const handleEndDateChange = (e: CustomEvent) => {
    const value = e.detail.value as string | string[];
    if (typeof value === 'string') {
      setFormState({ ...formState, endDate: new Date(value) });
    } else if (Array.isArray(value) && value.length > 0) {
      setFormState({ ...formState, endDate: new Date(value[0]) });
    }
  };

  return (
    <IonModal
      ref={endDateModalRef}
      trigger="endDateInput"
      initialBreakpoint={0.4}
      breakpoints={[0, 0.4]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">
          Select End Date
        </IonCardTitle>

        <IonDatetime
          presentation="date"
          preferWheel={true}
          value={formState.endDate.toISOString()}
          min={formState.startDate.toISOString()}
          onIonChange={handleEndDateChange}
        />
      </div>
    </IonModal>
  );
};

export default EndDateModal;
