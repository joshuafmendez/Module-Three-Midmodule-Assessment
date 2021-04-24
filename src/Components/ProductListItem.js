import React from 'react';
import formatPrice from '../helpers/formatPrice';

const ProductListItem = ({product, addProduct}) => {
    const {name, price, img, description} = product;
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <button onClick={() => addProduct(product)}>Add To Cart</button>
            <p><img src={img} alt='Pic'/></p>
            <p>{description}</p>
        </li>
    )
}

export default ProductListItem