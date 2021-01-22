import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Apod from './components/apod/Apod';
import './app.css';

function App() {
    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route path="/photo-of-the-day" component={Apod} />
            </Switch>
        </AnimatePresence>
    )
}

export default App;
