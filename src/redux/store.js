import { createStore } from 'redux';
import { rootReducer } from './reducer';

const initialState = {
  contacts: [],
  filter: '',
};

export const store = createStore(rootReducer, initialState);
