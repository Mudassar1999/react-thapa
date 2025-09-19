import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
  ]);

  const removeFirst = () => {
    setItems(items.slice(1)); // remove first element
  };

  return (
    <div>
      <button onClick={removeFirst}>Remove First</button>
      <ul>
        {/* {items.map((item, index) => (
          <li key={index}>
            <input type="text" defaultValue={item.text} />
          </li>
        ))} */}
        {items.map((item) => (
          <li key={item.id}>
            <input type="text" defaultValue={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
