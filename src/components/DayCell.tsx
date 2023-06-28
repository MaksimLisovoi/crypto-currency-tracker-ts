import { Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { checkTextColor } from '../services/columnFuncs';

export const DayCell = (props: GridRenderCellParams<any>) => {
  const { row } = props;
  const value = +((row?.delta?.day - 1) * 100).toFixed(2);
  const checkColor: any = checkTextColor(value);
  const formattedVal = Math.abs(value);

  return (
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
