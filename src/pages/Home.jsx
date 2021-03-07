import React from 'react';
import {Jumbotron,Nav,NavDropdown,Navbar,Form,FormControl,Button, Table,Card,Container} from "react-bootstrap"
import jury from "../temp/jury.png"
import magic from "../temp/magic.svg"

const Home = ()=>{
    return <div>
        <div style={{  position: "relative"}}>
    <img style= {{ width: "100%",
  height: "auto"}}src="https://www.apple.com/v/apple-events/home/n/images/overview/meta/og__fodnljjkwl6y.png?202102011354" alt="Snow"></img>
  <Button style={{position: "absolute",
top: "50%",
left:" 50%",
transform: "translate(-50%, -50%)",
//-ms-transform: translate(-50%, -50%);
// background-color: #555;
// color: white;
// font-size: 16px;
// padding: 12px 24px;
// border: none;
// cursor: pointer;
// borderRadius: 5px
}} class="btn">Button</Button>
  </div>

  <img src={magic}/>

  {/* <div>
  <img class="clip-me" src="https://www.apple.com/v/apple-events/home/n/images/overview/meta/og__fodnljjkwl6y.png?202102011354" alt="Snow"></img>

<p class="clip-me">
  I'll be clipped.
</p>
  </div>
  

*/}
    </div> 
}

export default  Home;