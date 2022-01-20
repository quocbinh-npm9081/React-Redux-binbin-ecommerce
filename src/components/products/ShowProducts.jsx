import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './showProducts.scss'

const Button = ({ className, setFilterProducts, children, data, index }) => {
    return (
        <button type="button" className={className} onClick={() => setFilterProducts(data, index)}>{children}</button>
    )
}
const ShowProducts = ({ filter, setFilter, data }) => {

    const dataBtns = [{
        title: 'All',
        dataSet: 'all',
        active: true
    },
    {
        title: "Men",
        dataSet: "men's clothing",
        active: false

    }, {
        title: "Women",
        dataSet: "women's clothing",
        active: false

    }, {
        title: 'Jewelery',
        dataSet: "jewelery",
        active: false
    }, {
        title: "Electronic",
        dataSet: "electronics",
        active: false
    }];
    const [buttons, setButtons] = useState(dataBtns);
    const setFilterProducts = (category, index) => {

        setActiveBtn(index);
        if (category === 'all') {
            setFilter(data);
        } else {
            const products = data.filter(product => product.category === category);
            setFilter(products);
        }
    }
    const setActiveBtn = (i) => {

        const newBtnActive = dataBtns.map((btn, index) => index === i ? { ...btn, active: true } : { ...btn, active: false });
        setButtons(newBtnActive);
    }

    return (
        <>

            <div className='d-flex  buttons m-4'>
                {
                    buttons.map((btn, index) => (
                        <Button key={index} index={index} className={btn.active ? `btn btn-outline-dark me-2 ms-2 active` : `btn btn-outline-dark me-2 ms-2`} setFilterProducts={setFilterProducts} data={btn.dataSet}>{btn.title}</Button>
                    ))
                }

                {/* <button type="button" className="btn btn-outline-dark" onClick={() => setFilterProducts('all')}>All</button>
                <button type="button" className="btn btn-outline-dark me-2 ms-2" onClick={() => setFilterProducts("men's clothing")}>Men's Clothings</button>
                <button type="button" className="btn btn-outline-dark me-2 ms-2" onClick={() => setFilterProducts("women's clothing")}>Women's Clothings</button>
                <button type="button" className="btn btn-outline-dark me-2 ms-2" onClick={() => setFilterProducts("jewelery")}>Jewelery Clothings</button>
                <button type="button" className="btn btn-outline-dark me-2 ms-2" onClick={() => setFilterProducts("electronics")}>Electronic's Clothings</button> */}

            </div>

            {

                filter.map((product, index) => {
                    return <div className='col-md-3 col-sm-6 mb-4 ' key={index}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top" height="300px" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title mb-0 product__title">{product.title.substring(0, 12)}</h5>
                                <p className="card-text">${product.price}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy</Link>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    );
}

export default ShowProducts;
