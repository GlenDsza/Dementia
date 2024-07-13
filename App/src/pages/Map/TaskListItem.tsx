// TaskListItem.tsx
import React, { FunctionComponent } from 'react';
import { IonItem, IonLabel, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Task } from './Task.tsx';

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>{task.name}</IonCol>
          <IonCol>
            <IonButton fill="clear" onClick={handleDelete}>
              <IonIcon name="close" />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};
