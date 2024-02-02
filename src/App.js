import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';
import Banner from './components/banner/Banner';
import Home from './router/home/Home';
import Single from "./router/singleroute/Single"
import { PRODUCT } from './static/Index';
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer"
import Card from './components/card/Card';
import Two from './components/Twocard/Two';
function App() {
  return (
    <div className="App">
<Navbar/>
<Banner/>
<Product/>
<Card/>
<Two/>
<Footer/>
      <Routes>
<Route path='/' element={<Home data={{PRODUCT}}/>}/>
<Route path='/product/:id' element={<Single/>}/>
</Routes>
    </div>
  );
}

export default App;
