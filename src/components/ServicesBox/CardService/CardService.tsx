import { Card } from "./CardService.style";
import {Card_Seccion1} from './CardService.style';
import {Card_Seccion2} from './CardService.style';
import {Card_Seccion3} from './CardService.style';
import { Card_Seccion1_p1 } from "./CardService.style";
import { Card_Seccion1_p2 } from "./CardService.style";


import { useContext } from "react";
import { ContextTotalPrice } from "../../ServicesBox/ServicesBox";
import { ContextSetTotalPrice } from "../../ServicesBox/ServicesBox";

interface CardProps {
  service: string;
  description: string;
  price:number;
}

function CardService(props: CardProps) {

  const totalPrice = useContext(ContextTotalPrice);
  const setTotalPrice = useContext(ContextSetTotalPrice);

  function incrementa(event: React.MouseEvent<HTMLInputElement>,price:number) {
   
     const target = event.target as HTMLInputElement;

    if(target.checked && setTotalPrice){

    setTotalPrice(totalPrice + price);
  
    } else if (!target.checked && setTotalPrice){
      setTotalPrice(totalPrice - price);
       
    }

   

  }

  return (
    <Card>
      <Card_Seccion1>
        <Card_Seccion1_p1>{props.service}</Card_Seccion1_p1>
        <Card_Seccion1_p2> {props.description}</Card_Seccion1_p2>
      </Card_Seccion1>
      <Card_Seccion2>{props.price} €</Card_Seccion2>
      <Card_Seccion3>
        <label htmlFor="checkAñadir">Afegeix</label>
        <input type="checkbox" id="checkAñadir" onClick={(event)=>incrementa(event , props.price)} />
      </Card_Seccion3>
      
    </Card>
  );
}

export default CardService;
