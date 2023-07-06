import { GridRenderCellParams } from '@mui/x-data-grid';

//

const roundSum = (params: GridRenderCellParams<any>) => {
  if (!params.value) {
    return params.value;
  }
  // Convert the decimal value to a percentage
  return `${params.value.toFixed(2)}`;
};

const checkTextColor = (value: any) => {
  let color = '';
  let symbol = '';

  if (value === 0) {
    return color;
  } else if (value < 0) {
    color = 'error.light';
    symbol = '⮟';
    return { color, symbol };
  } else if (value > 0) {
    color = 'success.light';
    symbol = '⮝';
    return { color, symbol };
  }
};

const valueFormatter = (params: any, symbol: string, side: string = '') => {
  const value = params.value;
  if (!value) {
    return value;
  }
  const valueStr = String(value);

  // Convert the decimal value to a percentage

  const formatToMillion = () => {
    if (valueStr.length > 9) {
      return `${(value / 1000000000).toFixed(3)} B`;
    } else if (valueStr.length > 6) {
      return `${(value / 1000000).toFixed(2)} M`;
    }
  };

  const checkParam = () => {
    if (side === 'left') {
      return `${symbol}${value}`;
    }
    if (side === 'right') {
      return `${value} ${symbol}`;
    }
    if (side === 'both') {
      return `${symbol}${formatToMillion()}`;
    }
  };

  return checkParam();
};

export { roundSum, checkTextColor, valueFormatter };
