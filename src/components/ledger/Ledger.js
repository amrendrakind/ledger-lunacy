
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ledgerLists } from '../../redux/ledger/ledgerActions';
import LedgerItem from './LedgerItem';
import './Ledger.css';

const Ledger = () => {
  const dispatch = useDispatch();
  const ledger = useSelector((state) => state.Ledger);
  useEffect(() => {
    if (ledger.length === 0) {
      dispatch(ledgerLists());
    }
  });
  return (
    <div>
      <div>
        <h2 className="homepage-heading">Welcome to Your Dashboard</h2>
      </div>
      <div>
        <div className="investing_account container">
          Investing Account
        </div>
        <div className="balance container">
          {ledger.length > 0 ? (<p>${ledger[0].balance}</p>) : (<p>Updating</p> )}
          <div className="balance_text">BALANCE</div>
        </div>
        <div className="past_transactions container">
          Past Transactions
        </div>
        <div className="ledger_container container">
          <div className="ledger_header">Date</div>
          <div className="ledger_header">Transaction</div>
          <div className="ledger_header"></div>
          <div className="ledger_header">Amount</div>
          <div className="ledger_header">Balance</div>
        </div>
        <ul>
          <div >
            {ledger.map((ledger) => (
              <LedgerItem
                key={ledger.activity_id}
                ledger={ledger}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Ledger;
