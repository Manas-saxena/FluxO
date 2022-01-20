import React ,{useState,useEffect,useContext} from 'react'
import { MovieContext } from '../../context/movieContext/movieContext';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline, PanoramaSharp} from "@mui/icons-material";
import {productRows} from "../../dummyData";
import"./productList.css"
import {Link} from "react-router-dom"
import {getMovies,deleteMovie} from '../../context/movieContext/apiCalls';
function ProductList() {
    const [data , setdata] = useState(productRows);

    const{movies ,dispatch} = useContext(MovieContext);

        useEffect(() => {
          getMovies(dispatch)
        }, [dispatch]);
  

    const onclickdelete = (id) =>{
        deleteMovie(id,dispatch)
    }

     const columns = [
  { field: '_id', headerName: 'ID', width: 200 },
  { field: 'movie', headerName: 'Movie', width: 200, renderCell:(p)=>{
      return (
          <div className="productListUser">
              <img className="productListimg" src={p.row.img} alt=""></img>
              {p.row.title}
          </div>
      )
  } },
//   { field: 'genre', headerName: 'Genre', width: 120 },
  { field: 'year', headerName: 'Year', width: 120 },
  { field: 'limit', headerName: 'limit', width: 120 },
  { field: 'isSeries', headerName: 'isSeries', width: 120 },
  
  {
      field:"Action",
      headerName:"Action",
      width:150,
      renderCell:(param)=>{
         return (
             <>
             <Link to={{pathname:"/product/" + param.row._id, movie:param.row}}>
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
        rows={movies}
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

export default ProductList
