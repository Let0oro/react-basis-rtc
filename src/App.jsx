import { useReducer } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1, text: action.newText };
    case "DECREMENT":
      return { number: state.number - 1, text: action.newText };
    default:
      throw new Error(`Unknow action ${action.type}!`);
  }
};

const init = ({ number }) => {
  number: 0;
};

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    { number: 0, text: "Still without changes..." },
  );

  console.log(state);

  return (
    <>
      <ShowCount count={state} />
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
      {/* <button onClick={() => init()}>Reiniciar</button> */}
    </>
  );
}

export default App;
