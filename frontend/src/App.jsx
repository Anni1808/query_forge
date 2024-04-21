import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import SendText from "./components/SendText";
import MessageArea from "./components/MessageArea";
import DropDesgin from "./components/DropDesgin";
import DropDown from "./components/DropDown";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex h-screen">
        <Sidebar onChange= {setToggle}>
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 h-10 w-24 rounded-lg"
          >
            {toggle ? "manully" : "chat"}
          </button>
        </Sidebar>

        <div className="flex flex-col flex-1  overflow-y-auto">
          {toggle ? (
            <>
              <MessageArea />
              <SendText />
            </>
          ) : (
            <DropDown />
          )}
          {/* <DropDesgin /> */}
        </div>
      </div>
    </>
  );
}

export default App;
