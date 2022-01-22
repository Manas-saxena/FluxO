import React ,{useState,useEffect,useContext} from 'react'
import { ListContext } from '../../context/listContext/listContext';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline, PanoramaSharp} from "@mui/icons-material";
import {productRows} from "../../dummyData";
import"./list.css"
import {Link} from "react-router-dom"
import {getLists,deleteList} from '../../context/listContext/apiCalls';
function List() {
    const [data , setdata] = useState(productRows);

    const{lists ,dispatch} = useContext(ListContext);

        useEffect(() => {
          getLists(dispatch)
        }, [dispatch]);
  

    const onclickdelete = (id) =>{
        deleteList(id,dispatch)
    }

     const columns = [
  { field: '_id', headerName: 'ID', width: 200 },
  { field: 'title', headerName: 'title', width: 250 },
  { field: 'genre', headerName: 'Genre', width: 150 },
  { field: 'type', headerName: 'type', width: 150 },
  
  {
      field:"Action",
      headerName:"Action",
      width:150,
      renderCell:(param)=>{
         return (
             <>
             <Link to={{pathname:"/list/" + param.row._id, list:param.row}}>
             <button className='productListEdit'>Edit</button>

             </Link>
             <DeleteOutline className='productListDelete' onClick={()=>(onclickdelete(param.row._id))}></DeleteOutline>
             </>
             
         )
      }

  }
];

    return (
        <div className='productList'>
              <DataGrid
        rows={lists}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[8]}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
        </div>
    )
}

export default List
