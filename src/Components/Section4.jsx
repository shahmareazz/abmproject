import React, { useState, useContext } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext"; 
import "./Section4.css"; 

const featuredProducts = [
  {
    id: 1,
    title: "Stylish Jacket",
    image: "https://cdn.shopify.com/s/files/1/0867/4417/0787/files/winter-jacket-for-men_480x480.jpg?v=1725260898",
    price: 49.99,
    description: "A stylish winter jacket with a comfortable fit.",
  },
  {
    id: 2,
    title: "Trendy Sneakers",
    image: "https://www.jiomart.com/images/product/original/rvr2yonh8o/dexture-air-jordan-style-trendy-sneakers-for-men-blue-product-images-rvr2yonh8o-0-202305310813.jpg?im=Resize=(1000,1000)",
    price: 59.99,
    description: "Modern sneakers with a unique design.",
  },
  {
    id: 3,
    title: "Elegant Watch",
    image: "https://danielklein.in/cdn/shop/products/DK11467-3_1.jpg?v=1671621179&width=320",
    price: 79.99,
    description: "Luxury watch with a minimalist design.",
  },
  {
    id: 4,
    title: "Classic Handbag",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3EsD1YSvU6l9O2s0l0c4TmXqR1KoO1fRyA&s",
    price: 69.99,
    description: "A timeless handbag for everyday use.",
  },
];

const Section4 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext); 

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };


  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Container>
      <h1 className="text-center my-4" style={{ color: "#5D4037", fontWeight: "bold", fontSize: "50px" }}>
        FEATURED PRODUCTS
      </h1>

      <Row className="g-4">
        {featuredProducts.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12}>
            <Card className="shadow-sm product-card">
              <div className="image-container" onClick={() => openProductDetails(product)}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />

                {/* Hidden text bar for quick details */}
                <div className="quick-details">
                  <p><strong>QUICK DETAILS</strong></p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/*  Product Details Modal */}
      {selectedProduct && (
        <Modal show={true} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: "100%", maxHeight: "300px" }} />
            <p className="mt-3"><strong>Price:</strong> ${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <Button 
              style={{ backgroundColor: "#5D4037", border: "#5D4037" }} 
              className="me-2" 
              onClick={() => addToCart(selectedProduct)}> {/* Add to cart */}
              Add to Cart
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Section4;
