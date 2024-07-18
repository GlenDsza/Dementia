import {
  IonBadge,
  IonButton,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from '@ionic/react';
import { TiTick } from 'react-icons/ti';
import { FaRegHourglass } from 'react-icons/fa';
import { FC, useRef } from 'react';
import { RoutineInterface } from '../../../../constants';
import { trashOutline } from 'ionicons/icons';
import '../Schedule.scss';

interface SessionItemProps {
  routine: RoutineInterface;
}

const SessionItem: FC<SessionItemProps> = ({ routine }) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);
  const isRoutineEndTimePast = (routine) => {
    const currentDate = new Date();

    // Combine endDate and endTime into a single Date object
    const [endHour, endMinutes] = routine.endTime.split(':');
    const endPeriod = routine.endTime.slice(-2); // Extract AM or PM

    let endHour24 = parseInt(endHour);
    if (endPeriod === 'PM' && endHour24 !== 12) {
      endHour24 += 12;
    } else if (endPeriod === 'AM' && endHour24 === 12) {
      endHour24 = 0;
    }

    const routineEndTime = new Date();
    routineEndTime.setHours(endHour24, parseInt(endMinutes), 0, 0);

    return currentDate > routineEndTime;
  };

  return (
    <IonItemSliding ref={ionItemSlidingRef} className="track1">
      <div className="flex w-full">
        <IonItem
          routerLink={`/ctabs/schedule/${routine.id}`}
          className="flex-grow"
        >
          <IonLabel
            className={`${
              isRoutineEndTimePast(routine) ? 'success' : 'primary'
            } pl-4 flex-grow`}
          >
            <div className="flex gap-4 mb-2">
              <h3>{routine.name}</h3>

              {isRoutineEndTimePast(routine) ? (
                <IonBadge
                  color="success"
                  className="rounded-xl text-white flex items-center"
                >
                  <TiTick
                    size={15}
                    style={{ marginBottom: '0.1rem', marginLeft: '0.1rem' }}
                  />
                </IonBadge>
              ) : (
                ''
              )}
            </div>
            <p>
              {routine.startTime} &mdash;&nbsp; {routine.endTime} (
              {routine.location
                ? routine.location.name
                : routine.endLocation?.name}
              )
            </p>
          </IonLabel>
        </IonItem>
        <IonButton
          fill="clear"
          color={'dark'}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <IonIcon
            slot="end"
            icon={trashOutline}
            aria-hidden="true"
            style={{ width: '1.1rem', height: '1.1rem' }}
          />
        </IonButton>
      </div>

      <IonItemOptions>
        <IonItemOption color="danger" onClick={() => {}}>
          Remove
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default SessionItem;
