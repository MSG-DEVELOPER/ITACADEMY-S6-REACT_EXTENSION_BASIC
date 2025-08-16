import CardService from "./CardService/CardService";
import WebChildren from "./WebChildren/WebChildren";
import Form from "../Form/Form";

import { Main } from "./ServicesBox.style";
import { ShowTotal } from "./ServicesBox.style";
import { BoxTotalPrice, Inner, CardsGrid,FormWrapper } from "./ServicesBox.style";

import { useContext } from "react";
import { ContextTotalItems, ContextTotalPrice } from "../../App";

function ServicesBox() {
  const totalPrice = useContext(ContextTotalPrice) ?? 0;
  const totalItems = useContext(ContextTotalItems) ?? 0;

  const Desc = "Programacion de una web responsive completa";

  return (
    <Main>
      <Inner>
        <br />

        <CardsGrid>
          <CardService service="Seo" description={Desc} price={300} />
          <CardService service="Ads" description={Desc} price={400} />
          <CardService service="Web" description={Desc} price={500}>
            <WebChildren />
          </CardService>
        </CardsGrid>

        <br />

        <BoxTotalPrice>
          <ShowTotal> PRECIO: {totalPrice + totalItems} €</ShowTotal>
        </BoxTotalPrice>
        <br />
        <br />
        <br />
        <FormWrapper>
          <Form />
        </FormWrapper>
        <br />
        <br />
        <br />
      </Inner>
    </Main>
  );
}

export default ServicesBox;
