import React, { Component } from 'react';
import { motion } from "framer-motion";
import Navigation from '../nav-and-footer/Navigation';
import Footer from '../nav-and-footer/Footer';
import nasa from '../../../apis/nasa';
import styled from 'styled-components';
import HomeContent from './HomeContent';

const HomeWrapper = styled.div`
    display: grid;
    grid-template-rows: 100px repeat(2, auto);

    background-color: #ccc;
    margin: 0;
    min-height: 1600px;
    width: auto;
`

class Home extends Component {

    
    render() {
        return(        
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: "-100%" }}
            >
                <HomeWrapper>
                    <Navigation />
                        <HomeContent />
                    <Footer />
                </HomeWrapper>
            </motion.div>  
        )
    }
}

export default Home;
