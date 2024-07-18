import { IonCardTitle, IonDatetime, IonModal } from '@ionic/react';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { RoutineInterface } from '../../../../constants';
import '../Schedule.scss';

interface EndTimeModalProps {
  formState: RoutineInterface;
  setFormState: Dispatch<SetStateAction<RoutineInterface>>;
  endTimeModalRef: RefObject<HTMLIonModalElement>;
}

const options = {
  hour: 'numeric' as 'numeric',
  minute: 'numeric' as 'numeric',
  hour12: true,
};

const EndTimeModal: FC<EndTimeModalProps> = ({
  endTimeModalRef,
  formState,
  setFormState,
}) => {
  return (
    <IonModal
      ref={endTimeModalRef}
      trigger="endTimeInput"
      initialBreakpoint={0.4}
      breakpoints={[0, 0.4]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">
          Select End Time
        </IonCardTitle>

        <IonDatetime
          presentation="time"
          multiple={false}
          value={formState.endTime}
          min={formState.startTime || new Date().toISOString()}
          onIonChange={(e) =>
            setFormState({
              ...formState,
              endTime: new Date(e.detail.value! as string).toLocaleTimeString(
                'en-US',
                options
              ),
            })
          }
        />
      </div>
    </IonModal>
  );
};

export default EndTimeModal;
