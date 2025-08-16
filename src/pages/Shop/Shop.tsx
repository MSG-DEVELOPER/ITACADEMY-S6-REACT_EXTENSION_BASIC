import Header from "../../components/Header/Header"
import ServicesBox from "../../components/ServicesBox/ServicesBox"
import RenderZone from "../../components/RenderZone/RenderZone"


function Shop() {
  return (
    <div>
      
         <Header />
         <div style={{marginTop:"10rem"}}> <ServicesBox  /></div>
        
         <RenderZone/>

    </div>
  )
}

export default Shop