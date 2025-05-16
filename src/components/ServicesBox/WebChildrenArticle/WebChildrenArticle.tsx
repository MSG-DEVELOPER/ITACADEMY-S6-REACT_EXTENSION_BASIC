import { MainArticle } from "./WebChildrenArticle.style";
import { Button } from "./WebChildrenArticle.style";
import { Panel } from "./WebChildrenArticle.style";
import { Display } from "./WebChildrenArticle.style";

import { useContext, useState } from "react";
import { ContextSetTotalItems } from "../ServicesBox";
import { ContextTotalItems } from "../ServicesBox";

interface props {
  item: string;
  price:number;
}

function WebChildrenArticle(props: props) {
  const total = useContext(ContextTotalItems);
  const setTotal = useContext(ContextSetTotalItems);
  const [items, setItems] = useState(0);

  function add() {
    setTotal(total + props.price);
    setItems(items + 1);
  }

  function remove() {
    if(items!=0){
     setTotal(total - props.price);
     setItems(items - 1);
    }
  }

  return (
    <MainArticle>
      <div> {props.item}</div>
      <Panel>
        <Button onClick={remove}>-</Button>
        <Display>{items}</Display>

        <Button onClick={add}>+</Button>
      </Panel>
    </MainArticle>
  );
}

export default WebChildrenArticle;
