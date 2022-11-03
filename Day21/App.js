import Students from "./students";
import Doctors from "./Doctors";

function App() {
 
  return (
    <div className="App" style={{ padding: "10px"}}>
      <h3>Developing Web Application using React</h3>
      {/* <hr/>
      <Students/>
      <Students course="Angular"/>
      <Students course="React JS"/> */}
      <Doctors />
    </div>
  );

}

export default App;
