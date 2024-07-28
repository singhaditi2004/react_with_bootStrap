function AddToDo() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6">
            <input type="text" name="task" id="task" placeholder="Add a task" />
          </div>
          <div className="col-sm-4">
            <input type="date" id="due_date" placeholder="dd/mm/yy" />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToDo;
