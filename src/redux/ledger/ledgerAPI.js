const data = [
  {
    activity_id: '1',
    date: '2014-10-01T01:00:29+00:00',
    type: 'DEPOSIT',
    method: 'ACH',
    amount: 1003.75,
    balance: 1003.75,
    requester: {
      type: 'INVESTMENT',
    },
    source: {
      type: 'EXTERNAL',
      id: 18238147,
      description: 'Chase ** 9867',
    },
    destination: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
  },
  {
    activity_id: '2',
    date: '2014-10-01T01:00:30+00:00',
    type: 'INVESTMENT',
    amount: -999.50,
    balance: 4.25,
    requester: {
      type: 'INVESTMENT',
    },
    source: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Investor description',
    },
    destination: {
      type: 'CAMPAIGN_FUND',
      id: '899b188040fd01315c6206cbae434dcb',
      description: 'Uber Technologies',
    },
  },
  {
    activity_id: '3',
    date: '2014-10-02T00:00:30+00:00',
    type: 'REFUND',
    amount: 500,
    balance: 504.25,
    requester: {
      type: 'INVESTMENT',
    },
    source: {
      type: 'CAMPAIGN_FUND',
      id: '899b188040fd01315c6206cbae434dcb',
      description: 'Uber Technologies',
    },
    destination: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
  },
  {
    activity_id: '4',
    date: '2014-10-03T10:30:30+00:00',
    type: 'WITHDRAWAL',
    method: 'ACH',
    amount: -515.00,
    balance: 0,
    source: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
    destination: {
      type: 'EXTERNAL',
      id: 18238147,
      description: 'Chase ** 9867',
    },
  },
  {
    activity_id: '4',
    date: '2014-10-03T10:30:30+00:00',
    type: 'WITHDRAWAL',
    method: 'ACH',
    amount: -515.00,
    balance: 0,
    source: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
    destination: {
      type: 'EXTERNAL',
      id: 18238147,
      description: 'Chase ** 9867',
    },
  },
  {
    activity_id: '5',
    date: '2014-10-03T09:30:30+00:00',
    type: 'TRANSFER',
    amount: 10.75,
    balance: 515.0,
    source: {
      type: 'ISSUER',
      id: 521063487980,
      description: 'Twitter',
    },
    destination: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
  },
  {
    activity_id: '6',
    date: '2014-10-03T12:30:30+00:00',
    type: 'TRANSFER',
    amount: -90.25,
    balance: 4909.75,
    source: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
    destination: {
      type: 'SPECIAL_ACCOUNT',
      description: 'Failed ACH Recovery',
    },
  },
  {
    activity_id: '7',
    date: '2014-10-03T12:30:30+00:00',
    type: 'DEPOSIT',
    method: 'WIRE',
    amount: 5000.0,
    balance: 5000.0,
    source: { type: 'EXTERNAL' },
    destination: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
  },
  {
    activity_id: '8',
    date: '2014-10-04T00:16:47+00:00',
    type: 'DEPOSIT',
    method: 'ACH',
    amount: 0.25,
    balance: 4910,
    source: {
      type: 'EXTERNAL',
      id: null,
    },
    destination: {
      type: 'INVESTOR',
      id: 76510190788,
      description: 'Michael Daugherty',
    },
  },
];

const LEDGER = (data) => {
  const uniqueDates = new Set();

  // Filter, sort, and remove duplicates based on date
  const processedData = data
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((item) => {
      const dateStr = new Date(item.date).toISOString();
      if (!uniqueDates.has(dateStr)) {
        uniqueDates.add(dateStr);
        return true;
      }
      return false;
    });

  return processedData;
};

export default LEDGER(data);
