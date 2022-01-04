import { Navbar,Container,Image,Col,InputGroup,Button,Row,Form,Dropdown } from "react-bootstrap";
import {useEffect,useState} from 'react'
export default function AppBar()
{ const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
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
      <Col xs={7}>
      <InputGroup>
      <Form.Control placeholder="Qu'est ce qui vous ferait plaisir ?"/>
      </InputGroup>
      </Col>
      <Col xs={1}>
      </Col>
      <Col xs={3}>
      <Navbar.Collapse id="basic-navbar-nav">
      <Dropdown>
  <Dropdown.Toggle style={{"borderColor":"#293847","backgroundColor":"#293847",}} id="dropdown-basic">
    Adiscount
  </Dropdown.Toggle>
  
  <Dropdown.Menu >
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Navbar.Collapse>
</Col>
  </Navbar> 
  );
}