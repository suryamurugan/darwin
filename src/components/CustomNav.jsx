import {Jumbotron,Nav,NavDropdown,Navbar,Form,FormControl,Button, Table,Card,Container} from "react-bootstrap"
import logo from "../logo.png";
const CustomNav = ()=>{
    return(<Navbar bg="white" expand="lg" style={{paddingLeft:"100px"}}>
     
    <Navbar.Brand href="/">
         <img
           alt=""
           src={logo}
           width="150"
           height="75"
           className="d-inline-block align-top"
         />{' '}
       
       </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto"></Nav>
       
       
         <Nav.Link style={{color:"#707070"}} activeClassName="active" href="/">About</Nav.Link>
         <Nav.Link style={{color:"#707070"}} activeClassName="active" href="/brief">brief</Nav.Link>
         <Nav.Link style={{color:"#707070"}} activeClassName="active"href="#link">To Participate</Nav.Link>
         <Nav.Link  style={{color:"#707070"}} activeClassName="active"href="/jury">Jury</Nav.Link>
         <Nav.Link  style={{color:"#707070"}}activeClassName="active"  href="#link">Schedule</Nav.Link>
         <Nav.Link  style={{color:"#707070"}} activeClassName="active" href="/prize">Prizes</Nav.Link>
         <div style={{marginRight:"20px",marginLeft:"20px"}}>
           |
         </div>
         <Button style={{background:"#0093CC",borderRadius:"0px", paddingLeft:"30px",paddingRight:"30px"}} >Register Now </Button>
         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">To Participate</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">Jury</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Schedule</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown> */}
       
       
      </Navbar.Collapse> 
   </Navbar>)
  }

  
  export default CustomNav