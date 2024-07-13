import React, { FunctionComponent } from 'react';
import { IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react';
import { Task } from './Task';  // Assuming 'tax.tsx' defines Task interface
import { InputChangeEventDetail } from '@ionic/core';  // Import InputChangeEventDetail

interface Props {
  onChange: (value: string) => void;
  onAdd: () => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({ onChange, onAdd, task }) => {

  const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = event.detail.value as string;
    onChange(value);
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onAdd(); }}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonInput 
              placeholder="Enter new to-do here:"
              value={task.name}
              onIonChange={handleInputChange}
              required
            ></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton fill="outline" type="submit"> Confirm </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};

export default NewTaskForm;
