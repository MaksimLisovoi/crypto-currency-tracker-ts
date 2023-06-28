import { Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { checkTextColor } from '../services/columnFuncs';

export const HourCell = (props: GridRenderCellParams<any>) => {
  const { row } = props;
  const value = +((row?.delta?.hour - 1) * 100).toFixed(2);
  const checkColor: any = checkTextColor(value);
  const formattedVal = Math.abs(value);

  return (
    //   <span>{formattedValue}</span>
    <Box
      sx={{
        color: checkColor.color,
      }}
    >
      <Typography>
        {formattedVal}%{checkColor.symbol}
      </Typography>
    </Box>
  );
};
