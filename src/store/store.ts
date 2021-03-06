import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { articles, fetchingStatus, page, query, favourites } from './reducers';

const rootReducer = combineReducers({
  articles,
  fetchingStatus,
  page,
  query,
  favourites,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  return store;
}
