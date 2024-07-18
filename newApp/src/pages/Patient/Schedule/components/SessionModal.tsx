import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { IonCardTitle, IonDatetime, IonModal } from '@ionic/react';
import { RoutineInterface } from '../../../../constants';
import '../Schedule.scss';

interface SessionModalProps {
  sessionModalRef: RefObject<HTMLIonModalElement>;
  session: RoutineInterface | null;
}

const SessionModal: FC<SessionModalProps> = ({ sessionModalRef, session }) => {
  return (
    <IonModal
      ref={sessionModalRef}
      trigger="dateInput"
      initialBreakpoint={0.8}
      breakpoints={[0, 0.8]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">
          {session?.name}
        </IonCardTitle>
      </div>
    </IonModal>
  );
};

export default SessionModal;
