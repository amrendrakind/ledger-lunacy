import React from 'react';
import PropTypes from 'prop-types';

function LedgerItem(props) {
  const { ledger } = props;
  const {
    activity_id, date, type, amount, balance, destination,
  } = ledger;

  function formatDateString(originalDate) {
    const dateObject = new Date(originalDate);
    
    // Extract date components
    const year = dateObject.getFullYear().toString().slice(-2);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
  
    // Create the formatted date string
    const formattedDate = `${month}/${day}/${year}`;
  
    return formattedDate;
  }

  return (
    <li
      key={activity_id}
    >
      <div className="ledger_container container">
        <div className="ledger_item">
          {formatDateString(date)}
        </div>
        <div className="ledger_item">
          {type}
        </div>
        <div className="ledger_item">
          {destination.type}
          {' '}
          {destination.description}
        </div>
        <div className="ledger_item">
          {amount}
        </div>
        <div className="ledger_item">
          {balance}
        </div>
      </div>
    </li>
  );
}
export default LedgerItem;

LedgerItem.propTypes = {
  ledger:
    PropTypes.objectOf(
      {
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
      },
    ).isRequired,
};
