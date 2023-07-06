import axios from 'axios';
import * as errorCatcher from './errorCatcher';
import * as requestData from '../constants/requestData';

const { listBody, coinInfoBody, coinHistoryBody } = requestData;

let baseUrl = `https://api.livecoinwatch.com/`;

const config = {
  headers: {
    'x-api-key': '7cc1965a-90a6-4add-b6a6-d770f0f2b887',
  },
};

export async function getCurrencyList(offset: number, limit: number) {
  try {
    listBody.offset = offset;
    listBody.limit = limit;
    const allCurrencies = await axios.post(`${baseUrl}coins/list`, requestData.listBody, config);
    return allCurrencies.data;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}

export async function getCoinInfo(coinCode: any) {
  try {
    coinInfoBody.code = coinCode;
    const coin = await axios.post(`${baseUrl}coins/single`, requestData.coinInfoBody, config);
    return coin.data;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}

export async function getCoinHistory(coinCode: any, dateFrom: number, dateTo: number) {
  try {
    coinHistoryBody.code = coinCode;
    coinHistoryBody.start = dateFrom;
    coinHistoryBody.end = dateTo;
    const coin = await axios.post(
      `${baseUrl}coins/single/history`,
      requestData.coinHistoryBody,
      config,
    );
    return coin.data;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}
