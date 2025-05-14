import WebChildrenArticle from "../WebChildrenArticle/WebChildrenArticle";

import { Main } from "./WebChildren.style";



function WebChildren() {

 
  const item1:string="Nombre de pàgines";
  const item2:string="Nombre de llenguatges";



  return (
    <Main>

      
      <WebChildrenArticle item={item1} price={30}/>
      <WebChildrenArticle item={item2} price={30}/>


    


    </Main>
  )
}

export default WebChildren