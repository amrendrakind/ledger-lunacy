
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
    <div className="container">
      <div>
        <h2 className="homepage-heading">Welcome to Your Dashboard</h2>
      </div>
      <div className="investing_account">
        Investing Account
      </div>
      <div className="balance">
        {ledger.length > 0 ? (<p>${ledger[0].balance}</p>) : (<p>Updating</p> )}
        Balance
      </div>
      <div className="past_transactions">
        Past Transactions
      </div>
      <div className="ledger_container">
        <div className="ledger_item">Date</div>
        <div className="ledger_item">Transaction</div>
        <div className="ledger_item">Description</div>
        <div className="ledger_item">Amount</div>
        <div className="ledger_item">Balance</div>
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
  );
};

export default Ledger;
