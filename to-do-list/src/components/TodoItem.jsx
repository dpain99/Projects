import React, { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
      <div className="TodoItem">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <button id="edit" onClick={() => changeFocus()}> <i className="fa-solid fa-pen-to-square"></i> </button>
      <button id="complete"  onClick={() => completeTodo(item.id)}> <i className="fa-solid fa-check"></i> </button>
      <button id="delete" onClick={() => removeTodo(item.id)}> <i className="fa-solid fa-trash-can"></i> </button>
      </div>
  )

    
     
  
}

export default TodoItem;
