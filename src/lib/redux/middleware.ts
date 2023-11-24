import { PayloadAction } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { loadState } from './localStorage';

const logger = (store:any) => (next:any) => (action:PayloadAction<any>) => {
  console.group(action.type)
  console.log('is store', store);
  console.log('current state', store.getState())
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd();
  return result
}

const middlewares = [thunk]

export default middlewares;

/* Core */
/*
import { createLogger } from 'redux-logger'

const middleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
    predicate: () => typeof window !== 'undefined',
  }),
]

export { middleware }
*/