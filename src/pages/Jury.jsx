import React from "react";
import { Container, Jumbotron, Card } from "react-bootstrap";
import data from "../data.json";
import bullet from "../temp/bullet.svg";
import jury from "../temp/jury.png";
import technical from "../temp/technical_jury.svg";
import master from "../temp/master_jury.svg";
import grand from "../temp/grand_jury.svg";

import prize from "../temp/prize_bg2.png";
import prizeIcon from "../temp/jury_icon.svg";
const Jury = () => {
  return (
    <div>
      <div className='cuscont'>
        <img
          className='coverbgimg'
          src={prize}
          alt='Snow'
          style={{ width: "100%" }}
        />
        <div className='bottom-left'>Bottom Left</div>
        <div className='top-left'>Top Left</div>
        <div className='top-right'>Top Right</div>
        <div className='bottom-right'>Bottom Right</div>
        <div className='cuscent'>
          <img id='przicon' src={prizeIcon} alt='Snow' />
          <br />
          <br />
          <h4 id='prziconquote'>
            {" "}
            "Every nation has a message to deliver, a mission to fulfil, a
            destiny to reach.
          </h4>

          <i id='prziconquotelast'>-Swami Vivkeananda</i>
        </div>
      </div>
      <JuryProcess
      //style={{ marginTop: "40px", marginBottom: "40px" }}
      />
      <Jurors />
    </div>
  );
};

const JuryBanner = () => {
  return (
    <div height='100px'>
      <img height='400px' width='100%' src={jury}></img>
    </div>
  );
};

const JuryProcess = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#00124D" }}>JURY PROCESS </h3>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ background: "white", height: "1px", width: "40%" }}>
          .
        </div>
        <div style={{ background: "orange", height: "3px", width: "5%" }}>
          .
        </div>
        <div
          style={{ background: "#707070", height: "1px", width: "55%" }}
        ></div>
      </div>
      <div>
        <Pipeline />
        <BulletItems />
      </div>
    </div>
  );
};

const BulletItems = () => {
  return (
    <div
      id='bulletItems'
      //style={{ width: "70%", margin: "auto" }}
    >
      <tr>
        <td>
          <img src={bullet} />
        </td>
        <td>
          The entries will go through a three sets of jury panels:
          <br></br>
          <ol>
            <li>{"    "} Technical Jury </li>
            <li>{"    "} Master Jury </li>
            <li>{"    "} Grand Jury</li>
          </ol>
        </td>
      </tr>
      <br />
      <tr>
        <td>
          <img src={bullet} />
        </td>
        <td>
          The Technical Jury members will vet all submissions for incomplete
          submissions, non-adherence to technical requirements and non-adherence
          to competition parameters.
        </td>
      </tr>
      <br />
      <tr>
        <td>
          <img src={bullet} />
        </td>
        <td>
          The overall endeavour will be to find one national winner and nine
          runners-up (at the discretion of the jury based on the submissions
          received).
        </td>
      </tr>
      <br />
      <tr>
        <td>
          <img src={bullet} />
        </td>
        <td>Prizes will be announced and distributed at the award ceremony.</td>
      </tr>
      <br />
      <tr>
        <td>
          <img src={bullet} />
        </td>
        <td>
          The competition will also endeavour to replicate the winning entries
          in major cities across the country.
        </td>
      </tr>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const Pipeline = () => {
  return (
    <div
      style={{
        display: "inline",
        flexWrap: "wrap",
        padding: "50px",
        flexDirection: "column",
      }}
    >
      <img id='processItem' src={technical} />
      <img id='processItem' src={master} />
      <img id='processItem' src={grand} />
    </div>
  );
};
const Jurors = () => {
  return (
    <div style={{ background: "#ececec" }}>
      <br />
      <br />
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>JURORS </h3>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ background: "#707070", height: "1px", width: "48%" }}
        ></div>
        <div style={{ background: "orange", height: "3px", width: "5%" }}></div>
        <div
          style={{ background: "#ececec", height: "1px", width: "45%" }}
        ></div>
      </div>

      <div
        // style={{
        //   display: "inline-flex",
        //   flexWrap: "wrap",
        //   padding: "5px",
        //   flexDirection: "row",
        // }}
        style={{
          flexWrap: "wrap",
          marginTop: "50px",
          paddingBottom: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SingleJuror />
        <SingleJuror />
        <SingleJuror />
      </div>
    </div>
  );
};

const SingleJuror = () => {
  return (
    <Card
      style={{
        width: "250px",
        padding: "20px",
        boxShadow: "10px",
        margin: "auto",
        marginBottom: "10px",
        background: "#ececec",
      }}
    >
      <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTdFQ0VEOyIgZD0iTTE4LjYxMyw0MS41NTJsLTcuOTA3LDQuMzEzYy0wLjQ2NCwwLjI1My0wLjg4MSwwLjU2NC0xLjI2OSwwLjkwM0MxNC4wNDcsNTAuNjU1LDE5Ljk5OCw1MywyNi41LDUzDQoJYzYuNDU0LDAsMTIuMzY3LTIuMzEsMTYuOTY0LTYuMTQ0Yy0wLjQyNC0wLjM1OC0wLjg4NC0wLjY4LTEuMzk0LTAuOTM0bC04LjQ2Ny00LjIzM2MtMS4wOTQtMC41NDctMS43ODUtMS42NjUtMS43ODUtMi44ODh2LTMuMzIyDQoJYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2DQoJYzAtMC43OC0wLjM0Ny0xLjQ3Ny0wLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLDEuMDUzLTcuOTc3LTkuNzUtNy45NzdzLTkuNzUsNy45NzctOS43NSw3Ljk3N3Y1LjEyNg0KCWMtMC41NCwwLjQ4OC0wLjg4NiwxLjE4NS0wLjg4NiwxLjk2NXYzLjU0NmMwLDAuOTM0LDAuNDkxLDEuNzU2LDEuMjI2LDIuMjMxYzAuODg2LDMuODU3LDMuMjA2LDYuNjMzLDMuMjA2LDYuNjMzdjMuMjQNCglDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNMjYuOTUzLDAuMDA0QzEyLjMyLTAuMjQ2LDAuMjU0LDExLjQxNCwwLjAwNCwyNi4wNDdDLTAuMTM4LDM0LjM0NCwzLjU2LDQxLjgwMSw5LjQ0OCw0Ni43Ng0KCQljMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzDQoJCWMtMC43MzQtMC40NzUtMS4yMjYtMS4yOTYtMS4yMjYtMi4yMzF2LTMuNTQ2YzAtMC43OCwwLjM0Ny0xLjQ3NywwLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLTEuMDUzLTcuOTc3LDkuNzUtNy45NzcNCgkJczkuNzUsNy45NzcsOS43NSw3Ljk3N3Y1LjEyNmMwLjU0LDAuNDg4LDAuODg2LDEuMTg1LDAuODg2LDEuOTY1djMuNTQ2YzAsMS4xOTItMC44LDIuMTk1LTEuODg2LDIuNTMNCgkJYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMNCgkJYzAuNTA4LDAuMjU0LDAuOTY3LDAuNTc1LDEuMzksMC45MzJjNS43MS00Ljc2Miw5LjM5OS0xMS44ODIsOS41MzYtMTkuOUM1My4yNDYsMTIuMzIsNDEuNTg3LDAuMjU0LDI2Ljk1MywwLjAwNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K' />
      <div style={{ textAlign: "start" }}>
        <b>Tony Stark</b>
        <p>
          <i>SomeDesignation</i>
        </p>
        <p style={{ fontSize: ".7rem" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
    </Card>
  );
};

export default Jury;
