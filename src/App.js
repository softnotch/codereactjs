import React from 'react';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import Login from './Login';
import Register from './Register';
import Web from './Web';
import Html from './Html';
import Angular from './Angular';
import Php from './Php';

import { BrowserRouter as Router, Switch, Link, Route  } from 'react-router-dom';
import Service from './Service';
import Product from './Product';
import Testimonials from './Testimonials';
import Footer from './Footer';



function App() {
  return (
    <Router>
          <div> 
          <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/web" component={Web} />
                <Route path="/html" component={Html} />
                <Route path="/php" component={Php} />
                <Route path="/angular" component={Angular} />
            </Switch>
         
        </div>
    </Router>
  )
}

const Home = () => {
  return(
    <div> 
      <Slider /> 
      <Service />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  );
}



export default App;
