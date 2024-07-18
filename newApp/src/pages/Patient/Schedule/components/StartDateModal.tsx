import { IonCardTitle, IonDatetime, IonModal } from '@ionic/react';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { RoutineInterface } from '../../../../constants';
import '../Schedule.scss';

interface StartDateModalProps {
  formState: RoutineInterface;
  setFormState: Dispatch<SetStateAction<RoutineInterface>>;
  startDateModalRef: RefObject<HTMLIonModalElement>;
}

const StartDateModal: FC<StartDateModalProps> = ({
  formState,
  setFormState,
  startDateModalRef,
}) => {
  const handleStartDateChange = (e: CustomEvent) => {
    const value = e.detail.value as string | string[];
    if (typeof value === 'string') {
      setFormState({ ...formState, startDate: new Date(value) });
    } else if (Array.isArray(value) && value.length > 0) {
      setFormState({ ...formState, startDate: new Date(value[0]) });
    }
  };

  return (
    <IonModal
      ref={startDateModalRef}
      trigger="startDateInput"
      initialBreakpoint={0.4}
      breakpoints={[0, 0.4]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">
          Select Start Date
        </IonCardTitle>

        <IonDatetime
          presentation="date"
          preferWheel={true}
          value={formState.startDate.toISOString()}
          onIonChange={handleStartDateChange}
        />
      </div>
    </IonModal>
  );
};

export default StartDateModal;
