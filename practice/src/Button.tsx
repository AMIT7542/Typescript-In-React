import React from "react";
//use type to define data type of props
// type ButtonProps = {
//   backgroundColor: string;
//   disabled?: boolean;
//   fontSize?: string;
// };
//option props
type ButtonProps = {
  backgroundColor: string;
  disabled?: boolean;
  fontSize: number;
  onClick: () => void;
};

//touple
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// let ButtonTouple:[string,number,boolean]

// ButtonTouple=['ak',20,true]
// console.log(ButtonTouple)
// console.log(ourTuple);

// **************  RECORD
// <Button borderRadius={{topLeft:20,topRight:20}} />

// type ButtonProps={
//   borderRadius:Record<string,number>
// }

const Button = ({
  backgroundColor,
  disabled,
  fontSize,
  onClick,
}: ButtonProps) => {
  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: backgroundColor, fontSize: fontSize }}
        onClick={onClick}
      >
        Click me{" "}
      </button>
    </div>
  );
};

export default Button;
