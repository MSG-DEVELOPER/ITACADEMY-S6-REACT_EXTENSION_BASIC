import { Styles as S } from "./CardService.style";
import { useContext, useState, type ReactNode } from "react";
import {
  ContextTotalPrice,
  ContextSetTotalPrice,
  ContextSetTotalItems,
  ContextSelectedServices,
  ContextSetSelectedServices,
} from "../../../App";
import { ShoppingCart } from "lucide-react";

interface CardProps {
  service: string;
  description: string;
  price: number;
  children?: ReactNode;
}

function CardService(props: CardProps) {
  const totalPrice = useContext(ContextTotalPrice) ?? 0;
  const setTotalPrice = useContext(ContextSetTotalPrice)!;
  const setTotalItems = useContext(ContextSetTotalItems)!;
  const selectedServices = useContext(ContextSelectedServices) ?? [];
  const setSelectedServices = useContext(ContextSetSelectedServices)!;

  const [renderChildren, setRenderChildren] = useState(false);

  // id único por tarjeta para evitar duplicados en el DOM
  const checkboxId = `checkAñadir-${props.service.replace(/\s+/g, "-").toLowerCase()}`;

  function HandleCheck(event: React.MouseEvent<HTMLInputElement>, price: number) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      setTotalPrice(totalPrice + price);
      setSelectedServices([...selectedServices, props.service]);
      setRenderChildren(true);
      console.log(selectedServices);
    } else {
      setTotalPrice(totalPrice - price);
      setTotalItems(0);
      const updated = selectedServices.filter((service) => service !== props.service);
      setSelectedServices(updated);
      setRenderChildren(false);
      console.log(selectedServices);
    }
  }

return (
  <S.Card>
    <S.Card_Main>
      {/* FILA 1: título centrado */}
      <S.Card_Seccion1>
        <S.Card_Seccion1_p1>{props.service}</S.Card_Seccion1_p1>
      </S.Card_Seccion1>

      {/* FILA 2: descripción */}
      <S.Card_DescripcionWrapper>
        <S.Card_Seccion1_p2>{props.description}</S.Card_Seccion1_p2>
      </S.Card_DescripcionWrapper>

      {/* FILA 3: precio + carrito */}
      <S.Card_Fila3>
        <S.Card_Seccion2>{props.price} €</S.Card_Seccion2>

        <S.Card_Seccion3>
          <div className="carrito-wrapper">
            <label htmlFor={checkboxId} className="carrito-label">
              <ShoppingCart aria-hidden="true" />
              <span className="sr-only">Añadir al presupuesto</span>
            </label>

            <input
              type="checkbox"
              id={checkboxId}
              onClick={(event) => HandleCheck(event, props.price)}
            />
          </div>
        </S.Card_Seccion3>
      </S.Card_Fila3>
    </S.Card_Main>

    {/* children igual */}
    <S.Card_Seccion_Children>
      {renderChildren && props.children}
    </S.Card_Seccion_Children>
  </S.Card>
);


}
export default CardService;
