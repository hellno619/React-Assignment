import { useState } from "react";



function DeptList() {

    const [deptsArray, setDeptsArray] = useState([]);

    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");


    function getDeptsClick() {
        let data = [
            { deptno: 101, dname: "Pedri", loc: 10 },
            { deptno: 102, dname: "Gavi", loc:  20},
            { deptno: 103, dname: "Araujo", loc: 30},
            { deptno: 104, dname: "Lamine", loc: 40},
            { deptno: 105, dname: "Lewa", loc:  50},
            { deptno: 106, dname: "Frankie", loc: 60 },
        ];

        setDeptsArray(data);

    }

    function addDeptClick()
    {
        let deptObj = { };
        deptObj.deptno = deptno; 
        deptObj.dname = dname; 
        deptObj.loc = loc; 
        

        let tempArray = [...deptsArray];
        tempArray.push(deptObj);       
        setDeptsArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setDeptno("");
        setDname("");
        setLoc("");
    }


    function  deleteClick(dno)
    {


        let tempArray = [...deptsArray];
        
        let  index = tempArray.findIndex( item => item.deptno == dno );
        tempArray.splice(index, 1); 

        setDeptsArray( tempArray );
    }

    function  selectClick(dno)
    {
      let deptObj =   deptsArray.find(item =>  item.deptno ==  dno);
      setDeptno(deptObj.deptno);
      setDname(deptObj.dname);
      setLoc(deptObj.loc);
   
    }


    function  updateDeptClick()
    {
        let tempArray = [...deptsArray];

        let index = tempArray.findIndex(item => item.deptno == deptno);
        tempArray[index].dname = dname ;
        tempArray[index].loc = loc ;


        setDeptsArray( tempArray );

        clearFields();
    }

    let resultArray = deptsArray.map(item => {
        return <tr>
            <td>{item.deptno}</td>
            <td>{item.dname}</td>
            <td>{item.loc}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.deptno)}}>👆🏻</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.deptno)}}>🧧</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Deptno" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />

            <input placeholder="Dname" type="text"
                value={dname} onChange={(e) => setDname(e.target.value)} />

            <input placeholder="Loc" type="text"
                value={loc} onChange={(e) => setLoc(e.target.value)} />


            <hr />

            <input type="button" value="Get Empls" onClick={getDeptsClick} />
            <input type="button" value="Add Emp" onClick={addDeptClick} />
            <input type="button" value="Update Emp" onClick={updateDeptClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>EmployeeID</th>
                    <th>Employee Name</th>
                    <th>Dept Number</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default DeptList;