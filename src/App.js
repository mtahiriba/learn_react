import "./App.css";
import { useState } from "react";
import { Products, Navbar, Footer } from "./components/Sections";
import { Counter, Button } from "./components";
import { Logo } from "./assets/images";


const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
];

function App() {

  let [message, setMessage] = useState("Welcome Visitor!");

  const handleClick = () => {
    setMessage("Thank you for clicking me!");
  }

  return (
    <div className="">
      {/* Navbar */}
      <Navbar logo={Logo} items={items} />
      
      
      {/* Main Content */}
      <div className="bg-green-200 py-5 flex flex-col gap-10 justify-center items-center m-h-96 pt-32">
        <h1>{message}</h1>
        <Button placeholder="Click Me" handler={handleClick} />
        <Counter name={"Muhammad Tahir"}/>
        <Counter name={'Taha'}/>
      </div>

      {/* Product Section*/}
      <Products />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
