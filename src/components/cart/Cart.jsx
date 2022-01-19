import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, deleteToCart } from '../redux/action';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {

    const state = useSelector(state => state.handleCart);
    const dispatch = useDispatch();
    const handleDelete = (product) => {
        toast.dark('Delete product succesfull!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        dispatch(deleteToCart(product))
    }
    const handleAdd = (product) => {

        toast.dark('Add to cart succesfull!', {
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
    return (
        <div>
            {

                state.length > 0 ?
                    state.map((product) => (
                        <div className='row justify-content-center mt-5'>
                            <div className="col-md-2">
                                <img src={product.image} alt={product.titlee} height="250px" />
                            </div>
                            <div className="col-md-4">
                                <h3>
                                    {product.title}
                                </h3>
                                <p className='lead fw-bold'>
                                    {product.qty} X ${product.price}= ${product.qty * product.price}
                                </p>

                                <button className='btn btn-outline-dark me-4' onClick={() => handleDelete(product)}>
                                    <i className='bx bx-minus'></i>
                                </button>
                                <button className='btn btn-outline-dark me-4' onClick={() => handleAdd(product)}>
                                    <i className='bx bx-plus bx-rotate-90' ></i>
                                </button>
                            </div>
                        </div >

                    )) : (
                        <div className='text-center'>
                            <div>
                                <h4 className='text-center mt-5'>
                                    Cart Is Empty
                                </h4>
                            </div>

                            <Link to="/products" className='btn btn-outline-dark mt-5'>
                                Buy Now
                            </Link>
                        </div>
                    )
            }
            <ToastContainer />
        </div >
    );
}

export default Cart;
