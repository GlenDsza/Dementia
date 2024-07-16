import '../Home.scss';

export enum RoutineType {
  primary = 'primary',
  secondary = 'secondary',
}
interface RoutineItemProps {
  type: RoutineType;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
}

const RoutineItem = ({
  type,
  title,
  startTime,
  endTime,
  location,
}: RoutineItemProps) => {
  return (
    <div
      className={`rounded-lg notification-card flex flex-col gap-1 pl-2 pt-2 ${type}`}
    >
      <span>{title}</span>
      <span>
        {startTime} - {endTime} - {location}
      </span>
    </div>
  );
};

export default RoutineItem;
