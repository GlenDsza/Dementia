import { Preferences as Storage } from '@capacitor/preferences';
import { ScheduleModel, Session } from '../models/Schedule';
import { Speaker } from '../models/Speaker';
import { Location } from '../models/Location';

const dataUrl = '/assets/data/data.json';
const locationsUrl = '/assets/data/locations.json';

const HAS_LOGGED_IN = 'hasLoggedIn';
const HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
const USERNAME = 'username';
const USERTYPE = 'patient';

export const getConfData = async () => {
  const response = await Promise.all([fetch(dataUrl), fetch(locationsUrl)]);
  const responseData = await response[0].json();
  const schedule = responseData.schedule[0] as ScheduleModel;
  const sessions = parseSessions(schedule);
  const speakers = responseData.speakers as Speaker[];
  const notification = responseData.notification as any[];
  const locations = (await response[1].json()) as Location[];
  const allTracks = sessions
    .reduce((all, session) => all.concat(session.tracks), [] as string[])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort();

  const data = {
    schedule,
    sessions,
    locations,
    speakers,
    allTracks,
    notification,
    filteredTracks: [...allTracks],
  };
  return data;
};

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME }),
    Storage.get({ key: USERTYPE }),
  ]);
  const isLoggedin = (await response[0].value) === 'true';
  const hasSeenTutorial = (await response[1].value) === 'true';
  const username = (await response[2].value) || undefined;
  const data = {
    isLoggedin,
    hasSeenTutorial,
    username,
  };
  return data;
};

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
};

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({
    key: HAS_SEEN_TUTORIAL,
    value: JSON.stringify(hasSeenTutorial),
  });
};

export const setUsernameData = async (username?: string) => {
  if (!username) {
    await Storage.remove({ key: USERNAME });
  } else {
    await Storage.set({ key: USERNAME, value: username });
  }
};

export const setUserTypeData = async (usertype?: string) => {
  if (!usertype) {
    await Storage.remove({ key: USERTYPE });
  } else {
    await Storage.set({ key: USERTYPE, value: usertype });
  }
};

function parseSessions(schedule: ScheduleModel) {
  const sessions: Session[] = [];
  schedule.groups.forEach((g) => {
    g.sessions.forEach((s) => sessions.push(s));
  });
  return sessions;
}
