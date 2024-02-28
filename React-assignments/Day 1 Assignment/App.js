import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //   // Scalar Variables
  //   let uname = "Scott";
  //   let age = 25;
  //   let email = "scott@gmai.com";


  //   // Array
  //   let citiesArray = ["Hyderabad", "Mumbai", "Pune", "Chennai", "Goa", "Hyderabad", "Mumbai", "Pune", "Chennai", "Goa"];

  //     Object
  let deptObj = { sid: 1, sname: "Vishnu", course: "React", sage: "22", total: 82 };

  //    // Array of Objects

  let deptsArray = [
    { doctorId: 1, doctorName: "Araujo", designation: "dermo", experience: 3, contactNumber: 84579345 },
    { doctorId: 2, doctorName: "De", designation: "ortho", experience: 4, contactNumber: 2174638 },
    { doctorId: 3, doctorName: "Gavi", designation: "derma", experience: 7, contactNumber: 12874613 },
    { doctorId: 4, doctorName: "Pedri", designation: "ortho", experience: 2, contactNumber: 72634398 },
  ];



  //   let resultArray = citiesArray.map((item) =>  
  //   {
  //     return <li>{item}</li>
  //   });


  let resultArray2 = deptsArray.map(item => {
    return <tr>
      <td>{item.doctorId}</td>
      <td>{item.doctorName}</td>
      <td>{item.designation}</td>
      <td>{item.experience}</td>
      <td>{item.contactNumber}</td>
    </tr>;
  });


  return (
    <>
      {/* //       <h3>Data Handling in React Components</h3>     
//       <hr/>

//       <div>
//         User Name :   {uname}  <br/>
//         User Email :   {email}  <br/>
//         User Age :   {age}  <br/>
//       </div>
//       <hr/>


//       <ol>
//         {resultArray}
//       </ol>

//       <hr/>

//     <hr/> */}

       //Assignment 1
           {/* assignment1 */}
      <table  border="2"  width="500">
 
 <tr>
   <th colSpan="2">Student Details</th>
 </tr>
 <tr>
   <th>sid</th>
   <td>{deptObj.sid}</td>
 </tr>
 <tr>
   <th>sname</th>
   <td>{deptObj.sname}</td>
 </tr>
 <tr>
   <th>course</th>
   <td>{deptObj.course}</td>
 </tr>
 <tr>
   <th>age</th>
   <td>{deptObj.sage}</td>
 </tr>
 <tr>
   <th>total</th>
   <td>{deptObj.total}</td>
 </tr>

</table>


<br/>
<br/>

      


      <table border="2" width="500">

        <tr>
          <th>doctorId</th>
          <th>doctorName</th>
          <th>designation</th>
          <th>experience</th>
          <th>contactNumber</th>

        </tr>

        {resultArray2}
      </table>



    </>
  );

}


export default App;