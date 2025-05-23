import { useContext,useState} from "react";
import {
  ContextTotalItems,
  ContextTotalPrice,
  ContextSetBudgetArray,
  ContextBudgetArray
} from '../../App';
import {
  CardContainer,
  FormContainer,
  Input,
  RedButton,
} from "./Form.style";

function Form() {
  const total = useContext(ContextTotalPrice);
  const totalItems = useContext(ContextTotalItems);
  const setBudgetArray = useContext(ContextSetBudgetArray);
  const budgetArray = useContext(ContextBudgetArray);

  const [name,setName]=useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tlf, setTlf] = useState<string>("");

  function addCardBudget() {
    alert("Añadido a Mis Presupuestos " + (total + totalItems) + name + email + tlf);
  }

  function handleOnChangeName(e){
    setName(e.target.value);
  }

  function handleOnChangeEmail(e) {
  setEmail(e.target.value);
}

function handleOnChangeTlf(e) {
  setTlf(e.target.value);
}



  return (
    <CardContainer>
      <h1>Demanar pressupost</h1>
      <FormContainer>
        <Input type="text" placeholder="Nombre" value={name}  onChange={handleOnChangeName}  />
        <Input type="text" placeholder="Email"value={email} onChange={handleOnChangeEmail}/>
        <Input type="text" placeholder="Teléfono" value={tlf} onChange={handleOnChangeTlf} />
        <RedButton onClick={addCardBudget}>Go!</RedButton>
      </FormContainer>
    </CardContainer>
  );
}

export default Form;
