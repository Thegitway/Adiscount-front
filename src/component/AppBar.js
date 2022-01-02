import { Navbar,Container,Col,Row,Form,Dropdown } from "react-bootstrap";
import {useEffect,useState} from 'react'
export default function AppBar()
{ const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
   
  return(
    <Navbar style={{"backgroundColor":"#293847"}}>
    
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/Adiscount-logo.png"
          width={width/6}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Container >
      
      <Col md={8}>
      <Form.Control  placeholder="Qu'est ce qui vous ferait plaisir ?" />
      </Col>
      <Col md={3}>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Col>
      
      </Container>
   
  </Navbar> 
  );
}