import React from "react";
import { Button } from '../../index'

const Card = ({ url, title, description }) => {

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-80 sm:w-72 lg:w-80">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src={url}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description}
        </p>
        <Button placeholder="Shop Now!" />
      </div>
    </div>
  );
};

export default Card;
