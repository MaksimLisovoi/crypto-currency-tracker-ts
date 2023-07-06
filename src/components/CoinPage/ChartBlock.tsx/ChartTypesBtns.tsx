import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { chartTypes } from '../../../constants/chartTypes';

type chartTypeState = {
  chartType: string;
  setChartType: React.Dispatch<React.SetStateAction<string>>;
};

export const ChartTypesBtns = ({ chartType, setChartType }: chartTypeState) => {
  const chartTypesArr: string[] = Object.values(chartTypes);

  const renderBtns = () =>
    chartTypesArr.map(type => (
      <ToggleButton key={type} value={type} aria-label="left aligned">
        {type}
      </ToggleButton>
    ));

  const handleChartType = (event: any, newChartType: string) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };
  return (
    <ToggleButtonGroup
      value={chartType}
      exclusive
      onChange={handleChartType}
      aria-label="chart type"
      size="medium"
      sx={{ width: '60px' }}
    >
      {renderBtns()}
    </ToggleButtonGroup>
  );
};
