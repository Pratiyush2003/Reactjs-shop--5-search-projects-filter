import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


const ProductDetail = () => {

    const { id } = useParams();

    /*hamara products jo hai wo is product variable me store hoga to is product se hum filter karenge*/
    const [product, setProducts] = useState({});
    const [relatedProducts, setrelatedProducts] = useState([]);
  
    useEffect(()=>{
        const filterProducts = items.filter((product) => product.id == id);
        setProducts(filterProducts[0])

        const relatedProducts = items.filter((p) => p.category === product.category);
          setrelatedProducts(relatedProducts);
          
    },[id, product.category]);
    

  return (
    <div>
      <div className="container con">
        <div className="img">
          <img src = {product.imgSrc} alt="..." /> 
          </div>
          <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
                  <p className="card-text">{product.description}</p>
                  <button className='btn btn-primary mx-3'>₹{product.price}</button>
                  <button className='btn btn-warning'>Add to Cart</button>
          </div>
          </div>
          <Product items = {relatedProducts}></Product>
    </div>
  )
}

export default ProductDetail
