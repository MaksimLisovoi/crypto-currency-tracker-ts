import { LineChart } from '@mui/x-charts/LineChart';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { getCoinHistory } from '../../../services/coinDbApi';
import { CoinPricesProps } from '../../../types';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export const Chart = ({ coinCode }: CoinPricesProps) => {
  const dateFrom = moment().subtract(7, 'd').unix() * 1000;
  const dateTo = moment().unix() * 1000;
  useEffect(() => {
    getCoinHistory(coinCode, dateFrom, dateTo).then(setCoinHistory);
  }, [coinCode, dateFrom, dateTo]);

  const [coinHistory, setCoinHistory] = useState<any>(null);

  //   const { history } = coinHistory;

  const formattedDateFull = (value: number) => moment.unix(value).format('lll');

  const formattedDateDay = (value: number) => moment.unix(value).format('D MMM');

  const prices = coinHistory?.history.map((el: any) => +el.rate.toFixed(2));
  const dates = coinHistory?.history.map((el: any) => formattedDateFull(el.date / 1000));
  const daysOfWeek = Array.from(
    new Set(coinHistory?.history.map((el: any) => formattedDateDay(el.date / 1000))),
  );

  console.log(daysOfWeek);

  return (
    coinHistory && (
      <LineChart
        sx={{
          '--ChartsLegend-itemWidth': '200px',
          ' .MuiMarkElement-root': {
            display: 'none',
          },
        }}
        height={400}
        series={[
          { xAxisKey: 'Years', data: prices, label: 'Price', stack: 'total' },
          //   { data: uData, label: 'uv' },
        ]}
        // xAxis={[{ scaleType: 'band', data: dates, min: 10, max: 20 }]}
        xAxis={[
          {
            id: 'Years',
            data: dates,
            scaleType: 'point',
          },
          {
            id: 'myCustomAxis',
            data: daysOfWeek,
            scaleType: 'point',
          },
        ]}
        bottomAxis={{ axisId: 'myCustomAxis' }}
      />
    )
  );
};
