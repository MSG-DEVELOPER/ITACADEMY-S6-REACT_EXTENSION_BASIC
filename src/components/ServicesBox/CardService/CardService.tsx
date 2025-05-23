import { Styles as S } from "./CardService.style";

import { useContext, useState, type ReactNode } from "react";
import { ContextTotalPrice } from "../../../App";
import { ContextSetTotalPrice } from "../../../App";
import { ContextSetTotalItems } from "../../../App";

interface CardProps {
  service: string;
  description: string;
  price: number;
  children?: ReactNode;
}

function CardService(props: CardProps) {
  const totalPrice = useContext(ContextTotalPrice);
  const setTotalPrice = useContext(ContextSetTotalPrice);
  const setTotalItems = useContext(ContextSetTotalItems);
  const [renderChildren, setRenderChildren] = useState(false);

  function HandleCheck(
    event: React.MouseEvent<HTMLInputElement>,
    price: number
  ) {
    const target = event.target as HTMLInputElement;

    if (target.checked && setTotalPrice) {
      setTotalPrice(totalPrice + price);
      setRenderChildren(true);
    } else if (
      !target.checked &&
      setTotalPrice &&
      setTotalItems 
      
    ) {
      setTotalPrice(totalPrice - price);
      setTotalItems(0);
      setRenderChildren(false);
    }
  }

  return (
    <S.Card>
      <S.Card_Main>
        <S.Card_Seccion1>
          <S.Card_Seccion1_p1>{props.service}</S.Card_Seccion1_p1>
          <S.Card_Seccion1_p2> {props.description}</S.Card_Seccion1_p2>
        </S.Card_Seccion1>
        <S.Card_Seccion2>{props.price} €</S.Card_Seccion2>
        <S.Card_Seccion3>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <label htmlFor="checkAñadir">Afegeix</label>
            <input
              type="checkbox"
              id="checkAñadir"
              onClick={(event) => HandleCheck(event, props.price)}
            />
          </div>
        </S.Card_Seccion3>
      </S.Card_Main>
      <S.Card_Seccion_Children>
        {renderChildren && props.children}
      </S.Card_Seccion_Children>
    </S.Card>
  );
}

export default CardService;
