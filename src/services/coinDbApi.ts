import axios from 'axios';
import * as errorCatcher from './errorCatcher';
 
import { requestData } from '../constants/requestData'

let baseUrl = `https://api.livecoinwatch.com/`;

const config = {
  headers: {
    ' x-api-key': '7cc1965a-90a6-4add-b6a6-d770f0f2b887',
  },
};




export async function getCurrencyList() {
  try {
    const allCurrencies = await axios.post(`${baseUrl}coins/list`, requestData, config);

    console.log(allCurrencies);

    return allCurrencies.data;
  } catch (error) {
  errorCatcher.reportError({message: errorCatcher.getErrorMessage(error)})
  }
}
