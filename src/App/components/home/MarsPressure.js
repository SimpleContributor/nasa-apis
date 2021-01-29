import React from 'react';
import MarsTile from './MarsTile';
import styled from 'styled-components';

const StyledMarsPressure = styled.div`
    align-items: flex-end;
    display: flex;
    height: 400px;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 1400px) {
        
    }
`

const MarsPressure = ({ weather }) => {
    // Remove the last two keys from the weather object so only the Sol numbers are mapped
    delete weather["sol_keys"];
    delete weather["validity_checks"];
    const renderedList = Object.keys(weather).map((sol, i) => {
        return <MarsTile 
                    key={i}
                    sol={sol}
                    weather={weather}
                    i={i+762}/>
    })

    return (
        <StyledMarsPressure>
            {renderedList}
        </StyledMarsPressure>
    )
}

export default MarsPressure;
