import "./App.css";
import Button from "./Button";
import React, { useState } from "react";
import Emp from "./Emp";

type EmpType = {
  name: string;
  age: number;
};
function App() {
  const [empdetails, setEmpdetails] = useState<EmpType>({
    name: "amit",
    age: 20,
  });
  const demo = () => {
    alert("hi");
  };
  return (
    <div className="App">
      <Button
        backgroundColor="blue"
        disabled={true}
        fontSize={20}
        onClick={demo}
      />
      <Emp empdetails={empdetails} />
    </div>
  );
}

export default App;
