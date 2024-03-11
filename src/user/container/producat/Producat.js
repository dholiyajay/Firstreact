import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './Producat.module.css';
import { ThreeDots } from 'react-loader-spinner';

function Producat(props) {
    const [producatdata, setproducatdata] = useState([]);
    const [Producat, Setproduct] = useState([]);
    const [select, setselect] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [data, setdata] = useState('');
    const [loading, setloading] = useState(false);
    // console.log(data);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
        const respons = await fetch('https://fakestoreapi.com/products');
        const data = await respons.json();
        setproducatdata(data);


        const uinque = [];

        setloading(true);


        data.map((v, i) => {
            if (!uinque.includes(v.category)) {
                uinque.push(v.category);
            }
        });

        setCategories(uinque);
    };

    const searchData = () => {
        let filteredData = producatdata.filter(
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

        if (data) {
            filteredData = filteredData.filter(v => v.category === data);
        }

        return filteredData;
    };

    const finaldata = searchData();



    return (
        <div className="container">
            {
                loading === false ? <>
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </> : (
                    <>

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
                                    <button style={{ backgroundColor: data === '' ? 'red' : 'yellow' }} onClick={() => setdata('')}>All</button>
                                    {Categories.map((v, i) => (
                                        <button style={{ backgroundColor: data === v ? 'red' : 'yellow' }} onClick={() => setdata(v)} key={i}>{v}</button>
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
                    </>
                )
            }
        </div>

    );
}

export default Producat;
