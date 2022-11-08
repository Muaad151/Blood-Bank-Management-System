import React from 'react'
import "../Styles/Table.css"


function Table() {
  return ( 
<>
    <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date of Reception/Donation</th>
        <th scope="col">Donation/Recieved</th>
        <th scope="col">Status</th>
        <th scope="col">Blood Group</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>05-11-2022</td>
        <td>Donated</td>
        <td>**</td>
        <td>AB-</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>04-09-2022</td>
        <td>Donated</td>
        <td>**</td>
        <td>B+</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>12-11-2022</td>
        <td>Recieved</td>
        <td>***</td>
        <td>A+</td>
      </tr>
    </tbody>
  </table>
</>

   );
}

export default Table;
