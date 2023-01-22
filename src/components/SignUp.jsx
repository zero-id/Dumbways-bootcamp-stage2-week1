import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function SignUp(props) {
  const [userSignUp, setUserSignUp] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    listAs: "",
    gendre: "",
    address: "",
  });

  const redirectSignin = (e) => {
    props.onHide();
    props.openSignin();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserSignUp", JSON.stringify(userSignUp));
    redirectSignin();
  };

  const handleOnChange = (e) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body
        style={{
          height: "600px",
          overflow: "hidden",
        }}
      >
        <h1 className="fw-bold text-center my-5">Sign Up</h1>
        <Form
          onSubmit={handleOnSubmit}
          style={{
            height: "420px",
            overflow: "auto",
          }}
        >
          <Form.Group className="mb-3" controlId="fullName" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Full Name</Form.Label>
            <Form.Control type="text" placeholder="" name="fullName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userName" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control type="text" placeholder="" name="userName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone" onChange={handleOnChange}>
            <Form.Label className="fw-bold">phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" name="phone" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="useAs" onChange={handleOnChange}>
            <Form.Label className="fw-bold">List As</Form.Label>
            <Form.Select name="listAs" aria-label="Default select example">
              <option>~Select~</option>
              <option value="Tenant">Tenant</option>
              <option value="Owner">Owner</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="gendre" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Gendre</Form.Label>
            <Form.Select name="gendre" aria-label="Default select example">
              <option>~Select~</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="alamat" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control className="rs" as="textarea" name="address" style={{ height: "100px" }} />
          </Form.Group>

          <Button onClick={(e) => redirectSignin(e)} className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
