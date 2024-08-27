import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../config/configAxios';
import "./ProductsDetails.css"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`https://front-proyectofinal-5o94.onrender.com/api/productos/${id}`); //corregir error o agregar ${id}
        console.log('Product details:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image_url} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>Descripción: {product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
    </div>
  );
};

export default ProductDetails;
