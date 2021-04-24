import React from 'react'
import formatPrice from '../helpers/formatPrice';

const Cart = ({items, subtotal, subTax, total}) => {

    return (
        <section>
            <h2>Cart</h2>
            <ul className="Cart">
                {items.map(item => {
                    const {name, price, id} = item;
                    return <li key={id}>{name}: {formatPrice(price)}</li>
                })}
            </ul>
            <h3>Subtotal: {subtotal}</h3>
            <h3>Tax: {subTax}</h3>
            <h3>Total: {total}</h3>
        </section>
    );
}

export default Cart;