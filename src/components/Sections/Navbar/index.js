import React, { useState } from "react";
import { Button } from "../../index";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Navbar = ({ logo, items }) => {
  const [isLogin, setIsLogin] = useState(false);

  // Handler function
  const handler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full bg-slate-200 py-2 px-28 flex shadow-lg">
      <div className="w-[40%] flex items-center">
        <img src={logo} className="w-20" />
      </div>
      <div className=" w-[60%] flex justify-between">
        <div className="flex items-center">
          <Menu items={items} />
        </div>
        <div className="flex items-center">
          <Link to={"/login"}>
            <Button
              placeholder={"Login In"}
              handler={handler}
              type={"success"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
