import { Container, Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home">Homework</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
