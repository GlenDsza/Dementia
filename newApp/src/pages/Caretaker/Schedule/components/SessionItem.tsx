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
import { checkmarkCircleOutline } from 'ionicons/icons';
import '../Schedule.scss';

interface SessionItemProps {
  routine: RoutineInterface;
}

const SessionItem: FC<SessionItemProps> = ({ routine }) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);
  return (
    <IonItemSliding ref={ionItemSlidingRef} className="track1">
      <div className="flex w-full">
        <IonItem
          routerLink={`/ctabs/schedule/${routine.id}`}
          className="flex-grow"
        >
          <IonLabel
            className={`${
              routine.status === 'Done' ? 'primary' : 'secondary'
            } pl-4 flex-grow`}
          >
            <div className="flex gap-4 mb-2">
              <h3>{routine.name}</h3>

              {routine.status === 'Done' ? (
                <IonBadge
                  color="success"
                  className="rounded-xl text-white flex items-center px-2"
                >
                  {routine.status}
                  <TiTick
                    size={15}
                    style={{ marginBottom: '0.1rem', marginLeft: '0.1rem' }}
                  />
                </IonBadge>
              ) : (
                <IonBadge
                  color="warning"
                  className="rounded-xl text-white flex items-center px-2"
                >
                  {routine.status}
                  <FaRegHourglass
                    size={15}
                    style={{ marginBottom: '0.1rem', marginLeft: '0.1rem' }}
                  />
                </IonBadge>
              )}
            </div>
            <p>
              {routine.startTime} &mdash;&nbsp; {routine.endTime} (
              {routine.location?.name})
            </p>
          </IonLabel>
        </IonItem>
        <IonButton
          fill="clear"
          color={'dark'}
          onClick={(e) => {
            e.preventDefault();
          }}
          disabled={routine.status === 'Done'}
        >
          <IonIcon
            slot="end"
            icon={checkmarkCircleOutline}
            aria-hidden="true"
            size="large"
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
