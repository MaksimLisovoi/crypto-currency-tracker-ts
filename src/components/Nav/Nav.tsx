import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system'; 

export const Nav: React.FC = () => {
  return (
    <Box component="nav" sx={{display:"flex", gridGap:3}}>
      <Button
        component={NavLink}
        // variant="contained"
        to="/"
        sx={{
          '&.active': {
            color: 'white',
            background: '#07c',
          },
          '&:hover': {},
        }}
      >
        Home
      </Button>
    </Box>
  );
};
