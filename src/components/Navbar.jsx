import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDropdown from "../components/UserDropdown";
import "./Navbar.css";

function NavbarPlantiv() {
  return (
    <>
      <Navbar className="Navbar">
        <Container className="containerNavbar">
          <NavbarBrand to="/">Pets Store</NavbarBrand>
          <Nav className="nav">
            <NavLink className="navlinkNavbar" to="/">
              Home
            </NavLink>
            <NavLink className="navlinkNavbar" to="/register">
              Crear cuenta
            </NavLink>
            <NavLink className="navlinkNavbar" to="/login">
              Iniciar sesión
            </NavLink>
            <NavLink className="navlinkNavbar" to="/products">
              Productos
            </NavLink>
            <NavLink className="navlinkNavbar" to="/cart">
              Carrito
            </NavLink>
            <UserDropdown />
          </Nav>
        </Container>
      </Navbar>
      ;
    </>
  );
}

export default NavbarPlantiv;
