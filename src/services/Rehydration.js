import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxPersist from '../config/ReduxPersist';

const updateReducers = (store: Object) => {
  const { version } = ReduxPersist;

  // check to ensure latest reducer version
  storage.getItem('version').then((localVersion) => {
    if (localVersion !== version) {
      // purge store
      persistStore(store, null).purge();

      storage.setItem('version', version);
    } else {
      persistStore(store, null);
    }
  }).catch(() => {
    persistStore(store, null);
    storage.setItem('version', version);
  })
}

export default { updateReducers };
