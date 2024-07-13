// NewTaskForm.tsx
import React, { FunctionComponent } from 'react';
import { IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react';
import { Task } from './Task.tsx';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({ onChange, onAdd, task }) => (
  <form onSubmit={onAdd}>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonInput
            placeholder="Enter new to-do here:"
            value={task.name}
            onIonChange={onChange}
            required
          ></IonInput>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton expand="block" type="submit">
            Confirm
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  </form>
);
