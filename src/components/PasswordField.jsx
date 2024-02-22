import React, { useState } from "react";
import { InputField } from "./index";
import { OpenEyeIcon, CloseEyeIcon } from "../assets/icons";

const PasswordField = ({ name, placeholder, value, setValue }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div className="relative">
      <InputField
        type={isPasswordShow ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
      />
      <div className="absolute right-0 top-0 h-full w-14  flex justify-end items-center px-3">
        <div
          className="cursor-pointer"
          onClick={() => setIsPasswordShow(!isPasswordShow)}
        >
          {isPasswordShow ? <CloseEyeIcon /> : <OpenEyeIcon />}
        </div>
      </div>
    </div>
  );
};

export default PasswordField;
