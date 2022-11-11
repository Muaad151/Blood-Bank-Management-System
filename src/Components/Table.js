import React, { useState,useEffect } from 'react'
import "../Styles/Table.css"
import axios from "axios"


function Table() {

  let [info, setinfo]= useState([]);

  useEffect(()=>{

    setinfo([
      {
        date_of_transaction:"12/1/2022",
        time_of_transaction:"1:30",
        status:"SUCCESS",
        t_type:"Donation"
      },
      {
        date_of_transaction:"12/1/2022",
        time_of_transaction:"1:30",
        status:"SUCCESS",
        t_type:"Donation"
      },
      {
        date_of_transaction:"12/1/2022",
        time_of_transaction:"1:30",
        status:"SUCCESS",
        t_type:"Donation"
      }
    ])
  
  },  [])

  axios.post("http://localhost:4000/get_data",{})
  .then((res)=>{
    setinfo(res);
  })
  .catch((err)=>{
    throw err;
  })


  return ( 
<>
    <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date of Reception/Donation</th>
        <th scope="col">Time Of Transaction</th>
        <th scope="col">Donation/Recieved</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {
      
        info.map((item, index)=>{
          return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{item.date_of_transaction}</td>
            <td>{item.time_of_transaction}</td>
            <td>{item.t_type}</td>
            <td>{item.status}</td>
          </tr>
          )
        })
      }
      
      
    </tbody>
  </table>
</>

   );
}

export default Table;
