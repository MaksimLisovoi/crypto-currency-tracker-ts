const listBody = {
  currency: 'USD',
  sort: 'rank',
  order: 'ascending',
  offset: 0,
  limit: 20,
  meta: true,
};

const coinInfoBody = {
  currency: 'USD',
  code: 'BTC',
  meta: true,
};

const coinHistoryBody = {
  currency: 'USD',
  code: 'BTC',
  start: 1617035100000,
  end: 1617035400000,
};

export { listBody, coinHistoryBody, coinInfoBody };
