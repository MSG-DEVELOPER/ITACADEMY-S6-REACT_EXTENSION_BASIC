import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import Home from "./pages/Home/Home.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

interface BudgetItem {
  nombre: string;
  email: string;
  telefono: string;
  total:number;
  seleccionados: string[];
}


export const ContextBudgetArray= createContext<BudgetItem[] | null>(null);
export const ContextSetBudgetArray= createContext<Dispatch<SetStateAction<BudgetItem[]>> | null>(null);

export const ContextTotalPrice = createContext<number | null>(0);
export const ContextSetTotalPrice = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

export const ContextTotalItems = createContext<number | null>(0);
export const ContextSetTotalItems = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

export const ContextSelectedServices = createContext<string[] | null>(null);
export const ContextSetSelectedServices = createContext<Dispatch<SetStateAction<string[]>> | null>(null);


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const[budgetArray,setBudgetArray] =  useState<BudgetItem[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  return (
    <>
      <Navbar />
       <ContextSetBudgetArray.Provider value={setBudgetArray}>
       <ContextBudgetArray.Provider value={budgetArray}>
       <ContextTotalItems.Provider value={totalItems}>
       <ContextSetTotalItems.Provider value={setTotalItems}>
       <ContextTotalPrice.Provider value={totalPrice}>
       <ContextSetTotalPrice.Provider value={setTotalPrice}>
       <ContextSelectedServices.Provider value={selectedServices}>
       <ContextSetSelectedServices.Provider value={setSelectedServices}>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>

      </ContextSetSelectedServices.Provider>
      </ContextSelectedServices.Provider>
      </ContextSetTotalPrice.Provider>
      </ContextTotalPrice.Provider>
      </ContextSetTotalItems.Provider>
      </ContextTotalItems.Provider>
      </ContextBudgetArray.Provider>
      </ContextSetBudgetArray.Provider>

      

    

    </>
  );
}

export default App;
