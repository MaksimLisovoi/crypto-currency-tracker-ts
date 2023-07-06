import { LineChart } from '@mui/x-charts/LineChart';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { getCoinHistory } from '../../../services/coinDbApi';
import { CoinPricesProps, coinStateType, coinHistoryItem } from '../../../types';
import { Box } from '@mui/system';
import { chartTypes } from '../../../constants/chartTypes';

import {
  daysAmountForReq,
  formatToMillion,
  formattedDateDay,
  formattedDateFull,
  formattedDateHours,
} from '../../../services/otherFuncs';
import { ChartTypesBtns } from './ChartTypesBtns';
import { Loader } from '../../Loader/Loader';

export const Chart = ({ coinCode }: CoinPricesProps) => {
  const [coinState, setCoinHistory] = useState<coinStateType>({
    isLoading: true,
    coinHistory: {},
  });
  const history = coinState?.coinHistory?.history!;
  const isLoading = coinState.isLoading;

  const [chartType, setChartType] = useState(chartTypes.hour);

  const dateFrom = moment().subtract(daysAmountForReq(chartType), 'd').unix() * 1000;
  const dateTo = moment().unix() * 1000;

  useEffect(() => {
    setCoinHistory(prevState => ({ ...prevState, isLoading: true }));
    getCoinHistory(coinCode, dateFrom, dateTo).then(data =>
      setCoinHistory(prevState => ({ ...prevState, coinHistory: data, isLoading: false })),
    );
  }, [coinCode, dateFrom, dateTo]);

  const prices = history && history.map((el: coinHistoryItem) => +el.rate.toFixed(4));
  const volume = history && history.map((el: coinHistoryItem) => el.volume);

  const dates = history && history.map((el: coinHistoryItem) => formattedDateFull(el.date / 1000));
  const arrFromSortedDates = Array.from(
    new Set(history && history.map((el: coinHistoryItem) => formattedDateDay(el.date / 1000))),
  );
  const monthDates = arrFromSortedDates.filter((_, idx) => idx % 2);
  const quarterDates = arrFromSortedDates.filter(
    (el, idx, arr: string[]) => parseInt(el) === parseInt(arr[0]),
  );
  const hours = history && history.map((el: coinHistoryItem) => formattedDateHours(el.date / 1000));
  const sortedHours = hours?.filter((_, idx) => idx % 6 === 0);

  const displayDateForAxis = () => {
    if (chartType === '24h') {
      return sortedHours;
    }
    if (chartType === '7d') {
      return arrFromSortedDates;
    }
    if (chartType === '30d') {
      return monthDates;
    }
    if (chartType === '90d') {
      return quarterDates;
    }
  };

  return isLoading ? (
    <Loader size={60} height={'500px'} />
  ) : (
    history && (
      <Box>
        <ChartTypesBtns chartType={chartType} setChartType={setChartType} />

        <LineChart
          sx={{
            '--ChartsLegend-itemWidth': '200px',
            ' .MuiMarkElement-root': {
              display: 'none',
            },
            '.MuiAreaElement-root': {
              fillOpacity: '10%',
            },
            '.css-1qzcpgg-MuiLineElement-root': {
              display: 'none',
            },
            '.css-1v0rhnk-MuiChartsLegend-mark': {
              fillOpacity: '10%',
            },
          }}
          height={450}
          series={[
            {
              // xAxisKey: 'pricesFromApi',
              yAxisKey: 'leftAxisId',
              data: prices,
              label: 'Price',
              valueFormatter: price => {
                return `$${price}`;
              },
            },
            {
              yAxisKey: 'rightAxisId',
              data: volume,
              label: 'Volume',
              valueFormatter: volume => {
                return formatToMillion(volume);
              },
              area: true,
            },
          ]}
          xAxis={[
            {
              data: dates,
              scaleType: 'point',
            },
            {
              id: 'myCustomAxis',
              data: displayDateForAxis(),
              scaleType: 'point',
            },
          ]}
          yAxis={[
            {
              id: 'leftAxisId',
              valueFormatter: price => {
                return `$${price}`;
              },
            },
            {
              id: 'rightAxisId',
              valueFormatter: volume => {
                return formatToMillion(volume);
              },
            },
          ]}
          bottomAxis={{ axisId: 'myCustomAxis', disableTicks: true, disableLine: true }}
          rightAxis={{
            axisId: 'rightAxisId',
            disableTicks: true,
            disableLine: true,
          }}
          leftAxis={{ axisId: 'leftAxisId', disableTicks: true, disableLine: true }}
        />
      </Box>
    )
  );
};
