import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type chartTypeState = {
  chartType: string;
  setChartType: React.Dispatch<React.SetStateAction<string>>;
};

export const ChartTypesBtns = ({ chartType, setChartType }: chartTypeState) => {
  const chartTypes = ['7d', '1m'];

  const renderBtns = () =>
    chartTypes.map(type => (
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
      size="large"
      sx={{ width: '60px' }}
    >
      {renderBtns()}
    </ToggleButtonGroup>
  );
};
