import React from "react";
import ButtonProducts from "../components/ButtonProducts.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
        <h1>Encuentra aquí todo lo que necesitas para el regalón del hogar</h1>
        <img src="" alt="" />
        {/* No me permite subir imagenes */}
      </div>
      <br />
      <ButtonProducts className="buttonProducts" to="/products">
        Ver Productos
      </ButtonProducts>
      <div>
        <img src="" alt="" /> {/* No me permite subir imagenes */}
        <p>Compra rápida</p>
        <img src="" alt="" /> {/* No me permite subir imagenes */}
        <p>Envío seguro</p>
        <img src="" alt="" /> {/* No me permite subir imagenes */}
        <p>Sitio protegido</p>
        <img src="" alt="" /> {/* No me permite subir imagenes */}
        <p>Garantía</p>
      </div>
    </div>
    
  );
};

export default Home;
