// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Route,Routes} from "react-router-dom"
import { Product } from './components/Product';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' exact   element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
