import { Location } from '../../models/Location';
import { Speaker } from '../../models/Speaker';
import { ScheduleModel, Session } from '../../models/Schedule';
export interface ConfState {
  schedule: ScheduleModel;
  sessions: Session[];
  speakers: Speaker[];
  favorites: number[];
  locations: Location[];
  filteredTracks: string[];
  searchText?: string;
  mapCenterId?: number;
  loading?: boolean;
  allTracks: string[];
  menuEnabled: boolean;
  notification: any[];
}
