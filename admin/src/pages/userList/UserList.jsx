import React,{useState} from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";
import {rows} from "../../dummyData";
const UserList = () => {
    const [data, setdata] = useState(rows);
    const onclickdelete = (id) =>{
        setdata(data.filter((item)=> item.id !=id));
    }
    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 130, renderCell:(p)=>{
      return (
          <div className="userListUser">
              <img className="userListimg" src={p.row.avatar} alt=""></img>
              {p.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'email', width: 130 },
  {
    field: 'Status',
    headerName: 'Status',
    type: 'number',
    width: 90,
  },
  {
    field: 'transaction',
    headerName: 'transaction',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
      field:"Action",
      headerName:"Action",
      width:150,
      renderCell:(param)=>{
         return (
             <>
             <button className='userListEdit'>Edit</button>
             <DeleteOutline className='userListDelete' onClick={()=>(onclickdelete(param.row.id))}></DeleteOutline>
             </>
             
         )
      }

  }
];


    return (
       <div className="userList">
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

export default UserList;
