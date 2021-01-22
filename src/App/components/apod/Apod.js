import React, { Component } from 'react';
import { motion } from "framer-motion";
import Navigation from '../nav-and-footer/Navigation';
import ApodContent from './ApodContent';
import Footer from '../nav-and-footer/Footer';
import nasa from '../../../apis/nasa';
import styled from 'styled-components';

const ApodWrapper = styled.div`
    display: grid;
    grid-template-rows: 100px repeat(2, auto);

    background-color: #ccc;
    margin: 0;
    min-height: 1600px;
    width: auto;
`;

class Apod extends Component {
    state = {
        photo: ''
    }

    async componentDidMount() {
        const response = await nasa.get('/apod')
        console.log(response.data);
        this.setState({ photo: response.data })
    }


    render() {
        return(        
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: "-100%" }}
            >

                    <Navigation />
                    <ApodWrapper>
                        <ApodContent photo={this.state.photo} />
                    </ApodWrapper>
                    <Footer />

            </motion.div>  
        )
    }
}

export default Apod;
