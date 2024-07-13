// TasksList.tsx
import React, { FunctionComponent } from 'react';
import { IonList, IonLabel } from '@ionic/react';
import { Task } from './Task';
import { TaskListItem } from './TaskListItem';

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TasksList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  <IonList inset={true}>
    <IonLabel>ToDo List</IonLabel>
    {tasks.map(task => (
      <TaskListItem key={task.id} task={task} onDelete={onDelete} />
    ))}
  </IonList>
);
