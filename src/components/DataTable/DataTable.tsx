import { DataGrid, GridRowSelectionModel, useGridApiRef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { columns } from '../../constants/columns';
import * as localStorageService from '../../services/storage';
import { getCurrencyList } from '../../services/coinDbApi';
import { CustomGridToolbar } from '../CustomGridToolbar';
import { pageState, currency } from '../../types';

export const DataTable = () => {
  const apiRef = useGridApiRef();

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
  const [shouldShowWatchList, setShouldShowWatchList] = useState(false);
  const [selectedRows, setSelectedRows] = useState<currency[]>([]);

  // if (selectedRows && selectedRows.length > 0) {
  //   localStorageService.save('selectedRows', selectedRows);
  // }

  // useEffect(() => {
  //   const selectedRowsFromLS = localStorageService.load('selectedRows') || [];

  //   setSelectedRows(selectedRowsFromLS);
  // }, []);

  const handleSwitchWatchList = () => {
    setShouldShowWatchList(!shouldShowWatchList);
  };

  const [pageState, setPageState] = useState<pageState>({
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

    const timerId = setInterval(() => {
      getCurrencyList(offset, limit).then(data =>
        setPageState(prevState => ({ ...prevState, currencies: data })),
      );
    }, 4000);

    return () => {
      clearInterval(timerId);
    };
  }, [limit, offset]);

  useEffect(() => {
    const selectedRowsFromLS = localStorageService.load('selectedItems');
    setRowSelectionModel(selectedRowsFromLS);
  }, []);

  return (
    <>
      <DataGrid
        // slots={{
        //   toolbar: CustomGridToolbar,
        // }}
        // slotProps={{
        //   toolbar: {
        //     handleSwitchWatchList: handleSwitchWatchList,
        //     shouldShowWatchList: shouldShowWatchList,
        //   },
        // }}
        //
        apiRef={apiRef}
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
        onRowSelectionModelChange={(newRowSelectionModel: any) => {
          setRowSelectionModel(newRowSelectionModel);

          // const selectedRows = pageState.currencies.filter((row: any) =>
          //   newRowSelectionModel.includes(row.rank),
          // );

          // setSelectedRows(prevState =>
          //   Array.from(new Set([...prevState, ...selectedRows])).filter((row: any) =>
          //     newRowSelectionModel.includes(row.rank),
          //   ),
          // );

          localStorageService.save('selectedItems', newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        keepNonExistentRowsSelected
        //
        sx={{
          mt: 2,
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
    </>
  );
};
