import React, { useState, useEffect } from 'react'
import { Spinner } from "react-bootstrap"
export const Product = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentsMounted = true
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentsMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false)
                console.log({ filter })
            }
            return () => {
                componentsMounted = false;
            }
        }

        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    }

    const filterProducts = (cat) => {
        const updateList = data.filter((item) => item.category === cat);
        setFilter(updateList)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>ALL</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("electronics")}>Electronic</button>
                </div>
                {filter.map((products) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={products.id}>
                                    <img src={products.image} className="card-img-top" alt={products.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{products.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${products.price}</p>
                                        <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>

            </div>
        </>
    )
}
