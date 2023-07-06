import { LineChart } from '@mui/x-charts/LineChart';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { getCoinHistory } from '../../../services/coinDbApi';
import { CoinPricesProps, coinStateType, coinHistoryItem } from '../../../types';
import { Box } from '@mui/system';
import { chartTypes } from '../../../constants/chartTypes';

import { formattedDateDay, formattedDateFull } from '../../../services/otherFuncs';
import { ChartTypesBtns } from './ChartTypesBtns';
import { Loader } from '../../Loader/Loader';

export const Chart = ({ coinCode }: CoinPricesProps) => {
  const [coinState, setCoinHistory] = useState<coinStateType>({
    isLoading: true,
    coinHistory: {},
  });

  const history = coinState?.coinHistory?.history!;
  const isLoading = coinState.isLoading;

  const [chartType, setChartType] = useState('7d');

  const daysAmountForReq = () => {
    if (chartType === chartTypes.week) {
      return 7;
    }
    if (chartType === chartTypes.months) {
      return 30;
    }
    if (chartType === chartTypes.quarter) {
      return 90;
    }
  };

  const dateFrom = moment().subtract(daysAmountForReq(), 'd').unix() * 1000;
  // const dateFrom = 1687980990000;
  const dateTo = moment().unix() * 1000;
  // const dateTo = 1688585639000;

  useEffect(() => {
    setCoinHistory(prevState => ({ ...prevState, isLoading: true }));
    getCoinHistory(coinCode, dateFrom, dateTo).then(data =>
      setCoinHistory(prevState => ({ ...prevState, coinHistory: data, isLoading: false })),
    );
  }, [coinCode, dateFrom, dateTo]);

  const prices = history && history.map((el: coinHistoryItem) => +el.rate.toFixed(5));
  const dates = history && history.map((el: coinHistoryItem) => formattedDateFull(el.date / 1000));
  const arrFromSortedDates = Array.from(
    new Set(history && history.map((el: coinHistoryItem) => formattedDateDay(el.date / 1000))),
  );
  const monthDates = arrFromSortedDates.filter((_, idx) => idx % 2);
  const quarterDates = arrFromSortedDates.filter(
    (el, idx, arr: string[]) => parseInt(el) === parseInt(arr[0]),
  );

  const displayDateForAxis = () => {
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

  return (
    // <></>
    history &&
    (isLoading ? (
      <Loader size={60} height={'500px'} />
    ) : (
      <Box>
        <ChartTypesBtns chartType={chartType} setChartType={setChartType} />

        <LineChart
          sx={{
            '--ChartsLegend-itemWidth': '200px',
            ' .MuiMarkElement-root': {
              display: 'none',
            },
          }}
          height={500}
          series={[
            { xAxisKey: 'datesFromApi', data: prices, label: 'Price', stack: 'total' },
            //   { data: uData, label: 'uv' },
          ]}
          // xAxis={[{ scaleType: 'band', data: dates, min: 10, max: 20 }]}
          xAxis={[
            {
              id: 'datesFromApi',
              data: dates,
              scaleType: 'point',
            },
            {
              id: 'myCustomAxis',
              data: displayDateForAxis(),
              scaleType: 'point',
            },
          ]}
          bottomAxis={{ axisId: 'myCustomAxis', disableTicks: true }}
        />
      </Box>
    ))
  );
};
