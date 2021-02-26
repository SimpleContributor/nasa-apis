import React from 'react';
import styled from 'styled-components';

const ACWrapper = styled.div`
    font-size: 1.5rem;
    min-height: 1400px;

    .intro {
        margin: auto;
        padding-top: 36px;
        text-align: center;
        width: 600px;
    }

    .apod {
        text-align: center;
        margin: auto;
        width: 600px;
    }

    .nasa-photo {
        width: 600px;
    }
`;


const HomeContent = ({ photo }) => {
        return (
            <ACWrapper>
                <div className="intro">
                    <h1>Nasa APIs</h1>
                    <p>Welcome! This app displays photos from nasa. Check out the Photo Generator to see more astronomical photos!</p>
                </div>
                <div className="apod">
                    <h3>Astronomical Photo of the Day</h3>
                    <img alt="Nasa Api call" className="nasa-photo" src={photo.url}></img>
                    <h3>{photo.title}</h3>
                    <p className="photo-explanation">{photo.explanation}</p>
                </div>
            </ACWrapper>
        )
}

export default HomeContent;
