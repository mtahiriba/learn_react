import "./App.css";
import { useState } from "react";
import { Navbar, Footer, Counter, Button } from "./components";

function App() {

  let [message, setMessage] = useState("Welcome Visitor!");

  const handleClick = () => {
    setMessage("Thank you for clicking me!");
  }

  let name1 = "Muhammad Tahir";
  let name2 = "Taha";

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-green-200 py-5 flex flex-col gap-10 justify-center items-center m-h-96">
        <h1>{message}</h1>
        <Button placeholder="Click Me" handler={handleClick} />
        <Counter name={name1}/>
        <Counter name={name2}/>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
