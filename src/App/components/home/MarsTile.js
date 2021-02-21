import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    background-color: #aaa;
    border-radius: 8px;
    height: 240px;
    font-size: 1.3rem;
    text-align: center;
    width: 200px;

    hr {
        border: solid 1px black;
        width: 80%;
    }
`

const MarsTile = ({ sol, weather, i }) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = parseInt(weather[sol].First_UTC.slice(5,7));
    let day = weather[sol].First_UTC.slice(8, 10);

    let d = weather[sol].Last_UTC.slice(0, 10);
    let date = new Date(d);
    let dateDay = dayNames[date.getDay()];

    return (
        <StyledTile>
            
            <h3>Sol {sol}</h3>
            <p>{dateDay}</p>
            <p>{months[month-1]} {day}</p>
            <hr/>
            <p>High: {weather[sol].PRE.mx.toFixed(1)} atm</p>
            <p>Low: {weather[sol].PRE.mn.toFixed(1)} atm</p>
        </StyledTile>
    )
}

export default MarsTile;
