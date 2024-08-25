import "bootstrap/dist/css/bootstrap.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import Items from "./components/Items";
import { useState } from "react";
function App() {
  const initialtoDoItem = [
    {
      name: "Buy books",
      dueDate: "10/12/24",
    },
    {
      name: "Buy Lens",
      dueDate: "11/12/24",
    },
    {
      name: "Study",
      dueDate: "12/12/23",
    },
  ];

  const [toDoItem, setToDOItem] = useState(initialtoDoItem);
  const handleOnNewItemAdded = (itemName, itemDate) => {
    console.log(`${itemName} is here with ${itemDate}`);
    const newToDoItem = [...toDoItem, { name: itemName, dueDate: itemDate }];
    setToDOItem(newToDoItem);
  };
  return (
    <center className="todo">
      <AppName />
      <AddToDo onNewItemAdded={handleOnNewItemAdded} />
      <Items todo={toDoItem}></Items>
    </center>
  );
}

export default App;
