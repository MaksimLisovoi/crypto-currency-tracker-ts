import { LineChart } from '@mui/x-charts/LineChart';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { getCoinHistory } from '../../../services/coinDbApi';
import { CoinPricesProps } from '../../../types';
import { Box } from '@mui/system';

import { formattedDateDay, formattedDateFull } from '../../../services/otherFuncs';
import { ChartTypesBtns } from './ChartTypesBtns';
import { Loader } from '../../Loader/Loader';

export const Chart = ({ coinCode }: CoinPricesProps) => {
  interface IcoinData {
    isLoading: boolean;
    coinHistory: any;
  }
  const [coinState, setCoinHistory] = useState<IcoinData>({
    isLoading: false,
    coinHistory: {},
  });
  const history = coinState.coinHistory.history;
  const isLoading = coinState.isLoading;

  const [chartType, setChartType] = useState('7d');

  const daysAmountForReq = () => {
    if (chartType === '7d') {
      return 7;
    }
    if (chartType === '1m') {
      return 30;
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

  if (!history) {
    return;
  }

  const prices = history.map((el: any) => +el.rate.toFixed(5));
  const dates = history.map((el: any) => formattedDateFull(el.date / 1000));
  const arrFromSortedDates = Array.from(
    new Set(history.map((el: any) => formattedDateDay(el.date / 1000))),
  );
  const monthDates = arrFromSortedDates.filter((_, idx) => idx % 2);

  // const prices = useMemo(() => {
  //   if (!history) {
  //     return;
  //   }
  //   return history.map((el: any) => +el.rate.toFixed(2));
  // }, [history]);

  // const dayDates = useMemo(() => {
  //   if (!history) {
  //     return;
  //   }
  //   return history.map((el: any) => formattedDateDay(el.date / 1000));
  // }, [history]);

  // const arrFromSortedDates = Array.from(new Set(dayDates));

  // const monthDates = arrFromSortedDates.filter((_, idx) => idx % 2);

  const displayDateForAxis = () => {
    if (chartType === '7d') {
      return arrFromSortedDates;
    }
    if (chartType === '1m') {
      return monthDates;
    }
  };

  return (
    history && (
      <Box>
        <ChartTypesBtns chartType={chartType} setChartType={setChartType} />
        {isLoading ? (
          <Loader size={60} height={'500px'} />
        ) : (
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
        )}
      </Box>
    )
  );
};
