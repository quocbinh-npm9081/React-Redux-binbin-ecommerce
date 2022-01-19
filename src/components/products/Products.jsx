import React, { useState, useEffect } from 'react';



import Loading from '../loading/Loading';
import ShowProducts from './ShowProducts';
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {

        const getProducts = async () => {

            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products')

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => componentMounted = false;
        }

        getProducts();

    }, []);

    return (

        <div className='container my-5 py-4'>
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">
                        Laste Products
                    </h1>
                    <hr />
                </div>
            </div>

            <div className="row justify-content-center">
                {
                    loading ? <Loading /> : <ShowProducts filter={filter} setFilter={setFilter} data={data} />
                }
            </div>
        </div>
    );
}

export default Products;
