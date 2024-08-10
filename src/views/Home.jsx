import React from "react";
import ButtonProducts from "../components/ButtonProducts.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
        <h1>Encuentra aquí todo lo que necesitas para tu regalón</h1>
      </div>
      <br />
      <ButtonProducts className="buttonProducts" to="/products">
        Ver Productos
      </ButtonProducts>
    </div>
  );
};

export default Home;
