import React from "react";
import { Form, Container, Col, Button } from "react-bootstrap";
import noilogo from "../temp/mainlogo2.png";
import tslogo from "../temp/tscolor.png";
const Registeration = () => {
  return (
    <div className='maindivregister'>
      <table>
        <tr id='registerrowitem'>
          <td id='registerlabel'>
            <Form.Label lg={2}>First Name</Form.Label>
          </td>
          <td id='registerip'>
            <Form.Control type='text' placeholder='' />
          </td>
        </tr>
        <br />
        <tr id='registerrowitem'>
          <td id='registerlabel'>
            <Form.Label lg={2}>Last Name</Form.Label>
          </td>
          <td id='registerip'>
            <Form.Control type='text' placeholder='' />
          </td>
        </tr>
        <br />
        <tr id='registerrowitem'>
          <td id='registerlabel'>
            <Form.Label lg={2}>Email Address</Form.Label>
          </td>
          <td id='registerip'>
            <Form.Control type='text' placeholder='' />
          </td>
        </tr>
        <br />
        <tr id='registerrowitem'>
          <td id='registerlabel'>
            <Form.Label lg={2}>Phone</Form.Label>
          </td>
          <td id='registerip'>
            <Form.Control type='text' placeholder='' />
          </td>
        </tr>
        <br />
        <tr id='registerrowitem'>
          <td id='registerlabel'>
            <Form.Label lg={0}>
              Architect/Engineer/Others
              <br />
              please specify*
            </Form.Label>
          </td>
          <td id='registerip'>
            <Form.Control type='text' placeholder='' />
          </td>
        </tr>
        <br />
        <tr id='registerrowitem' align='center'>
          <td id='registerlabelbut'></td>
          <td
            id='registerip'
            style={{ verticalAlign: "middle", textAlign: "center" }}
          >
            <Button id='CustomButtonBoxSubmit'> Submit</Button>
          </td>
        </tr>
      </table>

      <div id='registerinfo'>
        <h5>
          <i>For any queries about the competition.</i>
          <br />
          <br />
          <br />
          Email: info@notionsofindia.com
          <p></p>
          Phone: +91 99208 08720 | +91 98204 90618
        </h5>
        <img id='tslogoregister' src={tslogo}></img>
        <br />
        <img id='noilogoregister' src={noilogo}></img>

        <h5>Submissions Open from 3-Mar-2021 to 31-May-2021. </h5>
        <div id='buttonpair'>
          {" "}
          <Button id='clickButton'>Read the Brief</Button>{" "}
          <Button id='clickButton'>Register Now</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Registeration;
