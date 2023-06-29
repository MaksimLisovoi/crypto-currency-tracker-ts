import { Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { checkTextColor } from '../services/columnFuncs';

export const TimeCell = (props: GridRenderCellParams<any>, myProp: string) => {
  const { row } = props;
  const timeStamp = myProp === 'day' ? row?.delta?.day : row?.delta?.hour;
  const value = +((timeStamp - 1) * 100).toFixed(2);
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
