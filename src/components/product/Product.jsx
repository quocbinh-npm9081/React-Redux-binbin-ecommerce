import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../loading/Loading';

const ShowProducts = ({ product }) => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-6">
                <img src={product.image} alt={product.title} height={400} width={380} />
            </div>
            <div className="col-6">
                <h3 className='display-5 fw-bold my-4'>{product.title}</h3>
                <p className='text-uppercase text-black-50'>{product.description}</p>
                <p className="lead">
                    Rating: {product.rating && product.rating.rate}
                    <i className='bx bx-star' ></i>
                    <h3 className='fw-bold my-2'>${product.price}</h3>
                </p>
                <button className="btn btn-outline-dark">Add To Cart</button>
                <Link to="/cart" className='btn btn-dark ms-2'>
                    Go To Cart
                </Link>
            </div>
        </div >
    )
}

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false)
        }

        getProduct();
    }, []);
    return (
        <div className='container'>
            <div className="row">
                {loading ? <Loading type="alone" /> : <ShowProducts product={product} />}
            </div>
        </div>
    )
}

export default Product
