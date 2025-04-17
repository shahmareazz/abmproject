import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db  } from "./Firebase";
import { setDoc, doc } from "firebase/firestore"; 
import { Link } from "react-router-dom";
const Registration = () => {

  const [u, setU] = useState({
    fname: "",
    lname:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
// const registernotify = () => toast("Registration  Completed!!");
  const handleChange = (e) => {
    setU({ ...u, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 try{
  await createUserWithEmailAndPassword(auth ,u.email , u.password);
  const user =auth.currentUser;
  console.log(user);
  if(user){
    await setDoc (doc(db,"Users",user.uid),{
      email:user.email,
      firstname:u.fname,
      lastname:u.lname
    });
  }
  console.log("User Registered Successfully!!!"); 
  toast.success("Registration Completed!",{position:"top-center"});

 } catch (error) {
console.log(error.message); 
toast.error(error.message,{position:"bottom-center"});
 }
   
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
    <Card className="p-4 shadow" style={{ width: "750px" }}>
      <Card.Body>
    
      <h2 className="text-center" style={{fontWeight:"bold"}}>REGISTER</h2>
      <Form onSubmit={handleSubmit} style={{border:"#5D4037"}} className="p-4 border rounded shadow-sm">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="fname"
            value={u.fname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your  last name"
            name="lname"
            value={u.lname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={u.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={u.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={u.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button style={{backgroundColor:"#778899", border:"#778899"}} type="submit" className="w-100">
          Register
        </Button>
      </Form>
      <p className="text-center mt-3">
          Already registered? <Link className="list" style={{color:"#778899"}} to={"/login"}>
             login 
            </Link>
          </p>
   
    </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default Registration;



















