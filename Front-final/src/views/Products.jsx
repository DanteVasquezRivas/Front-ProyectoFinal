import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { useCart } from './CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`Producto ${product.name} agregado al carrito`);
    };

    return (
        <div className="products-container">
            {products.map(product => (
                <div className="product-item" key={product.id}>
                    <h2>{product.name}</h2>
                    <img className="product-image" src={product.imageUrl} alt={product.name} />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <div className="product-buttons">
                        <Link to={`/productDetails/${product.id}`} className="btn btn-details">Ver Detalles</Link>
                        <button className="btn btn-add-to-cart" onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
