import { Avatar, Box, Link, Typography } from '@mui/material';

import { GridRenderCellParams } from '@mui/x-data-grid';
import { NavLink } from 'react-router-dom';

export const CoinBlock = (props: GridRenderCellParams<any>) => {
  const { row } = props;
  return (
    <Link href={`coins/${row.code}`}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar src={row.png32} alt={row.name} sx={{ width: 30, height: 30 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
            }}
          >
            {row.code}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: 'primary.textColor',
            }}
          >
            {row.name}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
