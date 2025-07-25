'use client'

import { useGetUsersQuery } from '@/redux/state/api'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from '../(components)/Header/page';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [

  { 
    field: "userId", 
    headerName: "User_ID", 
    width: 350 
  },
  { 
    field: "name", 
    headerName: "Name", 
    width: 200 
  },
  {
    field: "email",
    headerName: "Email",
    width: 350
  },
];


export default function User() {

const {data: users, isError, isLoading} = useGetUsersQuery();

 if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch users
      </div>
    );
  }

  return (
    <div className={`flex flex-col`}>
      <Header name="Users"/>
      <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        pageSizeOptions={[12]}
        checkboxSelection
        disableRowSelectionOnClick
        className={`rounded-lg border mt-10 !text-gray-700`}
      />
    </Box>
    </div>
  );
};

