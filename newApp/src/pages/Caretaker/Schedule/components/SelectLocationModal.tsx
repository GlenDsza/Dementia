import {
  IonCardTitle,
  IonDatetime,
  IonModal,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { Dispatch, FC, RefObject, SetStateAction, useRef } from 'react';
import '../Schedule.scss';
import { RoutineInterface } from '../../../../constants';
import { GoogleMap } from '@capacitor/google-maps';

interface LocationModalProps {
  formState: RoutineInterface;
  setFormState: Dispatch<SetStateAction<RoutineInterface>>;
  locationModalRef: RefObject<HTMLIonModalElement>;
}

const SelectLocationModal: FC<LocationModalProps> = ({
  formState,
  locationModalRef,
  setFormState,
}) => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  const createMap = async () => {
    if (!mapRef.current) {
      return;
    }

    newMap = await GoogleMap.create({
      id: 'location-map',
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GMAPS_KEY,
      config: {
        center: {
          lat: 18.520306,
          lng: 73.256733,
        },
        zoom: 10,
      },
    });

    await newMap.enableCurrentLocation(true);
  };

  useIonViewWillEnter(() => {
    createMap();
  });
  return (
    <IonModal
      ref={locationModalRef}
      trigger="locationInput"
      initialBreakpoint={0.4}
      breakpoints={[0, 0.4]}
    >
      <div className="p-8">
        <IonCardTitle className="flex justify-center">
          Select Location
        </IonCardTitle>

        <capacitor-google-map
          ref={mapRef}
          style={{
            display: 'inline-block',
            width: '300px',
            height: '300px',
          }}
        />
      </div>
    </IonModal>
  );
};

export default SelectLocationModal;
