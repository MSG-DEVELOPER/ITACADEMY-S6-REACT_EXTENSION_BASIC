import {Routes,Route} from 'react-router-dom' 
import "./App.css";
import Home from "./pages/Home/Home.tsx";
import Shop from './pages/Shop/Shop.tsx';
import Header from "./components/Header/Header.tsx";
import ServicesBox from "./components/ServicesBox/ServicesBox.tsx";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element= {<Home/>}/>
         <Route path="/Shop" element={<Shop/>}/>
      </Routes>
      
      

     
    </>
  );
}

export default App;
