import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { columns } from '../../constants/columns';
import * as requestData from '../../constants/requestData';
import * as localStorageService from '../../services/storage';
import { getCurrencyList } from '../../services/coinDbApi';

export const DataTable = () => {
  interface Idata {
    isLoading: boolean;
    currencies: any;
  }

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const [pageState, setPageState] = useState<Idata>({
    isLoading: false,
    currencies: [],
  });

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
  });

  const offset = paginationModel.page * paginationModel.pageSize;
  const limit = paginationModel.pageSize;

  useEffect(() => {
    setPageState(prevState => ({ ...prevState, isLoading: true }));
    getCurrencyList(offset, limit).then(data =>
      setPageState(prevState => ({ ...prevState, currencies: data, isLoading: false })),
    );

    // const timerId = setInterval(() => {
    //   getCurrencyList().then(data =>
    //     setPageState(prevState => ({ ...prevState, currencies: data })),
    //   );
    // }, 4000);

    // return () => {
    //   clearInterval(timerId);
    // };
  }, [paginationModel.page, paginationModel.pageSize]);

  useEffect(() => {
    const selectedRowsFromLS = localStorageService.load('selectedItems');
    setRowSelectionModel(selectedRowsFromLS);
  }, []);

  return (
    <DataGrid
      autoHeight
      rows={pageState.currencies}
      getRowId={(row: any) => row.rank}
      rowHeight={70}
      columns={columns}
      rowCount={300}
      //
      pagination
      paginationMode="server"
      loading={pageState.isLoading}
      pageSizeOptions={[5, 10, 20, 50]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      //
      checkboxSelection
      disableRowSelectionOnClick
      onRowSelectionModelChange={newRowSelectionModel => {
        setRowSelectionModel(newRowSelectionModel);
        console.log(newRowSelectionModel);
        localStorageService.save('selectedItems', newRowSelectionModel);
      }}
      rowSelectionModel={rowSelectionModel}
      keepNonExistentRowsSelected
      //
      sx={{
        p: 2,
        boxShadow: 2,
        border: 2,
        borderRadius: 2,
        backgroundColor: 'primary.tableBg',
        borderColor: 'primary.border',
        '& .MuiDataGrid-row:hover': {
          backgroundColor: 'primary.accent',
        },
        fontSize: 16,
      }}
    />
  );
};
