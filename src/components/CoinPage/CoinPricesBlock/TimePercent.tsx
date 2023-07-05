import { Typography } from '@mui/material';
import { formatToPercent } from '../../../services/otherFuncs';

export const TimePercent = ({ value }: any) => {
  const format = formatToPercent(value);

  return (
    <Typography mb={1} fontSize={18} color={format.checkColor.color}>
      {format.formattedVal}%{format.checkColor.symbol}
    </Typography>
  );
};
