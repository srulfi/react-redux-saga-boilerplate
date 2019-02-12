import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default {
  active: true,
  storeConfig: {
    key: 'root',
    version: 1,
    storage,
    // Reducer keys that you do NOT want stored to persistence here.
    //blacklist: ['nav'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers'.
    // whitelist: [],
    stateReconciler: autoMergeLevel2,
  }
};
