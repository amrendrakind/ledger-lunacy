import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

import ledgerReducer from './ledger/ledgerReducer';

// Combine all reducers into one place
const rootReducer = combineReducers({
  Ledger: ledgerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
  // composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;

export { rootReducer };
