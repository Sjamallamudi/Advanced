function Students(props){

    let studArray = [
        {sid: 1, sname: "Scott" , course: "Angular" , age: 22, total: 70},
        {sid: 2, sname: "Smith" , course: "React JS" , age: 20, total: 75},
        {sid: 3, sname: "Sandy" , course: "HTML" , age: 22, total: 92},
        {sid: 4, sname: "Sam" , course: "React JS" , age: 25, total: 90},
        {sid: 5, sname: "Sarah" , course: "Angular", age: 18, total: 88},
        {sid: 6, sname: "Sanju" , course: "JQuery" , age: 21, total: 80},
        {sid: 7, sname: "Sid" , course: "React JS" , age: 24, total: 85}
    ];

let value = props.course;
let temp=[];
if(!value ){
    temp = studArray;
}
else{
     temp = studArray.filter(item => {
        return item.course == value});
}

let result = temp.map( (item, index) =>  {
    return (
      <tr key="index" style = { {backgroundColor:(index%2 ==0)? "lightblue":"lightpink" }}> 
          <td> {item.sid}  </td>  
          <td> {item.sname}  </td>  
          <td> {item.course}  </td>  
          <td> {item.age}  </td>  
          <td> {item.total}  </td>  
      </tr>
    );
  });

    return (
        <div>
            <h3>student details</h3>
            <br/>
            <table border="2"  width="500">
              <tr>
                <th>studentId</th>
                <th>student Name</th>
                <th>course</th>
                <th>Age</th>
                <th>Marks Scored</th>
              </tr>
              {result}
            </table>
        </div>
      );
}

export default Students;

