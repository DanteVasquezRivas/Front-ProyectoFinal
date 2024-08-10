import React from "react";
import ButtonProducts from "../components/ButtonProducts.jsx";
import CRapida from "../assets/img/stickers/icons8-shopping-cart.png"
import ESeguro from "../assets/img/stickers/icons8-enviado.png"
import SProtegido from "../assets/img/stickers/icons8-seguridad-comprobado.png"
import Garantia from "../assets/img/stickers/icons8-garantia.png"


const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
      </div>
      <br />
      <ButtonProducts className="buttonProducts" to="/products">
        Ver Productos
      </ButtonProducts>
      <div>
        <img src={CRapida} alt="" /> {/* No me permite subir imagenes */}
        <p>Compra rápida</p>
        <img src={ESeguro} alt="" /> {/* No me permite subir imagenes */}
        <p>Envío seguro</p>
        <img src={SProtegido} alt="" /> {/* No me permite subir imagenes */}
        <p>Sitio protegido</p>
        <img src={Garantia} alt="" /> {/* No me permite subir imagenes */}
        <p>Garantía</p>
      </div>
    </div>
    
  );
};

export default Home;
