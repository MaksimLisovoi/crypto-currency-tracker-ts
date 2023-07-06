import moment from 'moment';
import { checkTextColor } from './columnFuncs';
import { chartTypes } from '../constants/chartTypes';

const formattedDateFull = (value: number) => moment.unix(value).format('lll');
const formattedDateDay = (value: number) => moment.unix(value).format('D MMM');
const formattedDateHours = (value: number) => moment.unix(value).format('HH:mm');

const formatToMillion = (value: number | any) => {
  if (!value) {
    return value;
  }
  const valueStr = String(value);

  if (valueStr.length > 9) {
    return `$${(value / 1000000000).toFixed(3)} B`;
  } else if (valueStr.length > 6) {
    return `$${(value / 1000000).toFixed(2)} M`;
  }
};

const formatToPercent = (value: number) => {
  const format = +((value - 1) * 100).toFixed(2);
  const checkColor: any = checkTextColor(format);
  const formattedVal = Math.abs(format);

  return { checkColor, formattedVal };
};

const daysAmountForReq = (chartType: string): number => {
  if (chartType === chartTypes.hour) {
    return 1;
  }
  if (chartType === chartTypes.week) {
    return 7;
  }
  if (chartType === chartTypes.months) {
    return 30;
  }
  if (chartType === chartTypes.quarter) {
    return 90;
  }
  return 1;
};

export {
  formatToMillion,
  formatToPercent,
  formattedDateFull,
  formattedDateDay,
  formattedDateHours,
  daysAmountForReq,
};
