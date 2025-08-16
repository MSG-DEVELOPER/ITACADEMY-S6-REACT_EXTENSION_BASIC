import { useContext, useState } from "react";
import type { ChangeEvent } from "react";
import {
  ContextTotalItems,
  ContextTotalPrice,
  ContextSetBudgetArray,
  ContextBudgetArray,
  ContextSelectedServices,
} from '../../App';

import {
  CardContainer,
  FormContainer,
  Input,
  RedButton,
} from "./Form.style";

function Form() {
  const total = useContext(ContextTotalPrice) ?? 0;
  const totalItems = useContext(ContextTotalItems) ?? 0;
  const setBudgetArray = useContext(ContextSetBudgetArray)!;
  const budgetArray = useContext(ContextBudgetArray) ?? [];
  const selectedServices = useContext(ContextSelectedServices) ?? [];

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tlf, setTlf] = useState<string>("");

  function addCardBudget() {
    setBudgetArray([
      ...budgetArray,
      {
        nombre: name,
        email: email,
        telefono: tlf,
        total: total + totalItems,
        seleccionados: selectedServices,
      },
    ]);
  }

  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleOnChangeTlf(e: ChangeEvent<HTMLInputElement>) {
    setTlf(e.target.value);
  }

  return (
    <CardContainer>
      <h1>Crear Presupuesto</h1>
      <FormContainer>
        <Input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={handleOnChangeName}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleOnChangeEmail}
        />
        <Input
          type="text"
          placeholder="Teléfono"
          value={tlf}
          onChange={handleOnChangeTlf}
        />
        <RedButton onClick={addCardBudget}>Solicitar presupuesto</RedButton>
      </FormContainer>
    </CardContainer>
  );
}

export default Form;
