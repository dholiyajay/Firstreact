import React,{useState} from 'react';
import Citycountry from './Citycountry';

function Countrycity(props) {
    const [CountryName, setCountryName] = useState(props.countryName);
    const [City, setCity] = useState("surat");

    const  handleSubmit=()=>{
        setCountryName("canada");
        setCity("torrento");
        
    }

    return (
        <>
            <h1>Country : {CountryName} </h1>
            <Citycountry  City={City} ChangeCity={setCity} />
            
            <button onClick={handleSubmit}>Change</button>
        </>
    );
}

export default Countrycity;