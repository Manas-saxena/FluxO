import React ,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";
import {productRows} from "../../dummyData";
import"./productList.css"
function ProductList() {
    const [data , setdata] = useState(productRows);
     const onclickdelete = (id) =>{
        setdata(data.filter((item)=> item.id !=id));
    }
     const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'product', headerName: 'Product', width: 130, renderCell:(p)=>{
      return (
          <div className="productListUser">
              <img className="productListimg" src={p.row.img} alt=""></img>
              {p.row.name}
          </div>
      )
  } },
  { field: 'stock', headerName: 'stock', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'price',
    headerName: 'price',
    width: 160,
  },
  {
      field:"Action",
      headerName:"Action",
      width:150,
      renderCell:(param)=>{
         return (
             <>
             <button className='productListEdit'>Edit</button>
             <DeleteOutline className='productListDelete' onClick={()=>(onclickdelete(param.row.id))}></DeleteOutline>
             </>
             
         )
      }

  }
];

    return (
        <div className='productList'>
              <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}

export default ProductList
