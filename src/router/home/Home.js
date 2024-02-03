import React from 'react'
import Product from '../../components/product/Product'
  function Home({data}) {
  return (
    <div>
      <Product data={data} />

    </div>
  )
}

export default Home