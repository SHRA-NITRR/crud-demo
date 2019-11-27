import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

export const  store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);


store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});
