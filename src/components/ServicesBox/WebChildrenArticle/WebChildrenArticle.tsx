import { MainArticle, Button, Panel, Display } from "./WebChildrenArticle.style";
import { useContext, useState } from "react";
import { ContextSetTotalItems, ContextTotalItems } from '../../../App';

interface Props {
  item: string;
  price: number;
}

function WebChildrenArticle(props: Props) {
  const total = useContext(ContextTotalItems) ?? 0;
  const setTotal = useContext(ContextSetTotalItems);
  const [items, setItems] = useState(0);

  function add() {
    if (setTotal) {
      setTotal(total + props.price);
      setItems(items + 1);
    }
  }

  function remove() {
    if (setTotal && items !== 0) {
      setTotal(total - props.price);
      setItems(items - 1);
    }
  }

  return (
    <MainArticle>
      <div>{props.item}</div>
      <Panel>
        <Button onClick={remove}>-</Button>
        <Display>{items}</Display>
        <Button onClick={add}>+</Button>
      </Panel>
    </MainArticle>
  );
}

export default WebChildrenArticle;
