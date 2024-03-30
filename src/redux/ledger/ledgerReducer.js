import LEDGER_DATA from '../types';

const initialState = [];

const ledgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEDGER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default ledgerReducer;
