export type CoinPricesProps = {
  coinCode?: string;
};

export type NameBlockProps = {
  coin: any;
  coinCode?: string;
};

export type deltaList = {
  name: string;
  value: number;
};

export type pageState = {
  isLoading: boolean;
  currencies: currency[];
};

export type currency = {
  rank: number;
  rate: number;
  name: string;
  code: string;
  allTimeHighUSD: number;
  cap: number;
  volume: number;
  webp32: string;
  webp64: string;
  delta: { day: number; hour: number; month: number; quarter: number; week: number; year: number };
};

export type coinHistoryItem = {
  cap: number;
  date: number;
  liquidity: number;
  rate: number;
  volume: number;
};

export type coinHistoryType = {
  history?: coinHistoryItem[];
};

export type coinStateType = {
  isLoading: boolean;
  coinHistory: { history?: coinHistoryItem[] };
};
