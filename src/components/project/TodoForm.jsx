import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleOnChange = (value) => {
    setInputValue({id:value, content:value, checked:false});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:"", content:"", checked:false});
  };

  return (
    <div className=" mx-auto mt-[-50px]  w-[90%] bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg shadow-lg mb-5">
      <h2 className="text-center text-white text-lg mb-3">
        What would you like to do?
      </h2>
      <div className="flex space-x-2 justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue.content}
            className="flex-1  p-2 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Enter task"
            onChange={(event)=>handleOnChange(event.target.value)}
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 ml-5 rounded-lg"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
