import React from 'react';
import styled from 'styled-components';

const HCWrapper = styled.div`
    .intro {
        margin: auto;
        padding-top: 36px;
        text-align: center;
        width: 70%;
    }
`


const HomeContent = ({ photo }) => {
        return (
            <HCWrapper>
                <div className="intro">
                    <h1>Nasa APIs</h1>
                    <p>Welcome! This app displays photos from nasa. Check out the Photo Generator to see more astronomical photos!</p>
                </div>
                
            </HCWrapper>
        )
}

export default HomeContent;
