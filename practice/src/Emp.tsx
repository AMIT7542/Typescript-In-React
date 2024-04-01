import React, { useState } from "react";

type User = {
  name: string;
  age: number;
};
const Emp = ({ empdetails }: { empdetails: User }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <div>
      {empdetails?.name}
      {empdetails?.age}
      <button onClick={() => setUser({ name: "amit", age: 20 })}>
        Click me!!
      </button>
    </div>
  );
};

export default Emp;
