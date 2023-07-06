import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GridToolbarContainer } from '@mui/x-data-grid';

export const CustomGridToolbar = (props: any) => {
  const { handleSwitchWatchList, shouldShowWatchList } = props;

  const isClicked = shouldShowWatchList ? 'error' : 'inherit';
  return (
    <GridToolbarContainer>
      <Button
        onClick={handleSwitchWatchList}
        size="medium"
        variant="contained"
        endIcon={<FavoriteBorderIcon color={isClicked} />}
      >
        Watchlist
      </Button>
    </GridToolbarContainer>
  );
};
