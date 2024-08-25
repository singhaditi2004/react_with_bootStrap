import ToDoItem from "./ToDoItem";

const Items = ({ todo }) => {
  return (
    <div>
      {todo.map((item, index) => (
        <ToDoItem key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default Items;
