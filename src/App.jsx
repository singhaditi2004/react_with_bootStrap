import "bootstrap/dist/css/bootstrap.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import Items from "./components/Items";
import { useState } from "react";
import WelcomeBack from "./components/WelcomeBack";
function App() {
  const initialtoDoItem = [];

  const [toDoItem, setToDOItem] = useState(initialtoDoItem);
  const handleOnNewItemAdded = (itemName, itemDate) => {
    console.log(`${itemName} is here with ${itemDate}`);
    const newToDoItem = [...toDoItem, { name: itemName, dueDate: itemDate }];
    setToDOItem(newToDoItem);
  };
  const handleDeleteItem = (itemName) => {
    console.log(`deleted ${itemName}`);
    const newToDoItem = toDoItem.filter((item) => item.name !== itemName);
    setToDOItem(newToDoItem);
  };
  return (
    <center className="todo">
      <AppName />
      <AddToDo onNewItemAdded={handleOnNewItemAdded} />
      {toDoItem.length == 0 && <WelcomeBack></WelcomeBack>}
      <Items todo={toDoItem} onDeleteClick={handleDeleteItem}></Items>
    </center>
  );
}

export default App;
