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
    min-height: 100vh;
    width: auto;
`

class Home extends Component {
    state = {
        isLoaded: false,
        weather: {}
    }

    async componentDidMount() {
        const response = await nasa.get('insight_weather/', {
            params: {
                version: 1.0,
                feedtype: "json"
            }
        })

        // Log the season from data 6 days ago
        // Use a loop to iterate keys and set values for each of the 7 days
        // This will help set weather tiles for each day
        
        this.setState({ isLoaded: true, weather: response.data });
    }

    
    render() {
        const { isLoaded, weather } = this.state
        return(        
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: "-100%" }}
            >
                <HomeWrapper>
                    <Navigation />
                        {
                            isLoaded ? 
                                <HomeContent weather={weather}/> :
                                <div>Loading...</div>
                        }
                        
                    <Footer />
                </HomeWrapper>
            </motion.div>  
        )
    }
}

export default Home;
