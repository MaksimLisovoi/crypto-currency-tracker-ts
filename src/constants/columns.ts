import { GridColDef } from '@mui/x-data-grid';
import { CoinBlock } from '../components/CoinBlock'; 
import * as columnFuncs from '../services/columnFuncs';
import { PercentCell } from '../components/PercentCell';

// interface GridColDef {
//   /**
//    * The column identifier. It's used to match with [[GridRowModel]] values.
//    */
//     field: string;
//     headerName: string;
//     width: number;
//      renderCell: CoinBlock,
 
// }

export const columns:GridColDef[] = [
  { field: 'rank', headerName: '#', width: 70 },
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
  },
  {
    field: 'cap',
    headerName: 'Market Cap',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.convertToShirt,
  },
  {
    field: 'volume',
    headerName: 'Volume 24h',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.convertToShirt,
  },

  // {
  //   field: 'liquidity',
  //   headerName: 'Liquidity ±2%',
  //   type: 'number',
  //   width: 90,
  // },
  {
    field: 'allTimeHighUSD',
    headerName: 'All-time High',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.roundSum,
  },
   {
    field: 'day',
    headerName: '24h',
    type: 'number',
    width: 120,
    renderCell: PercentCell
    // valueGetter: params =>(( (params.row?.delta?.day - 1) * 100)) ,
  },
  {
    field: 'hour',
    headerName: '1h',
    type: 'number',
    width: 120,
    valueGetter: params => (params.row?.delta?.hour - 1) * 100,
  },
 
  {
    field: 'week',
    headerName: 'Weekly',
    type: 'number',
    width: 120,
    valueGetter: params => (params.row?.delta?.week - 1) * 100,
  },
];
