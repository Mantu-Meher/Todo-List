// import React from 'react'
import { useState } from "react";
import TodoForm from "./TodoForm";
import TaskList from "./TaskList";
import TodoDateTime from "./TodoDateTime";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./LocalData";

const Todo = () => {
  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) {
      alert("Please enter a task");
      return ;
    }
    const checkedTask = tasks.find((curTask) => curTask.content === content);

    if(checkedTask) return alert("Task is Already Here!");

    if (!checkedTask) {
      return setTasks([...tasks, { id, content, checked }]);
    } 
    
  };

  setLocalStorageTodoData(tasks);

  const handleTodoDelete = (taskToDelete) => {
    const updatedTask = tasks.filter((curTask) => curTask !== taskToDelete);
    setTasks(updatedTask);
  };

  const handleChecked = (task) => {
    setTasks(
      tasks.map((curElm) => {
        if (curElm.content === task.content) {
          return { ...curElm, checked: !curElm.checked };
        } else {
          return curElm;
        }
      })
    );
  };

  return (
    <>
      <div className="w-[500px] flex flex-col">
        <div className="bg-green-500 shadow-lg rounded-t-lg p-5 w-full">
          <h1 className="text-center text-2xl font-bold text-white mb-3">
            TODO List
          </h1>
          <TodoDateTime />
        </div>

        <TodoForm onAddTodo={handleSubmit} />

        {tasks.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            onHandleDelete={handleTodoDelete}
            handleCheckFun={handleChecked}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
