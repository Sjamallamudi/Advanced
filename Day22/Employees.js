import { useState } from "react";

function Emps() {
    let  [empsArray, setEmpsArray] = useState([]);
    const [ename, setEname] = useState("");
    const [empno, setEmpno] = useState("");
    const [deptno, setDeptno] = useState("");
     
function getEmpsClick(){
    let tempArray  = [     
      {  empno : 10256, ename:"Scott", deptno : 10  },
      {  empno : 10257, ename:"Smith", deptno : 20  },
      {  empno : 10258, ename:"Sandy", deptno : 30  },
      {  empno : 10259, ename:"Sam", deptno : 40  },
  ];

    setEmpsArray( tempArray );
}
   
function addEmpClick(){
    let empObj = {};
    empObj.empno = empno;
    empObj.ename = ename;
    empObj.deptno = deptno;

    let tempArray = Object.assign([], empsArray);
    tempArray.push(empObj);     
    setEmpsArray( tempArray );
}
  
function removeEmpClick(eno){    
    let tempArray = Object.assign([], empsArray);
    let index = tempArray.findIndex(item => item.empno == eno); 
    tempArray.splice(index, 1);
    setEmpsArray( tempArray );
}

function selectEmpClick(eno){
    let tempArray = Object.assign([], empsArray);
    let selObj = tempArray.find(item => item.empno == eno);
    setEmpno(selObj.empno);
    setEname(selObj.ename);
    setDeptno(selObj.deptno);
}

function updatEmpClick(){
    let tempArray = Object.assign([], empsArray);
    let index = tempArray.findIndex(item => item.empno == empno); 
    tempArray[index].empno = empno;
    tempArray[index].ename = ename;
    tempArray[index].deptno = deptno;
    setEmpsArray( tempArray );
}

let result  =  empsArray.map( (item, index) =>  {
    return <tr>                
                <td> {item.empno}  </td>  
                <td> {item.ename}  </td>                
                <td> {item.deptno}  </td> 
                <td><a href="#" onClick={()=> selectEmpClick(item.empno) }>Select</a> |
            <a href="#" onClick={ () => removeEmpClick(item.empno) }> Remove</a>  
                </td> 
        </tr>
    });
  
return (
    <div> 
        <h3>Dynamic Operations on Array of Object</h3>
        <hr/>

        <input placeholder="empno" value={empno} onChange={e => setEmpno(e.target.value)}  />&nbsp;&nbsp;
        <input placeholder="ename" value={ename} onChange={e => setEname(e.target.value)}  />&nbsp;&nbsp;
        <input placeholder="deptno" value={deptno} onChange={e => setDeptno(e.target.value)}  />
        <br/><br/>

        <button onClick={getEmpsClick}>Get Emps</button>&nbsp;&nbsp;
        <button onClick={addEmpClick}>Add Emp</button>&nbsp;&nbsp;
        <button onClick={updatEmpClick}>Update Emp</button>
        <br/><br/>
        <table border="2"  width="500">
            <tr>
                <th>Empno</th>
                <th>Emp Name</th>               
                <th>Deptno</th>
                <th></th>
            </tr>
        {result}
        </table>
    </div>
    );
  }
  
  export default Emps;

 