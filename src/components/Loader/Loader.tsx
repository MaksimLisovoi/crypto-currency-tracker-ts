import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

type LoaderProps = {
  height?: string;
  size?: number;
};

export const Loader = ({ height, size = 40 }: LoaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { height },
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};
