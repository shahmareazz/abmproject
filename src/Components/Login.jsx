import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const loginnotify = () => toast("Login successfully!!");
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      await signInWithEmailAndPassword(auth ,email , password);
      console.log("User logged in Successfully!!!"); 
      window.location.href="/home";
      toast.success("Login successfully!!",{position:"top-center"});
    
     } catch (error) {
    console.log(error.message); 
    toast.error(error.message,{position:"bottom-center"});
     }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow" style={{ width: "350px" }}>
        <Card.Body>
          <h3 className="text-center mb-3" style={{fontWeight:"bold"}}>LOGIN</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button style={{backgroundColor:"#778899", border:"#778899"}} type="submit"   className="w-100">
              Submit
            </Button>
          </Form>
          <p className="text-center mt-3">
            New user?  <Link style={{color:"#778899"}} className="list" to={"/register"}>
             Register Here 
            </Link>
          </p>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default Login;













// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
// const updatenotify = () => toast("Login successfully!!");
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Remember me" />
//         </Form.Group>

//         <Button variant="primary" type="submit"  onClick={updatenotify}>
//           Login
//         </Button>
//       </Form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;