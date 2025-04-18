import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SampleContext } from "./App";
import { CartContext } from "./CartContext";
import { Card, Button, Container, Dropdown, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const Product = () => {
  const { product = [] } = useContext(SampleContext);
  const { addToCart } = useContext(CartContext);
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const search = params.get("search");

    if (category) setSelectedCategory(category);
    if (search) setSearchQuery(search);
  }, [location]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  const filteredProducts = [...product]
    .filter(item =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price;
      if (sortOrder === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <Container fluid>
      <h1 className="text-center my-4" style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}>
        PRODUCTS
      </h1>

      <div className="d-flex justify-content-start justify-content-sm-center mb-3 px-3">
        <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: "white", border: "1px solid #5d6d7e", color: "#5d6d7e" }}>
            Filter by Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOrder("default")}>Default</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOrder("low-high")}>Price: Low to High</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOrder("high-low")}>Price: High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center mt-4">No products found.</p>
      ) : (
        <Slider
          dots={false}
          infinite
          speed={800}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2000}
          pauseOnHover={false}
          responsive={[
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
          ]}
        >
          {filteredProducts.map((item) => (
            <Card
              key={item.id}
              className="shadow-sm text-center mx-2"
              onClick={() => setSelectedProduct(item)}
              style={{ cursor: "pointer", minHeight: "100%" }}
            >
              <Card.Img
                variant="top"
                src={item.images[0]}
                alt={item.title}
                className="img-fluid"
                style={{ height: "250px", objectFit: "cover", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${item.price} <br />
                  <small className="text-muted">{item.category}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <Modal
          show={true}
          onHide={() => setSelectedProduct(null)}
          centered
          fullscreen="sm-down"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={selectedProduct.images[0]}
              alt={selectedProduct.title}
              className="img-fluid"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <p className="mt-3">
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <Button
              style={{ backgroundColor: "#5d6d7e", border: "#5d6d7e" }}
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </Button>
          </Modal.Body>
        </Modal>
      )}

      {/* Confirmation Modal */}
      <Modal
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="text-center">
          <h5 style={{ color: "#5d6d7e", fontWeight: "bold" }}>✅ Added to Cart</h5>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Product;
