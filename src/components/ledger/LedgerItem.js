import React from 'react';
import PropTypes from 'prop-types';

function LedgerItem(props) {
  const { ledger } = props;
  const {
    activity_id, date, type, amount, balance, destination,
  } = ledger;

  function formatDateString(originalDate) {
    const dateObject = new Date(originalDate);
    
    // Extract date components year month and day
    const year = dateObject.getFullYear().toString().slice(-2);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
  
    // Create the formatted date string
    const formattedDate = `${month}/${day}/${year}`;
  
    return formattedDate;
  }

  function toSentenceCase(str) {
    const words = str.toLowerCase().split(/[_\s]+/); // Convert to lowercase and split into words if space or _
    // Capitalize the first letter of each word and join back
    const sentenceCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return sentenceCaseWords;
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
          {toSentenceCase(destination.type)}
          {' '}
          {toSentenceCase(type)}
          {' '}
          {amount >= 0 ? 'from' : 'for'}
          {' '}
          {destination.description}
        </div>
        <div className={`ledger_item ${amount <= 0 ? 'negative_ledger_balance' : 'positive_ledger_balance'}`}>
          {'$'}
          {amount}
        </div>
        <div className={`ledger_item ${balance <= 0 ? 'negative_ledger_balance' : 'positive_ledger_balance'}`}>
          {'$'}
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
