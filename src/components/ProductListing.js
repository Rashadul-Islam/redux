import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    /* eslint-disable no-unused-vars */
    const products = useSelector((state) => state.allProducts.products);
    /* eslint-enable no-unused-vars */
    const dispatch = useDispatch();

    const fetchProducts = async() =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch(err => {
            console.log(Error, err);
        })
        dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchProducts();
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div> 
    );
};

export default ProductListing;