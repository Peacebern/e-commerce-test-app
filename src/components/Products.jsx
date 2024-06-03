import React from "react";
import { useEffect, useState } from 'react';
import "../styles/products.css";
import { useDispatch } from "react-redux";
import { setItem } from "../features/ProductState";
import { useNavigate, useLocation } from "react-router-dom";


function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [count, setCount] = useState(10);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    


    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${count}`)
        .then(res => res.json())
        .then((data) => {
            setProducts(data.products);
        });
        }, [count]);

    const loadMore = () => {
        setCount((prevCount) => prevCount + 5);
    };
    
    const handleAction = (product) => {
    dispatch(
        setItem({
        title: product.title,
        image: product.images,
        price: product.price,
        })
    );
    navigate("/shop");
    };

    return(
        <div className="product-hero">
            <div className="product-p-flex">
                <p className="product-p">Featured Products</p>
                <p className="product-p1">BESTSELLER PRODUCTS</p>
                <p className="product-p2">Problems trying to resolve the conflict between </p>
            </div>

            <div className="products-1">
                {products.map((product) => (
                    <div key={product.id}>
                        <button
                            onClick={() => {
                                handleAction(product);
                            }}
                            className="link"
                            key={product.id}
                            >
                            <div>
                                <img 
                                    width={183} 
                                    height={238} 
                                    src={product.images} //Thumbnail
                                    alt="images" 
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = product.images;
                                    }}
                                />
                                <p>{product.title}</p>
                            </div>
                            <div className="products-2">
                                <p>${product.price}</p>
                                <p className="product-discount">${product.discountPercentage}.</p>
                            </div>
                        </button>
                    </div>
                ))

                }
            </div>

            <div>
                <button onClick={loadMore}  className="product-more" >LOAD MORE PRODUCTS</button>
            </div>
        </div>
    );
}

export default Products;
