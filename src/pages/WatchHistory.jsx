import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {
const[history, setHistory] = useState([])


  const WatchHistory= async (id)=>{
    const{data} = await getAllHistory()
   console.log(data);
   setHistory(data) 
  }

  ///function to remove particular history
  const removeAHistory = async (id)=>{
  await deleteAHistory(id)
  /// to remainng history
  WatchHistory()
  }
  useEffect(()=>{
    WatchHistory()
  },[])

  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontSize:'20px'}}><i class="fa-solid fa-square-caret-left"></i>Back TO Home</Link>
        </div>
        <table className='table mt-5 mb-5 container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.length>0?
            history.map((item, index)=>(<tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={item. embedLink} target='blank'>{item. embedLink}</a></td>
              <td>{item.timestamp}</td>
              <td><button onClick={()=>removeAHistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
            </tr>))
            :
            <p className='fw-border fs-5 text-danger m-4'>nothing to display</p>
            }
          </tbody>
        </table>
    </>
  )
}

export default WatchHistory 
