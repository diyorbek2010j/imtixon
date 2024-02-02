import React from 'react'
import "./Product.css"
function Product({data}) {
  console.log(data);
  return (
    <div className='product'>
      <h2>Top Categories</h2>
        <div className="product__card">
          {
            data?.map((el)=> <div key={el.id} className="product__item">
              <img src={el.url} alt="" />
            </div>


          )}
          <div className="product__item"></div>
        </div>
    </div>
  )
}

export default Product