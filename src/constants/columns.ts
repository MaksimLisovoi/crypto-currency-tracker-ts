import { GridColDef } from '@mui/x-data-grid';
import { CoinNameBlock } from '../components/CoinNameBlock';
import * as columnFuncs from '../services/columnFuncs';
import { TimeCell } from '../components/TimeCell';

export const columns: GridColDef[] = [
  { field: 'rank', headerName: '#', width: 50 },
  {
    field: 'name',
    headerName: 'Coin',
    width: 100,

    renderCell: CoinNameBlock,
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
    renderCell: props => TimeCell(props, 'day'),
  },
  {
    field: 'hour',
    headerName: '1h',
    type: 'number',
    minWidth: 120,
    sortable: false,
    renderCell: props => TimeCell(props, 'hour'),
  },
];
