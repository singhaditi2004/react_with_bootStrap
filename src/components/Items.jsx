import ToDoItem from "./ToDoItem";

const Items = ({ todo, onDeleteClick }) => {
  return (
    <div>
      {todo.map((item, index) => (
        <ToDoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default Items;
