import { useReducer } from "react";

// export const Counter = () => {
//   const reducer = (state, action) => {
//     if (action.type === "INCREMENT") {
//       return state + 1;
//     } else {
//       return state - 1;
//     }
//   };
//   const [count, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </>
//   );
// };

export const Counter = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Counter:{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};
