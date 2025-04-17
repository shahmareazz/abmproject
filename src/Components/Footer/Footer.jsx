import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; 
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-brand">
            <img src={logo} style={{width:"100px"}} alt="" />
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo, provident neque consequuntur cupiditate vel.</p>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Registration</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>


        <Row className="mt-3">
          <Col className="text-center">
            <p style={{color:"white"}}>&copy; {new Date().getFullYear()} Abm. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
