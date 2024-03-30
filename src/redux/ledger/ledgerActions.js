import ledgerList from './ledgerAPI';
import LEDGER_DATA from '../types';

export const ledgerLists = () => async (dispatch) => {
  dispatch({
    type: LEDGER_DATA,
    payload: ledgerList,
  });
};

export default ledgerLists;
