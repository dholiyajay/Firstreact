import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './Producat.module.css'

function Producat(props) {
    const [producatdata, setproducatdata] = useState([]);
    const [Producat, Setproduct] = useState([]);

    useEffect(() => {
        getdata()
        searchData()
    }, []); //componentDidMount

    const getdata = async () => {
        // console.log("kkkkkkk");
        const respons = await fetch("https://fakestoreapi.com/products");
        // console.log(respons);
        const data = await respons.json();
        console.log(data);

        setproducatdata(data);
        Setproduct(data);

    }

    const searchData = () => {
        const searchValue = document.getElementById('search').value.toLowerCase();

        const filteredData = producatdata.filter(product =>
            product.title.toLowerCase().includes(searchValue)
        );

        Setproduct(filteredData);
    }
    return (
        <div className='container'>
            <input type="text" placeholder='Search' id='search' onChange={searchData} />
            <h1 className='text-center'>Products</h1>
            <div className='row'>
                {Producat.map((v, i) => (
                    <div className='col-md-4 gy-5' >
                        <Card style={{ width: '18rem' }} >
                            <img alt="Sample" style={{ height: '350px' }} src={v.image} />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {v.title.substring(0, 11)}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                    $ {v.price}
                                </CardSubtitle>
                                <CardText>
                                    {v.category}
                                </CardText>
                                <CardText>
                                    {v.description.substring(0, 90)}
                                </CardText>
                                <Button>
                                    Add to Cart
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Producat;