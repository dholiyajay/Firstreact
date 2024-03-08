import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './Producat.module.css';

function Producat(props) {
    const [producatdata, setproducatdata] = useState([]);
    const [Producat, Setproduct] = useState([]);
    const [select, setselect] = useState([]);
    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
        const respons = await fetch('https://fakestoreapi.com/products');
        const data = await respons.json();
        setproducatdata(data);

        

        const categories = [...new Set(data.map((v, i) => v.category))];
        setCategories(categories);
        console.log(Categories);

    };



    const searchData = () => {
        const filteredData = producatdata.filter(
            (v) =>
                v.title.toLowerCase().includes(Producat) ||
                v.description.toLowerCase().includes(Producat) ||
                v.price.toString().includes(Producat)
        );

        let sortedData = filteredData.sort((a, b) => {
            if (select === 'hw') {
                return a.price - b.price;
            } else if (select === 'lh') {
                return b.price - a.price;
            } else if (select === 'az') {
                return a.title.localeCompare(b.title);
            } else if (select === 'za') {
                return b.title.localeCompare(a.title);
            }
        });



        return sortedData;
    };



    const finaldata = searchData();

    return (
        <div className="container">
            <input type="text" placeholder="Search" id="search" onChange={(event) => Setproduct(event.target.value)} />
            <select onChange={(event) => setselect(event.target.value)}>
                <option value="0">select</option>
                <option value="hw">high to low</option>
                <option value="lh">low to high</option>
                <option value="az">a to z</option>
                <option value="za">z to a</option>
            </select>

            <div className="row">
                <div>
                    <ul>
                        {Categories.map((category, index) => (

                            <button onClick={() => setCategories(Categories)}>{category}</button>
                        ))}
                        
                    </ul>
                </div>

                {finaldata.map((v, i) => (
                    <div className="col-md-4 gy-5" key={i}>
                        <Card style={{ width: '18rem' }}>
                            <img alt="Sample" style={{ height: '350px' }} src={v.image} />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {v.title.length > 10 ? v.title.substring(0, 20) + '...' : v.title}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    $ {v.price}
                                </CardSubtitle>
                                <CardText>{v.category}</CardText>
                                <CardText>
                                    {v.description.length > 50 ? v.description.substring(0, 50) + '...' : v.description}
                                </CardText>
                                <Button>Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Producat;
