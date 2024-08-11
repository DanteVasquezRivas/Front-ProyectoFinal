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
      <div className="category">
<div className="subcategory">
<img src={CRapida} alt="" /> 
        <p>Compra rápida</p>
</div>
<div className="subcategory">
<img src={ESeguro} width={50} alt="" /> 
        <p>Envío seguro</p>
    </div>  
        
   <div className="subcategory">
      <img src={SProtegido} alt="" /> 
       <p>Sitio protegido</p>
      </div> 

      <div className="subcategory">
   <img src={Garantia} alt="" /> 
    <p>Garantía</p>

   </div>
      
     
      </div>
    </div>
    
  );
};

export default Home;
