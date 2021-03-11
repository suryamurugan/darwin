import React, { useState } from "react";
import { Form, Container, Col, Button, Spinner, Alert } from "react-bootstrap";
import noilogo from "../temp/mainlogo2.png";
import tslogo from "../temp/tscolor.png";
import API from "../API";
const Registeration = () => {
  const [register, setRegister] = useState();
  const [loading, setloading] = useState(false);
  const [spinner, setspinner] = useState(true);

  const [first_name, setfirstname] = useState("");
  const [last_name, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [extra, setextra] = useState("");

  var url = "http://127.0.0.1:5000/register";
  const registerAPI = () => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 10000);
    var data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      extra: extra,
    };
    API.post(url, data)
      .then((response) => {
        setspinner(false);
        var res = response.data;
        if (res.register_status == 1) {
          setRegister(true);
          setTimeout(() => {
            setloading(false);
          }, 3000);
        }
      })
      .catch((err) => {
        setspinner(false);
        console.log(err);
        setRegister(false);
        setTimeout(() => {
          setloading(false);
        }, 3000);
      });
    setspinner(false);
  };
  return (
    <div className='maindivregister'>
      {loading ? (
        <div className='messenger'>
          {spinner ? (
            <>
              <Spinner id='spinr' animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
              <br />
              Registering ...
            </>
          ) : (
            <>
              {register == true ? (
                <Alert id='alertr' variant='success'>
                  Registered
                </Alert>
              ) : (
                <>
                  {register == false ? (
                    <Alert id='alertr' variant='danger'>
                      Try Again Later
                    </Alert>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
      ) : (
        <>
          <table>
            <tr id='registerrowitem'>
              <td id='registerlabel'>
                <Form.Label lg={2}>First Name</Form.Label>
              </td>
              <td id='registerip'>
                <Form.Control
                  type='text'
                  onChange={(e) => setfirstname(e.target.value)}
                  placeholder=''
                />
              </td>
            </tr>
            <br />
            <tr id='registerrowitem'>
              <td id='registerlabel'>
                <Form.Label lg={2}>Last Name</Form.Label>
              </td>
              <td id='registerip'>
                <Form.Control
                  type='text'
                  onChange={(e) => setlastname(e.target.value)}
                  placeholder=''
                />
              </td>
            </tr>
            <br />
            <tr id='registerrowitem'>
              <td id='registerlabel'>
                <Form.Label lg={2}>Email Address</Form.Label>
              </td>
              <td id='registerip'>
                <Form.Control
                  type='text'
                  onChange={(e) => setemail(e.target.value)}
                  placeholder=''
                />
              </td>
            </tr>
            <br />
            <tr id='registerrowitem'>
              <td id='registerlabel'>
                <Form.Label lg={2}>Phone</Form.Label>
              </td>
              <td id='registerip'>
                <Form.Control
                  type='text'
                  onChange={(e) => setphone(e.target.value)}
                  placeholder=''
                />
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
                <Form.Control
                  type='text'
                  onChange={(e) => setextra(e.target.value)}
                  placeholder=''
                />
              </td>
            </tr>
            <br />
            <tr id='registerrowitem' align='center'>
              <td id='registerlabelbut'></td>
              <td
                id='registerip'
                style={{ verticalAlign: "middle", textAlign: "center" }}
              >
                <Button id='CustomButtonBoxSubmit' onClick={registerAPI}>
                  {" "}
                  Submit
                </Button>
              </td>
            </tr>
          </table>
        </>
      )}

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
