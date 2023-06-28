import { GridRenderCellParams } from "@mui/x-data-grid";


const convertToShirt = (params: GridRenderCellParams<any>) => {
  const sum = params.value;
  if (!sum) {
    return sum;
  }

  const sumStr = String(sum);

  // Convert the decimal value to a percentage
  if (sumStr.length > 9) {
    return `$${(sum / 1000000000).toFixed(3)} B`;
  } else if (sumStr.length > 6) {
    return `$${(sum / 1000000).toFixed(2)} M`;
  }
};

const roundSum = (params: GridRenderCellParams<any>) => {
  if (!params.value) {
    return params.value;
  }
  // Convert the decimal value to a percentage
  return `${params.value.toFixed(2)}`;
};

  const checkTextColor = (value: any) => {
    if (value === 0) {
      return '';
    } else if (value < 0) {
      return 'error.light';
    } else if (value > 0) {
      return 'success.light';
    }
  };

export { convertToShirt, roundSum , checkTextColor };
