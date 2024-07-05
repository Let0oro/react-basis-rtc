import { useReducer, useState } from "react";
import ShowCount from "./ShowCount";

// Uncomment for reducer
// const reducer = (count, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         number: count.number + 1,
//         text: action.newText,
//         originNumber: count.originNumber + 1,
//       };
//     case "DECREMENT":
//       return { ...count, number: count.number - 1, text: action.newText };
//     case "RESTART":
//       return { ...count, number: 0, text: "Still without changes..." };
//     default:
//       throw new Error(`Unknow action ${action.type}!`);
//   }
// };

// const createInitialNumber = (count) => ({
//   ...count,
//   number: 0,
//   text: count.text,
// });

const initialValue = {
  number: 0,
  text: "Still without changes...",
};

function App() {
  // Uncomment for reducer
  // const [count, dispatch] = useReducer(
  //   reducer,
  //   { number: 0, text: "Still without changes...", originNumber: 0 },
  //   createInitialNumber
  // );

  const [count, setCount] = useState({
    number: 0,
    text: "Still without changes...",
    originNumber: 0,
  });

  return (
    <>
      <ShowCount count={count} />
      <button
        onClick={
          () =>
            setCount((ct) => ({
              number: ct.number + 1,
              text: "Hey, you have increment the number",
              originNumber: ct.originNumber + 1,
            }))
          // dispatch({
          //   type: "INCREMENT",
          //   newText: "Hey, you have increment the number",
          // })
        }
      >
        Sumar
      </button>
      <button
        onClick={
          () =>
            setCount((ct) => ({
              ...ct,
              number: ct.number - 1,
              text: "Hey, you have decrement the number",
            }))
          // dispatch({
          //   type: "DECREMENT",
          //   newText: "Hey, you have decrement the number",
          // })
        }
      >
        Restar
      </button>
      <button
        onClick={
          () => setCount(ct => ({...ct, ...initialValue}))
          // dispatch({
          //   type: "RESTART",
          // })
        }
      >
        Reiniciar
      </button>
    </>
  );
}

export default App;
