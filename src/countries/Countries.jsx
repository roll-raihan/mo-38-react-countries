import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    //to store visited country data (cls-6,7,8)

    //**note: in state, when we have to deal with  non-primitive(array,object), we can't use push,pop. So we would follow bellow steps

    const [visitedCountries, setVisitedCountries] = useState([]);

    //send handler to different location using props system

    const handleVisitedCountries = (country) => {
        // console.log("clicked", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    //
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>In the countries:  {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                        key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;