import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link text-dark" to="/carrito">
        | Carrito 🛒 |
            <span className="menu-link text-dark">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget