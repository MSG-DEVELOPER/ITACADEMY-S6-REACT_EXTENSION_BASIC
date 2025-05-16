import CardService from "./CardService/CardService";
import WebChildren from "./WebChildren/WebChildren";

import { Main } from "./ServicesBox.style";
import { ShowTotal } from "./ServicesBox.style";
import { BoxTotalPrice } from "./ServicesBox.style";

import { createContext } from "react";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export const ContextTotalPrice = createContext<number | null>(0);
export const ContextSetTotalPrice = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

export const ContextTotalItems = createContext<number | null>(0);
export const ContextSetTotalItems = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

function ServicesBox() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const Desc = "Programació d'una web responsive completa";

  return (
    <Main>
      <br />

 <ContextTotalItems.Provider value={totalItems}>
      <ContextSetTotalItems.Provider value={setTotalItems}>
        <ContextTotalPrice.Provider
          value={totalPrice}
        ></ContextTotalPrice.Provider>
        <ContextSetTotalPrice.Provider value={setTotalPrice}>
          <ContextTotalPrice.Provider value={totalPrice}>
            <CardService service="Seo" description={Desc} price={300}>
              bb
            </CardService>
            <CardService service="Ads" description={Desc} price={400} />
            <CardService service="Web" description={Desc} price={500}>
              <WebChildren />
            </CardService>
          </ContextTotalPrice.Provider>
        </ContextSetTotalPrice.Provider>
      </ContextSetTotalItems.Provider>
       </ContextTotalItems.Provider>
      <br />

      <BoxTotalPrice>
        <ShowTotal> PREU PRESSUPOSTAT: {totalPrice + totalItems}  €</ShowTotal>
      </BoxTotalPrice>
    </Main>
  );
}

export default ServicesBox;
