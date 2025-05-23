import CardService from "./CardService/CardService";
import WebChildren from "./WebChildren/WebChildren";
import Form from "../Form/Form";

import { Main } from "./ServicesBox.style";
import { ShowTotal } from "./ServicesBox.style";
import { BoxTotalPrice } from "./ServicesBox.style";

import { useContext } from "react";
import { ContextTotalItems, ContextTotalPrice } from '../../App';


function ServicesBox() {
  const totalPrice=useContext(ContextTotalPrice);
   const totalItems=useContext(ContextTotalItems);

  const Desc = "Programació d'una web responsive completa";

  return (
    <Main>
      <br />

      <CardService service="Seo" description={Desc} price={300}/>
      <CardService service="Ads" description={Desc} price={400} />
      <CardService service="Web" description={Desc} price={500}>
        <WebChildren />
      </CardService>

      <br />

      <BoxTotalPrice>
        <ShowTotal> PREU PRESSUPOSTAT: {totalPrice + totalItems} €</ShowTotal>
      </BoxTotalPrice>
      <br />
      <br />
      <br />
      <Form />
    </Main>
  );
}

export default ServicesBox;
