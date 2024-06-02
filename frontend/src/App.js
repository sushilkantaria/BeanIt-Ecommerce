import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import All from './pages/All';
import AllCategory from './pages/AllCategory';
import Login from './pages/login';
import Signup from './pages/signup';
import ProductPage from './pages/ProductPage';
import Footer from './pages/footer';
import Home from './pages/home';
import CoffeeWebsite from './pages/CoffeeWebsite';
import ContactForm from './pages/contact'
import TermsAndConditions from './pages/terms';
import Origin from './pages/origin';
import BeverageWebsite from './pages/CoffeeCards';
import PrivacyPolicy from './pages/priv_policy';
import FactsAboutCoffee from './pages/facts';
import ScrollToTop from './pages/ScrollToTop';

import './App.css';

function App() {

  return (
    <Router>
      <div>
        <NavigationBar />
        <ScrollToTop />
        <Routes>
        <Route path="/All" element={<All/>} />
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/origin" element={<Origin/>}/>
        <Route path="/CoffeeCards" element={<BeverageWebsite/>}/>
        <Route path='/facts' element={<FactsAboutCoffee/>}/>
        <Route path='/priv_policy' element={<PrivacyPolicy/>}/>
        <Route path='/CoffeeWebsite' element={<CoffeeWebsite/>}/>
        <Route path='/terms' element={<TermsAndConditions/>}/>
        <Route path="/light-roast" element={<AllCategory category='Light Roast'/>} />
        <Route path="/medium-roast" element={<AllCategory category='Medium Roast'/>} />
        <Route path="/dark-roast" element={<AllCategory category='Dark Roast'/>} />
        <Route path="/latte" element={<AllCategory category_2='latte'/>} />
        <Route path="/mocha" element={<AllCategory category_2='mocha'/>} />
        <Route path="/cappuccino" element={<AllCategory category_2='cappuccino'/>} />
        <Route path="/espresso" element={<AllCategory category_2='espresso'/>} />
        <Route path="/americano" element={<AllCategory category_2='americano'/>} />
        <Route path="/robusta" element={<AllCategory category_3='robusta'/>} />
        <Route path="/arabica" element={<AllCategory category_3='arabica'/>} />
        <Route path="/excelsa" element={<AllCategory category_3='excelsa'/>} />
        <Route path="/liberica" element={<AllCategory category_3='liberica'/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

