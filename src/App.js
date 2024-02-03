import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
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
      <Routes>
<Route path='/' element={<Home data={PRODUCT}/>}/>
<Route path='/product/:id' element={<Single/>}/>
</Routes>
<Card/>
<Two/>
<Footer/>
    </div>
  );
}

export default App;
