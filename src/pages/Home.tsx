import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { DataTable } from '../components/DataTable';

const Home = () => {
  return (
    <Box component="main">
      <Typography component="h1" paddingBottom={3} fontSize={40} margin="0 auto">
        Cryptocurrency Prices Live
      </Typography>
      <DataTable />
    </Box>
    // </Container>
  );
};

export default Home;
