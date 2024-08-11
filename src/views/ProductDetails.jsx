import React from 'react'
//import { CartContext } from '../context/CartContext'
//import {Products} from '../views/Products'

const ProductDetails = (props) => {
  const { img, description, name, price } = props
  const [selectedPizza, setSelectedPizza] = useState([]);

  //const { addToCart, removeFromCart, cartItems } = useMyContext()


  return (
    <CartContext>
      <Products>
        <img src={img} alt={name} /> {/* no nos esta tomando la img */}
        <div>
          <h2>{name}</h2>
          <p>Descripcion: {description}</p>
          <p>Valor: ${price}</p>
        </div>
      </Products>
    </CartContext>
  )
}

export default ProductDetails