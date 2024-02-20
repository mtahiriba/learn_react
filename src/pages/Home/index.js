import React, { useState } from "react";
import { Counter, Button } from "../../components";


const Home = () => {
  let [message, setMessage] = useState("Welcome Visitor!");

  const handleClick = () => {
    setMessage("Thank you for clicking me!");
  };

  return (
    <div>
      {/* Main Content */}
      <div className="bg-green-200 py-5 flex flex-col gap-10 justify-center items-center m-h-96 pt-32">
        <h1>{message}</h1>
        <Button placeholder="Click Me" handler={handleClick} />
        <Counter name={"Muhammad Tahir"} />
        <Counter name={"Taha"} />
      </div>
    </div>
  );
};

export default Home;
