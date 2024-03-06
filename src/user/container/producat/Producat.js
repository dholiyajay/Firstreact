import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Producat(props) {
    const [producatdata, setproducatdata] = useState([]);

    useEffect(() => {
        getdata()
    }, []); //componentDidMount

    const getdata = async () => {
        // console.log("kkkkkkk");
        const respons = await fetch("https://fakestoreapi.com/products");
        // console.log(respons);
        const data = await respons.json();
        console.log(data);

        setproducatdata(data);

    }
    return (
        <div>
            {producatdata.map((v, i) => (
                <h1 className='text-xl text-blue-600'>{v.title}</h1>
            ))}
        </div>
    );
}

export default Producat;