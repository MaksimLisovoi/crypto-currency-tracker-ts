import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';

export const Nav = () => {
  return (
    <Box component="nav" sx={{ display: 'flex', gridGap: 3 }}>
      <Button
        component={NavLink}
        variant="text"
        to="/"
        sx={{
          color: 'white',
          fontWeight: 700,
          fontSize: '16px',
          pt: '23px',
          pb: '21px',
          borderBottom: '3px solid transparent',
          borderRadius: '0',
          '&.active': {
            color: 'primary.aqua',
            borderColor: 'primary.aqua',
          },
          '&:hover': {
            color: 'primary.aqua',
            borderColor: 'primary.aqua',
            bgcolor: 'transparent',
          },
        }}
      >
        Home
      </Button>
    </Box>
  );
};
