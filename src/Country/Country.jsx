import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    // console.log(country)
    // console.log(country.name.common)

    //handleVisit
    const [visited, setVisited] = useState(false)
    const handleVisit = () => {
        // setVisited(true)
        //1.
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        //2.
        // setVisited(visited ? false : true)
        //3.
        setVisited(!visited)
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Population: {country.population.population}</h4>
            <h5>Area: {country.area.area}</h5>
            <button onClick={handleVisit}>{visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;