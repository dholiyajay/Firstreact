import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './Producat.module.css'

function Producat(props) {
    const [producatdata, setproducatdata] = useState([]);
    const [Producat, Setproduct] = useState([]);
    const [select, setselect] = useState([]);

    useEffect(() => {
        getdata()
    }, []);
    const getdata = async () => {
        // console.log("kkkkkkk");
        const respons = await fetch("https://fakestoreapi.com/products");
        // console.log(respons);
        const data = await respons.json();
        console.log(data);

        setproducatdata(data);


    }

    const searchData = () => {

        console.log(Producat);

        const filteredData = producatdata.filter((v) =>
            v.title.toLowerCase().includes(Producat) ||
            v.description.toLowerCase().includes(Producat) ||
            v.price.toString().includes(Producat)
        );

        let sort = filteredData.sort((a, b) => {
            if (select === "hw") {
                return a.price - b.price;
            } else if (select === "lh") {
                return b.price - a.price;
            } else if (select === "az") {
                return a.title.localeCompare(b.title);
            } else if (select === "za") {
                return b.title.localeCompare(a.title);

            }
        })

        return filteredData;


    };

    const finaldata = searchData();
    console.log(finaldata);




    return (
        <div className='container'>
            <input type="text" placeholder='Search' id='search' onChange={(event) => Setproduct(event.target.value)} />
            <select onChange={(event) => setselect(event.target.value)}>
                <option value="0">select</option>
                <option value="hw">high to low</option>
                <option value="lh">low to high</option>
                <option value="az">a to z</option>
                <option value="za">z to a</option>
            </select>
            <div className='row'>
                {finaldata.map((v, i) => (
                    <div className='col-md-4 gy-5' >
                        <Card style={{ width: '18rem' }} >
                            <img alt="Sample" style={{ height: '350px' }} src={v.image} />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {v.title.length > 10 ? v.title.substring(0, 20) + "..." : v.title}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                    $ {v.price}
                                </CardSubtitle>
                                <CardText>
                                    {v.category}
                                </CardText>
                                <CardText>
                                    {v.description.length > 50 ? v.description.substring(0, 50) + "..." : v.description}
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