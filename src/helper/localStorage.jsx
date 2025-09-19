const itemName = "todoList";
const getItem = () => {
  const item = localStorage.getItem(itemName);
  console.log(item);

  return item ? JSON.parse(item) : [];
};
const setItem = (value) => {
  localStorage.setItem(itemName, JSON.stringify(value));
  return;
};

export { getItem, setItem };
