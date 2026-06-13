import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import themeReducer from './slices/themeSlice';
import analyticReducer from './slices/analyticSlice';
import { loadState, saveState, throttle } from './localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
    analytics: analyticReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: persistedState,
});

const throttledSaveState = throttle((state) => {
  saveState({
    tasks: state.tasks,
    theme: state.theme,
    analytics: state.analytics,
  });
}, 2000);

store.subscribe(() => {
  const state = store.getState();
  throttledSaveState(state);
});
