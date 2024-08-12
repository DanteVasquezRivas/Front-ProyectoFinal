import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../config/configAxios.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Productos</p>; //me sigue trayendo este mensaje, ya que no hemos agregado la Api

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
