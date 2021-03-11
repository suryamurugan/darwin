import {
  Jumbotron,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
  Table,
  Card,
  Container,
} from "react-bootstrap";
import logo from "../logo.png";

import tsteel from "../temp/tatasteelblack.svg"
import tstruct from "../temp/tatastruct.svg"
import history from "../history"

const CustomNav = () => {
  return (<div className="twonav">
  
  <div className="navparttwo">
    

<img  id="navimgpart1"src={tsteel}/>
<img id="navimgpart2"  src={tstruct}/>

    </div>
    <Navbar
      id='custnav'
      bg='transparent'
      expand='lg'
      style={{ paddingLeft: "100px" }}
      //fixed='top'
    >
      {/* // <Navbar className='navbar sticky-top navbar-light bg-light'> */}
      <Navbar.Brand href='/'>
        {/* <img
          alt=''
          src={logo}
          width='150'
          height='75'
          // style={{marginTop: "-500px"}}
          className='d-inline-block align-top'
        />{" "} */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'></Nav>

        <Nav.Link
          style={{ color: "#707070" }}
          activeClassName='active'
          href='/'
        >
          About
        </Nav.Link>
        <Nav.Link
          style={{ color: "#707070" }}
          activeClassName='active'
          href='/brief'
        >
          Brief
        </Nav.Link>
        <Nav.Link
          style={{ color: "#707070" }}
          activeClassName='active'
          href='/participate'
        >
          To Participate
        </Nav.Link>
        <Nav.Link
          style={{ color: "#707070" }}
          activeClassName='active'
          href='/jury'
        >
          Jury
        </Nav.Link>
        <Nav.Link
          style={{ color: "#707070" }}
          activeClassName='active'
          href='/participate'
        >
          Schedule
        </Nav.Link>
        <Nav.Link
          style={{ color: "#707070" }}
          activeClassName='active'
          href='/prize'
        >
          Prizes
        </Nav.Link>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}>|</div>
        <Button id='CustomButtonBoxRegister' onClick={e=>window.open("/register",'_self')}>Register Now </Button>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">To Participate</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">Jury</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Schedule</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown> */}
      </Navbar.Collapse>
      {/* </nav> */}
      
    </Navbar>
    
    
    </div>
  );
};

export default CustomNav;
