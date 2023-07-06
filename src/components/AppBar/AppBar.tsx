import { Box } from '@mui/material';

import { Nav } from '../Nav';
import { Container } from '@mui/system';

export const AppBar = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: 'primary.tableBg',
        display: 'flex',
        justifyContent: 'space-between',
        mb: 4,
        pl: 2,
        pr: 2,
        borderBottom: '1px solid #2a363b',
      }}
    >
      <Container>
        <Nav />
      </Container>
    </Box>
  );
};
