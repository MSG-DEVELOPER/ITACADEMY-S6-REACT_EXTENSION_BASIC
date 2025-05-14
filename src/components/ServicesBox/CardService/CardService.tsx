import { Card } from "./CardService.style";
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

  function incrementa(event: React.MouseEvent<HTMLInputElement>,q:number) {
   
     const target = event.target as HTMLInputElement;

    if(target.checked){

    setTotalPrice(totalPrice + q);
  
    } else{
      setTotalPrice(totalPrice - q);
       
    }

   

  }

  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{props.service}</p>
        <p> {props.description}</p>
      </div>
      <div>{props.price}</div>
      <div>
        <label htmlFor="checkAñadir">Afegeix</label>
        <input type="checkbox" id="checkAñadir" onClick={(event)=>incrementa(event , props.price)} />
      </div>
      
    </Card>
  );
}

export default CardService;
