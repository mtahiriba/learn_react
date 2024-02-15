import React from "react";

const Button = (props) => {
  return (
    <button className="bg-green-500 text-white border shadow-md rounded-md py-2 px-5"
      onClick={props.handler}
    >
      {props.placeholder}
    </button>
  );
};

export default Button;
