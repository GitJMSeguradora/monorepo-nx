import 'firebase/remote-config';
import firebase from './Firebase';

const remoteConfig = firebase.remoteConfig();

const minimumFetchIntervalMillis =
  process.env.NODE_ENV === 'production' ? 3600000 : 60;

remoteConfig.settings = {
  minimumFetchIntervalMillis
};

export default remoteConfig;
