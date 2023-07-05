import { checkTextColor } from './columnFuncs';

const formatToMillion = (value: number) => {
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

export { formatToMillion, formatToPercent };
