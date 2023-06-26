import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type CopyrightProps = {
  text: string;
};

export const Copyright = ({ text }: CopyrightProps) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2, mb: 2 }}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        {text}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
