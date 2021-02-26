import React from 'react';
import styled from 'styled-components';
import MarsPressure from './MarsPressure';

const HCWrapper = styled.div`
    .intro {
        display: grid;
        font-size: 1.5rem;
        margin: auto;
        padding-top: 36px;
        text-align: center;
        width: 70%;

        h1 {

        }

        p {
            
        }
    }
`


const HomeContent = ({ weather }) => {
    
        return (
            <HCWrapper>
                <div className="intro">
                    <h1>Recent Pressure on Mars</h1>
                    <p>
                        Welcome! This app uses data from NASA to get information on things such as NASA's InSight Mars lander.
                        Check out the Photo Generator to see astronomical photos.
                    </p>
                </div>
                <MarsPressure weather={weather}/>
            </HCWrapper>
        )
}

export default HomeContent;
