import ItemCount from "./ItemCount.jsx"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";


export const ItemDetail = ({ evento }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);


    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < evento.stock && setCantidad(cantidad + 1)
    }
    return (
      <div className="container" style={{width: 18 + 'em'}}>
      <img src={"../../" + evento.imagen} className="card-img-top" alt={evento.description}/>
      <div className="card-body">
          <h5 className="card-title">Verano 2024</h5>
          <p className="card-text">{evento.description}</p>
          <p className="card-text">Categoría: {evento.categoria}</p>
          <p className="card-text">${evento.price}</p>
          <div className="col">          
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(evento, cantidad) }}
                />
          </div>
          <p className="card-text">¡Quedan solo {evento.stock} entradas! </p>
          
          <a className="card-text" >¡Para comprar haz click en el carrito en la esquina superior derecha de la pantalla!</a>
      </div>
</div>
    )
}
export default ItemDetail    