import { DataGrid, GridRowSelectionModel, useGridApiRef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { columns } from '../../constants/columns';
import { getCurrencyList } from '../../services/coinDbApi';
import { requestData } from '../../constants/requestData';
import * as localStorageService from '../../services/storage';

export const DataTable = () => {
  interface Idata {
    isLoading: boolean;
    currencies: any;
  }
  const apiRef = useGridApiRef();

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const [pageState, setPageState] = useState<Idata>({
    isLoading: false,
    currencies: [],
  });

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
  });

  requestData.offset = paginationModel.page * paginationModel.pageSize;
  requestData.limit = paginationModel.pageSize;

  useEffect(() => {
    const selectedRowsFromLS = localStorageService.load('selectedItems');
    setRowSelectionModel(selectedRowsFromLS);
    console.log(selectedRowsFromLS);
  }, []);

  useEffect(() => {
    setPageState(old => ({ ...old, isLoading: true }));
    getCurrencyList().then(data =>
      setPageState(prevState => ({ ...prevState, currencies: data, isLoading: false })),
    );
  }, [paginationModel.page, paginationModel.pageSize]);

  return (
    <DataGrid
      autoHeight
      getRowId={row => row.rank}
      apiRef={apiRef}
      rows={pageState.currencies}
      rowHeight={70}
      columns={columns}
      rowCount={100}
      //
      //
      //
      pagination
      paginationMode="server"
      loading={pageState.isLoading}
      pageSizeOptions={[5, 10, 20]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      //
      //
      //

      checkboxSelection
      onRowSelectionModelChange={newRowSelectionModel => {
        setRowSelectionModel(newRowSelectionModel);
        console.log(newRowSelectionModel);
        localStorageService.save('selectedItems', newRowSelectionModel);
      }}
      rowSelectionModel={rowSelectionModel}
      keepNonExistentRowsSelected
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

      // rowCount={rowCountState}
      // loading={isLoading}
      // pageSizeOptions={[5]}
      // paginationModel={paginationModel}
      // paginationMode="server"
      // onPaginationModelChange={setPaginationModel}
    />
  );
};
