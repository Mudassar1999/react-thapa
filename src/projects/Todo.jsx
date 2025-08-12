import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    setItems((prev) => [...prev, inputValue]);
    console.log(items);
  };

  return (
    <>
      <div className="m-auto">
        <h1>Todo App</h1>
        <form action="" onSubmit={handleOnSubmit}>
          <div className="sm:col-span-4">
            <label
              htmlFor="item"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Add Items
            </label>
            <div className="mt-2 flex gap-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id="item"
                  placeholder="Item name"
                  className="min-w-0 py-1.5 pr-3 pl-1  text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  onChange={(e) => handleOnChange(e)}
                />
                {/* <input type="text" className="min-w-0 py-1.5 pr-3 pl-1  text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" value={inputValue}/> */}
              </div>
              <button className="bg-indigo-600">
                <MdAddBox />
              </button>
              <button className="">
                <MdDeleteForever />
              </button>
              <p>{inputValue}</p>
            </div>
            <div>
              <ul>
                {items.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Todo;
