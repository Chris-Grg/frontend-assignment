import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  const [newSearch, setNewSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search-results?query=${encodeURIComponent(
      newSearch
    )}`;
    // console.log("searching: ", newSearch);
  };
  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    // console.log(newSearch);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">OnlineStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav> */}
          <Form className="d-flex ms-auto" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
