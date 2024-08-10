import "bootstrap/dist/css/bootstrap.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import Items from "./components/Items";
function App() {
  const toDoItem=[
    {
       name:"Buy books",
       dueDate:"10/12/24"
    },
    {
      name:"Buy Lens",
      dueDate:"11/12/24"
   },
   {
    name:"Study",
    dueDate:"12/12/23"
 }
];
  return (
    <center className="todo">
      <AppName />
      <AddToDo />
      <Items todo={toDoItem}></Items>
    </center>
  );
}

export default App;
