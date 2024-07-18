import { IonCardTitle, IonDatetime, IonModal } from '@ionic/react';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { RoutineInterface } from '../../../../constants';
import '../Schedule.scss';

interface StartTimeModalProps {
  formState: RoutineInterface;
  setFormState: Dispatch<SetStateAction<RoutineInterface>>;
  startTimeModalRef: RefObject<HTMLIonModalElement>;
}

const options = {
  hour: 'numeric' as 'numeric',
  minute: 'numeric' as 'numeric',
  hour12: true,
};

const StartTimeModal: FC<StartTimeModalProps> = ({
  formState,
  setFormState,
  startTimeModalRef,
}) => {
  return (
    <IonModal
      ref={startTimeModalRef}
      trigger="startTimeInput"
      initialBreakpoint={0.4}
      breakpoints={[0, 0.4]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">
          Select Start Time
        </IonCardTitle>

        <IonDatetime
          presentation="time"
          multiple={false}
          value={formState.startTime}
          onIonChange={(e) =>
            setFormState({
              ...formState,
              startTime: new Date(e.detail.value! as string).toLocaleTimeString(
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

export default StartTimeModal;
