import { useEffect, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { getItem, setItem } from "./../hooks/localStorage";
const PracTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(getItem);
  const [error, setError] = useState("");
  const [time, setTime] = useState("");
  setItem(list);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // if (!inputValue) return;
    if (!inputValue || list.find((item) => item === inputValue)) {
      //   setInputValue("");
      setError("Invalid Input Value.");
      return;
    } else {
      setError("");
    }

    setList((prev) => [...prev, inputValue]);
    setInputValue("");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setTime(`${date} - ${time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDeleteButton = (indexVal) => {
    const updatedList = list.filter((value, index) => index !== indexVal);
    setList(updatedList);
  };

  return (
    <>
      <div className="m-auto grid">
        <h1>Todo App</h1>
        <h3>{time}</h3>
        <form action="" onSubmit={handleOnSubmit}>
          <div className="sm:col-span-4">
            <p className="text-red-600">{error}</p>
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
                  className="py-1.5 pr-3 pl-1 w-50 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  onChange={handleOnChange}
                  value={inputValue}
                />
                {/* <input type="text" className="min-w-0 py-1.5 pr-3 pl-1  text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" value={inputValue}/> */}
              </div>
              <button className="bg-green-600 text-white p-2 rounded">
                <MdAddBox />
              </button>
            </div>
          </div>
        </form>
        <hr className="mt-3" />
        <div className="mt-1">
          {list.length === 0 ? (
            <h3>Add items to list here</h3>
          ) : (
            <ul>
              {list.map((item, index) => {
                return (
                  <div className="flex gap-2 items-center py-2">
                    <li
                      className="items-center rounded-md bg-white p-2 w-52 "
                      key={index}
                    >
                      {item}
                    </li>
                    <button
                      type="button"
                      className="bg-red-700 hover:bg-red-800 text-white p-2 rounded"
                      onClick={() => handleDeleteButton(index)}
                    >
                      <MdDeleteForever className="w-5 h-5" />
                    </button>
                  </div>
                );
              })}
            </ul>
          )}

          <button
            className="my-5 ml-48 bg-black text-white p-2 rounded"
            onClick={() => setList([])}
          >
            Claear
          </button>
        </div>
      </div>
    </>
  );
};

export default PracTodo;
