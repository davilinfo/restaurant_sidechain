import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import History from './components/History';
import FoodOrder from './components/FoodOrder';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>        
        <Header />        
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/History" component={History} />
            <Route path="/FoodOrder" component={FoodOrder} />            
        </Switch>
        <Footer/>        
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));