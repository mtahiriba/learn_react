import React from "react";

const Button = ({placeholder, handler, type="success"}) => {
  return (
    <button 
      className={`${type.toLocaleLowerCase() === "success" && "bg-green-500"} 
        ${type.toLocaleLowerCase() === "danger" && "bg-red-500"}
        ${type.toLocaleLowerCase() === "primary" && "bg-blue-500"}
        text-white border shadow-md rounded-md py-2 px-5`}
      onClick={handler}
    >
      {placeholder}
    </button>
  );
};

export default Button;
