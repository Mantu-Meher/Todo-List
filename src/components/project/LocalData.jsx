const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const savedTask = localStorage.getItem(todoKey);
  if (!savedTask) return [];
  return JSON.parse(savedTask);
};

export const setLocalStorageTodoData = (tasks) => {
  return localStorage.setItem(todoKey, JSON.stringify(tasks));
};
