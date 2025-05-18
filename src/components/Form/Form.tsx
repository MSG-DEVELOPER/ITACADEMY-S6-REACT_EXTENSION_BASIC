import { useContext } from "react"
import { ContextTotalItems, ContextTotalPrice } from "../ServicesBox/ServicesBox"
import BudgetCard from "../BudgetCard/BudgetCard";


function Form() {
const total = useContext(ContextTotalPrice);
const totalItems = useContext(ContextTotalItems)

function addCardBudget(){

alert("Añadido a Mis Presupuestos " + (total + totalItems));

}


  return (
    <div>
        aqui vendran inputs para enviar a budget pagges
        <input type="text" />
        <input type="text" />
        <button onClick={addCardBudget}>go!</button>

    </div>
  )
}

export default Form