import { Main } from "./ServicesBox.style";
import CardService from "./CardService/CardService";
import { createContext } from "react";
import { useState } from "react";
import  {Dispatch,SetStateAction}  from "react";

export const ContextTotalPrice = createContext<number | null>(0);
export const ContextSetTotalPrice = createContext<Dispatch<SetStateAction<number>> | null>(null);


function ServicesBox() {
  const [totalPrice, setTotalPrice] = useState(0);
  const Desc = "Programació d'una web responsive completa";
  

  return (
    <Main>
      <br />
      <br />
      <br />
      <ContextSetTotalPrice.Provider value={setTotalPrice}>
        <ContextTotalPrice.Provider value={totalPrice}>
          <CardService service="Seo" description={Desc} price={300} />
          <CardService service="Ads" description={Desc} price={400}/>
          <CardService service="Web" description={Desc} price={500} />
        </ContextTotalPrice.Provider>
      </ContextSetTotalPrice.Provider>
      <br />
      {totalPrice}
    </Main>
  );
}

export default ServicesBox;
