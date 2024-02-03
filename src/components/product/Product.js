import React from 'react'
import "./Product.css"
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
function Product({data}) {
  console.log(data);
  return (
    <div className='product'>
      <h2>Top Categories</h2>
        <div className="product__card">
          {
            data?.map((el)=> <div key={el.id} className="product__item">
              <Link to={`/product/${el.id}`}>
              <img src={el.url} alt="" />
              </Link>
              <p>{el.title} <GoArrowUpRight /></p>
            </div>


          )}
          <div className="product__item"></div>
        </div>
    </div>
  )
}

export default Product