import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CartContext } from "../../CartContext";
import logo from "../../assets/logo.png";

const MyNavbar = () => {
  const { totalItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/products?search=${searchQuery}`); // Update URL with search query
  };

  return (
    <Navbar style={{ backgroundColor: "white", padding: "5px" }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img style={{ width: "65px", backgroundColor: "#5d6d7e", borderRadius: "50%" }} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" style={{ color: "#5d6d7e" }} className="fw-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" style={{ color: "#5d6d7e" }} className="fw-bold">Products</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "#5d6d7e" }} className="fw-bold">Login</Nav.Link>

            {/* Toggle Search Bar */}
            {showSearch ? (
              <Form className="d-flex ms-3" onSubmit={handleSearch}>
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form>
            ) : (
              <button 
                onClick={() => setShowSearch(true)} 
                style={{ marginLeft: "50px", background: "transparent", border: "0px", cursor: "pointer" }}
              >
                <FaSearch style={{ color: "#5d6d7e" }} size={20} />
              </button>
            )}

            {/* Cart Icon */}
            <button style={{ background: "transparent", border: "0px", marginLeft: "-10px" }}>
              <Link to="/cart" style={{ color: "#5d6d7e" }} className="ms-3">
                <FaShoppingCart style={{ color: "#5d6d7e" }} size={20} />
                {totalItems > 0 && <span className="badge ms-1" style={{ backgroundColor: "#5d6d7e", color: "white" }}>{totalItems}</span>}
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
