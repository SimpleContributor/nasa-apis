import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import './app.css';

function App() {
    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
            </Switch>
        </AnimatePresence>
    )
}

export default App;
