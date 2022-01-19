import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loading from '../loading/Loading';
import { addToCart } from '../redux/action';
import { ToastContainer, toast } from 'react-toastify';

const ShowProducts = ({ product, addProduct }) => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-sm-6 col-12 ">
                <img src={product.image} alt={product.title} height={400} width={380} />
            </div>
            <div className="col-sm-6 col-12 ">
                <h3 className='display-5 fw-bold my-4'>{product.title}</h3>
                <p className='text-uppercase text-black-50'>{product.description}</p>
                <p className="lead">
                    Rating: {product.rating && product.rating.rate}
                    <i className='bx bx-star' ></i>
                </p>
                <h3 className='fw-bold my-2'>${product.price}</h3>

                <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>Add To Cart</button>
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

    const dispatch = useDispatch();
    const addProduct = (product) => {
        toast.dark('Add to cart succesfully !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        dispatch(addToCart(product))
    }

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
                {loading ? <Loading type="alone" /> : <ShowProducts product={product} addProduct={addProduct} />}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Product
