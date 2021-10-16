import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products}) {
    return (
        <>
            {
                products.map((item)=>{
                    return(
                        <ProductItem key={item.id} product={item} />
                    )
                })
            }
        </>
    )
}

export default ProductList
