import React, { useContext } from "react";
import { userContext } from "../App";

export function Component5() {
  const user = useContext(userContext);

  return (
    <>
      <h1>Hello {user}</h1>
    </>
  );
}
