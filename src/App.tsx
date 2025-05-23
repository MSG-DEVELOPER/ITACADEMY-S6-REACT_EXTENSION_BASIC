import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import Home from "./pages/Home/Home.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

export const ContextTotalPrice = createContext<number | null>(0);
export const ContextSetTotalPrice = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

export const ContextTotalItems = createContext<number | null>(0);
export const ContextSetTotalItems = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      <Navbar />

       <ContextTotalItems.Provider value={totalItems}>
       <ContextSetTotalItems.Provider value={setTotalItems}>
       <ContextTotalPrice.Provider value={totalPrice}>
       <ContextSetTotalPrice.Provider value={setTotalPrice}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>


      </ContextSetTotalPrice.Provider>
      </ContextTotalPrice.Provider>
      </ContextSetTotalItems.Provider>
      </ContextTotalItems.Provider>


    </>
  );
}

export default App;
