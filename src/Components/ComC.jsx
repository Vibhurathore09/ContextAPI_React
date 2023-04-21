import React, { useContext } from "react";
import { AppState, NameContext } from "../App";
const ComC = () => {
  const appData = useContext(AppState);
  const Name = useContext(NameContext);
  return (
    <div className="compc">
      <div>Com C</div>
      <h1>{appData.data}</h1>
      <h1>name : {Name.name}</h1>
      <h1>age : {Name.age}</h1>
    </div>
  );
};

export default ComC;
