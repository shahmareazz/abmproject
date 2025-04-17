import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionB.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionB = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <Container fluid className="grid-container">
      <h2 className="section-heading" style={{ color: "#5d6d7e", fontWeight: "bold", fontSize: "40px" }}>TOP PICKS</h2>
      <Row>
        <Col lg={6} className="large-card" onClick={() => handleCategoryClick("furniture")}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqXE3v1pUfR3xRCuz9bpBipUCe4Ty55va5w&s" alt="Furniture" />
          <div className="overlay">
            <h2>Furniture</h2>
          </div>
        </Col>
        <Col lg={6}>
          <Row>
            <Col md={6} className="small-card" onClick={() => handleCategoryClick("groceries")}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9y3QnpsbxkBdUIA1eu_oKCpfes7aCInIBog&s" alt="Groceries" />
              <div className="overlayNew">
                <h3 >Groceries</h3>
              </div>
            </Col>
            <Col md={6} className="small-card" onClick={() => handleCategoryClick("beauty")}>
              <img src="https://img.freepik.com/free-photo/girl-after-shower-put-concealer-eyes-portrait-beautiful-woman-white-wall_197531-13927.jpg?semt=ais_hybrid" alt="Beauty" />
              <div className="overlayNew">
                <h3>Beauty</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="small-card" style={{ marginTop: "15px" }} onClick={() => handleCategoryClick("fragrances")}>
              <img src="https://img.freepik.com/free-photo/front-view-expensive-perfume-as-present-dark-table_140725-148378.jpg" alt="Fragrance" />
              <div className="overlayNew">
                <h3 >Fragrance</h3>
                <p style={{color:"white"}}>On All Orders Above $299</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionB;
