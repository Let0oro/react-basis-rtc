import { useReducer } from "react";
import ShowCount from "./ShowCount";

const reducer = (count, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        number: count.number + 1,
        text: action.newText,
        originNumber: count.originNumber + 1,
      };
    case "DECREMENT":
      return { ...count, number: count.number - 1, text: action.newText };
    case "RESTART":
      return { ...count, number: 0, text: "Still without changes..." };
    default:
      throw new Error(`Unknow action ${action.type}!`);
  }
};

const createInitialNumber = (count) => ({
  ...count,
  number: 0,
  text: count.text,
});

function App () {
  const [count, dispatch] = useReducer(
    reducer,
    { number: 0, text: "Still without changes...", originNumber: 0 },
    createInitialNumber
  );

  return (
    <>
      <ShowCount count={count} />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            newText: "Hey, you have increment the number",
          })
        }
      >
        Sumar
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            newText: "Hey, you have decrement the number",
          })
        }
      >
        Restar
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "RESTART",
          })
        }
      >
        Reiniciar
      </button>
    </>
  );
}

export default App;
