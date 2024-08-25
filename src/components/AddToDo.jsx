import { useState } from "react";

function AddToDo({ onNewItemAdded }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");
  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };
  const handleOnNewItemAddedButt = () => {
    onNewItemAdded(toDoName, toDoDate);
    setToDoDate("");
    setToDoName("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              name="task"
              id="task"
              value={toDoName}
              placeholder="Add a task"
              onChange={handleNameChange}
            />
          </div>
          <div className="col-sm-4">
            <input
              type="date"
              id="due_date"
              value={toDoDate}
              placeholder="dd/mm/yy"
              onChange={handleDateChange}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleOnNewItemAddedButt}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToDo;
