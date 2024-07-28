import "bootstrap/dist/css/bootstrap.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
function App() {
  return (
    <center className="todo">
      <AppName />
      <AddToDo />
    </center>
  );
}

export default App;
