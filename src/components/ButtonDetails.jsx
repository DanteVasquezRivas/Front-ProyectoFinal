import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

//to para definir la ruta en Home y Children el texto del boton
const ButtonDetails = ({ to, children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default ButtonDetails;
