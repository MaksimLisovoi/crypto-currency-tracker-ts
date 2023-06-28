import { Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { checkTextColor } from '../services/columnFuncs';

// type Coin = {
//   title: string;
//   descr: string;
//   img: string;
// };

export const HourCell = (props: GridRenderCellParams<any>) => {
  const { row } = props;
  const value = +((row?.delta?.hour - 1) * 100).toFixed(2);
  const checkColor = checkTextColor(value);
  const formattedVal = Math.abs(value);

  return (
    //   <span>{formattedValue}</span>
    <Box
      sx={{
        color: checkColor,
      }}
    >
      <Typography>{formattedVal}%</Typography>
    </Box>
  );
};
