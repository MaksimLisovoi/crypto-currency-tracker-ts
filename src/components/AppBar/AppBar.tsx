import { Box } from '@mui/material';

import { Nav } from '../Nav';

export const AppBar = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 4,
        p: 2,
        borderBottom: '1px solid #2a363b',
      }}
    >
      <Nav />
    </Box>
  );
};
