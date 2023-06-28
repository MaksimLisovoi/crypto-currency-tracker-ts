import { GridColDef } from '@mui/x-data-grid';
import { CoinBlock } from '../components/CoinBlock';
import * as columnFuncs from '../services/columnFuncs';
import { DayCell } from '../components/DayCell';
import { HourCell } from '../components/HourCell';

export const columns: GridColDef[] = [
  { field: 'rank', headerName: '#', width: 50 },
  {
    field: 'name',
    headerName: 'Coin',
    width: 100,

    renderCell: CoinBlock,
  },
  {
    field: 'rate',
    headerName: 'Price',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.roundSum,
    valueFormatter: params => columnFuncs.valueFormatter(params, '$', 'left'),
  },
  {
    field: 'cap',
    headerName: 'Market Cap',
    type: 'number',
    width: 120,
    valueFormatter: params => columnFuncs.valueFormatter(params, '$', 'both'),
  },
  {
    field: 'volume',
    headerName: 'Volume 24h',
    type: 'number',
    width: 120,
    valueFormatter: params => columnFuncs.valueFormatter(params, '$', 'both'),
  },
  {
    field: 'allTimeHighUSD',
    headerName: 'All-time High',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.roundSum,
    valueFormatter: params => columnFuncs.valueFormatter(params, '$', 'left'),
  },
  {
    field: 'day',
    headerName: '24h',
    type: 'number',
    width: 120,
    sortable: false,
    renderCell: DayCell,
  },
  {
    field: 'hour',
    headerName: '1h',
    type: 'number',
    width: 120,
    sortable: false,
    renderCell: HourCell,
  },
];
