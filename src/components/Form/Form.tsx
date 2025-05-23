import { useContext } from "react";
import {
  ContextTotalItems,
  ContextTotalPrice,
} from "../ServicesBox/ServicesBox";
import {
  CardContainer,
  FormContainer,
  Input,
  RedButton,
} from "./Form.style";

function Form() {
  const total = useContext(ContextTotalPrice);
  const totalItems = useContext(ContextTotalItems);

  function addCardBudget() {
    alert("Añadido a Mis Presupuestos " + (total + totalItems));
  }

  return (
    <CardContainer>
      <h1>Demanar pressupost</h1>
      <FormContainer>
        <Input type="text" placeholder="Nombre" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Teléfono" />
        <RedButton onClick={addCardBudget}>Go!</RedButton>
      </FormContainer>
    </CardContainer>
  );
}

export default Form;
