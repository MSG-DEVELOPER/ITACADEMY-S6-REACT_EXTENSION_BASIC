import { useContext } from "react";
import { ContextBudgetArray } from "../../App";
import { SCardContent,SCard,SPrice,SServices,SPersonalData } from "./RenderZone.style";

type Budget = {
  nombre: string;
  email: string;
  telefono: string;
  total: number;
  seleccionados: string[];
};

function RenderZone() {
  const budgetArray = useContext(ContextBudgetArray);

  function BudgetCard(props:{children:Budget}) {
    const item=props.children;
    return (
      <SCardContent >
        <SPersonalData>        
            <h1>{item.nombre}</h1>
            <p>{item.email}</p>
            <p>{item.telefono}</p>
        </SPersonalData>
        <SServices>
            <p>Serveis contractats</p>
            <ul>           
                <p>{item.seleccionados.map(i=><li>{i}</li>)}</p>
            </ul>
        </SServices>
        <SPrice>
            <p>Total</p>
            <h1>{item.total} <span>€</span></h1>
        </SPrice>
      </SCardContent>
    );
  }

  return (
    <SCard>
      {budgetArray!.map((item, index) => ( <BudgetCard key={index}>{item}</BudgetCard>))}
   
    </SCard>
  );
}

export default RenderZone;
