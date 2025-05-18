import {Routes,Route} from 'react-router-dom' 
import "./App.css";
import Home from "./pages/Home/Home.tsx";
import Shop from './pages/Shop/Shop.tsx';
import Budget from './pages/Budget/Budget.tsx'
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
         <Route path="/" element= {<Home/>}/>
         <Route path="/Shop" element={<Shop/>}/>
         <Route path="/Budget" element={<Budget/>}/>
      </Routes>
      
      

     
    </>
  );
}

export default App;
