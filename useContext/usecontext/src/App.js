import { createContext, useEffect, useRef, useState } from "react";
import { Component1 } from "./components/component1";

// const r = {
//   useState : () => {},
//   useEffect : () => {},
// }

// const {useState } = r;
export const userContext = createContext();

// export function App() {
// const [user, setUser] = useState("Arthi Harikrishnan");
// const [inputValue, setInputValue] = useState("");
// const inputElement = useRef();

// const focusInput = () => {
//   inputElement.current.focus();
// };

// return (
//   <userContext.Provider value={user}>
//     <h1>App</h1>
//     <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       ref={inputElement}
//     />
//     <button
//       onClick={() => {
//         console.log(document.querySelector("input").focus());
//       }}
//     >
//       Focus Input
//     </button>
// <Component1 />
// </userContext.Provider>
// );
// }

export function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
