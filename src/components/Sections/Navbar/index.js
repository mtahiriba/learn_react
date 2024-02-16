import React, { useState } from "react";
import { Button } from "../../index";
import Menu from "./Menu";

const Navbar = ({ logo, items }) => {
  const [isLogin, setIsLogin] = useState(false);

// Handler function   
  const handler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full bg-slate-200 py-2 px-28 flex shadow-lg fixed">
      <div className="w-[40%] flex items-center">
        <img src={logo} className="w-20" />
      </div>
      <div className=" w-[60%] flex justify-between">
        <div className="flex items-center">
          <Menu items={items} />
        </div>
        <div className="flex items-center">
          {isLogin === false ? (
            <Button placeholder={"Login In"} handler={handler} type={"danger"}/>
          ) : (
            <Button placeholder={"Login Out"} handler={handler}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
