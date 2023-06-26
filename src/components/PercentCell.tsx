import { Avatar, Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { roundSum } from '../services/columnFuncs';

// type Coin = {
//   title: string;
//   descr: string;
//   img: string;
// };

export const PercentCell = (props: GridRenderCellParams<any>) => {
  const { row } = props;
  const stringValue = ((row?.delta?.day - 1) * 100).toFixed(2);
  const checkTextColor = +stringValue < 0 ? 'error.light' : 'success.light';
  const formattedVal = Math.abs(+stringValue);

  return (
    //   <span>{formattedValue}</span>
    <Box
      sx={{
        color: checkTextColor,
        // color: `${+formattedValue < 0} ? 'error.main' : 'success.dark'} `,
      }}
    >
      <Typography
      // sx={{
      //   color: checkTextColor,
      //   // color: `${+formattedValue < 0} ? 'error.main' : 'success.dark'} `,
      // }}
      >
        {formattedVal}%
      </Typography>
    </Box>
    // <Box
    //   sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Avatar src={row.png32} alt={row.name} sx={{ width: 30, height: 30 }} />
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       ml: 1,
    //     }}
    //   >
    //     <Typography
    //       sx={{
    //         fontSize: 16,
    //       }}
    //     >
    //       {row.code}
    //     </Typography>
    //     <Typography
    //       sx={{
    //         fontSize: 12,
    //         color: 'primary.textColor',
    //       }}
    //     >
    //       {row.name}
    //     </Typography>
    //   </Box>
    // </Box>
  );
};
