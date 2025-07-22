'use client'

import { useGetProductsQuery } from '@/redux/state/api'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from '../(components)/Header/page';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [

  { field: "productId", 
    headerName: "ID", 
    width: 350 
  },
  { field: "name", 
    headerName: "Product Name", 
    width: 200 
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];


export default function Inventory() {

    const {data: products, isError, isLoading} = useGetProductsQuery();

 if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className={`flex flex-col`}>
      <Header name="Inventory"/>
      <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
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

