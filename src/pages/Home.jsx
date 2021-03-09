import React, { useRef } from "react";
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
import reportWebVitals from "../reportWebVitals";
import jury from "../temp/jury.png";
import magic from "../temp/magic.svg";
import tswemake from "../temp/ts_wemake.png";
import tstr from "../temp/tstr.png";
import tsmss from "../temp/tsmss.png";
import mainlogo from "../mainlogo.png";
import mainlogo2 from "../temp/mainlogo2.png";
import cover from "../temp/00114.png";
import bullet from "../temp/bullet.svg";
import prize from "../temp/prize_bg2.png";
import prizeIcon from "../temp/prizes_icon.svg";

const Home = () => {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <Cover2 />

      <About />
      {/* <Button onClick={executeScroll}></Button> */}
      <WeMake />

      <TataStruct />

      <NotionsOfIndia />
      <CompetitionBrief />
      {/* <Participate />
      <CompetitionSchedule /> */}
      {/* <div ref={myRef}>Element to scroll to</div> */}

      {/* 


<CompetitionSchedule /> */}
    </div>
  );
};
const Cover2 = () => {
  return (
    <div className='maindiv'>
      <div className='container2'>
        <div className='cuscont2'>
          <img src={cover} alt='Snow'></img>
        </div>
        <div className='box2'>
          <div className='coverbox2'>
            <div style={{ float: "left", display: "grid" }}>
              <img id='tsslogo' src={tsmss} />
              <img id='sublogo' src={mainlogo} />
              <div id='buttondivbox'>
                <Button id='CustomButtonBox'>Read the Brief</Button>

                <Button id='CustomButtonBox'> Register Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cover = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className='coverDiv'>
          <img id='coverimg' src={cover} alt='Snow'></img>
        </div>
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            display: "grid",
          }}
        >
          <div style={{ float: "left" }}>
            <img id='tsslogo' src={tsmss} />
          </div>
          <div style={{ float: "left" }}>
            <img id='sublogo' height='140px' src={mainlogo} />
          </div>
          <div id='buttondivbox'>
            <Button id='CustomButtonBox'>Read the Brief</Button>

            <Button id='CustomButtonBox'> Register Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className='sect'>
      <div className='sectchild'>
        <div style={{ marginTop: "10px" }}>
          <h3 style={{ color: "#00124D" }}>ABOUT </h3>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ background: "white", height: "1px", width: "48%" }}
          ></div>
          <div
            style={{ background: "orange", height: "3px", width: "7%" }}
          ></div>
          <div
            style={{ background: "#707070", height: "1px", width: "45%" }}
          ></div>
        </div>
        <div style={{ margin: "50px" }}>
          <i>
            <h4>
              "Every nation has a message to deliver, a mission to fulfil, a
              destiny to reach."
            </h4>
          </i>
          <br />
          <i style={{ fontSize: "0.6rem" }}>- Swami Vivkeananda</i>
        </div>
      </div>
    </div>
  );
};

const WeMake = () => {
  return (
    <div className='maindivmake'>
      <div className='container2'>
        <div className='box'></div>
        <div className='box2make'>
          <div className='box2child'>
            <img id='tswlogo' src={tswemake}></img>
            <br />
            <br />
            <p id='para'>
              Tata Steel is one of the leading steel manufacturing companies of
              India. The world of Tata Steel is one without boundaries -
              growing, changing and challenging, a world that embraces different
              skills, continuous innovation, sustainable growth and a better
              quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TataStruct = () => {
  return (
    <div className='sect'>
      <div className='sectchild'>
        <div id='twoflex'>
          <div id='twoflex1'>
            <div>
              <h5 style={{ color: "#0093CC" }}>
                <b>TATA STRUCTURA</b>
              </h5>
              <p>
                Tata Steel Tubes Strategic Business Unit manufactures structural
                tubes under the brand name of Tata Structura. Besides bearing
                the trust and value of the Tata Steel brand name, Tata Structura
                Steel Hollow sections are advantageous from a techno-economic
                perspective.
              </p>
            </div>
          </div>
          <div id='twoflex2'>
            <img width='300px' src={tstr} style={{ padding: "10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const NotionsOfIndia = () => {
  return (
    <div className='maindivnoi'>
      <div className='container2noi'>
        <div className='boxnoi'></div>
        <div className='box2noi2'>
          <div className='box2childnoi'>
            <br />
            <br />
            <img id='tswlogo2' src={mainlogo2} />
            <br></br>
            <br></br>
            <p>
              Notions of India is a design competition to create an outdoor
              symbol/structure preferably using steel hollow sections along with
              other materials. The sculpture must signify the vision and journey
              of the nation into the future. The sculpture’s external dimensions
              must be within the dimensional limits of 6 x 6 x 6 meters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  //     <div style={{
  //     width: "100%",
  //     height: "auto" }}>
  //         <img src={mainlogo}/>
  //         <p style={{fontSize:"0.7rem",margin:"40px"}}>Notions of India is a design competition to create an outdoor symbol/structure preferably using steel hollow <br/>sections along with other materials. The sculpture must signify the vision and journey of the nation into the future.<br/> The sculpture’s external dimensions must be within the dimensional limits of 6 x 6 x 6 meters.
  // </p>
  //     </div>
};

const CompetitionBrief = () => {
  return (
    <div className='sectcomp' style={{ background: "" }}>
      <div className='sectchild'>
        <div style={{ marginTop: "10px" }}>
          <h3 style={{ color: "#00124D" }}>COMPETITION BRIEF </h3>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ background: "#707070", height: "1px", width: "55%" }}
          ></div>
          <div
            style={{ background: "orange", height: "3px", width: "5%" }}
          ></div>

          <div
            style={{ background: "white", height: "1px", width: "40%" }}
          ></div>
        </div>
        <div style={{ margin: "40px" }}>
          <p>
            {" "}
            Over the past 15 years, India has undergone a rapid metamorphosis.
            The country has never in the recent past posed a younger outlook
            with such heightened aspirations. Today, it not only stands amongst
            the top 5 global economies but also is an important force in global
            and regional politics. Over the past 15 years, India has undergone a
            rapid metamorphosis. The country has never in the recent past posed
            a younger outlook with such heightened aspirations. Today, it not
            only stands amongst the top 5 global economies but also is an
            important force in global and regional politics. What is a nation
            but its people? India has a young populace - every third person in
            an Indian city today is a youth. The median individual in India or
            nearly 64 per cent of its population is in the working age group,
            making it the youngest country in the world.
          </p>
        </div>
        <div>
          <Button id='orangeButton'>
            <b>Read More</b>
          </Button>
        </div>
      </div>
    </div>
  );
  //     <div>
  //          <div style={{marginTop:"40px"}}>
  //         <h3  style={{color:"#00124D"}}>COMPETITION BRIEF </h3>
  //         </div>
  //         <div style={{display:"flex"}}>
  //         <div style={{background:"#707070",height:"1px",width:"55%"}}></div>
  //         <div style={{background:"orange",height:"3px",width:"5%"}}>.</div>
  //         <div style={{background:"white",height:"1px",width:"40%"}}>.</div>

  //         </div>

  //         <div>
  //         Over the past 15 years, India has undergone a rapid metamorphosis. The country has never in the recent past posed a younger outlook with such heightened aspirations. Today, it not only stands amongst the top 5 global economies but also is an important force in global and regional politics.

  // <div style={{display:"flex"}}>
  // <div style={{width:"1px",background:"organge"}}></div>
  // <p>We Believe that the solution is design.</p>
  // </div>
  // <p>  Over the past 15 years, India has undergone a rapid metamorphosis. The country has never in the recent past posed a younger outlook with such heightened aspirations. Today, it not only stands amongst the top 5 global economies but also is an important force in global and regional politics.</p>
  //         </div>
  //     </div>
};

const Participate = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "80px" }}>
          <h3 style={{ color: "#00124D" }}>Participate </h3>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ background: "white", height: "1px", width: "40%" }}
          ></div>

          <div
            style={{ background: "orange", height: "3px", width: "5%" }}
          ></div>
          <div
            style={{ background: "#707070", height: "1px", width: "55%" }}
          ></div>
        </div>
        <div
          style={{
            flexWrap: "wrap",
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ParticipateCard />
          <ParticipateCard />
          <ParticipateCard />
        </div>
      </div>
    </div>
  );

  // return<div>
  //      <div style={{marginTop:"40px"}}>
  //     <h3  style={{color:"#00124D"}}>Participate </h3>
  //     </div>
  //     <div style={{display:"flex"}}>
  //     <div style={{background:"white",height:"1px",width:"40%"}}>.</div>
  //     <div style={{background:"orange",height:"3px",width:"5%"}}>.</div>
  //     <div style={{background:"#707070",height:"1px",width:"55%"}}></div>
  //     </div>
  //     <div style={{display:"flex",flex:"wrap",justifyContent:"space-around",marginTop:"50px",marginBottom:"50px"}}>
  //         <ParticipateCard />
  //         <ParticipateCard />
  //         <ParticipateCard />
  //     </div>
  // </div>
};

const ParticipateCard = () => {
  return (
    <Card
      style={{
        width: "250px",
        padding: "20px",
        boxShadow: "10px",
        margin: "auto",
        marginBottom: "10px",
      }}
    >
      <img
        width='100%'
        height='100px'
        src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTdFQ0VEOyIgZD0iTTE4LjYxMyw0MS41NTJsLTcuOTA3LDQuMzEzYy0wLjQ2NCwwLjI1My0wLjg4MSwwLjU2NC0xLjI2OSwwLjkwM0MxNC4wNDcsNTAuNjU1LDE5Ljk5OCw1MywyNi41LDUzDQoJYzYuNDU0LDAsMTIuMzY3LTIuMzEsMTYuOTY0LTYuMTQ0Yy0wLjQyNC0wLjM1OC0wLjg4NC0wLjY4LTEuMzk0LTAuOTM0bC04LjQ2Ny00LjIzM2MtMS4wOTQtMC41NDctMS43ODUtMS42NjUtMS43ODUtMi44ODh2LTMuMzIyDQoJYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2DQoJYzAtMC43OC0wLjM0Ny0xLjQ3Ny0wLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLDEuMDUzLTcuOTc3LTkuNzUtNy45NzdzLTkuNzUsNy45NzctOS43NSw3Ljk3N3Y1LjEyNg0KCWMtMC41NCwwLjQ4OC0wLjg4NiwxLjE4NS0wLjg4NiwxLjk2NXYzLjU0NmMwLDAuOTM0LDAuNDkxLDEuNzU2LDEuMjI2LDIuMjMxYzAuODg2LDMuODU3LDMuMjA2LDYuNjMzLDMuMjA2LDYuNjMzdjMuMjQNCglDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNMjYuOTUzLDAuMDA0QzEyLjMyLTAuMjQ2LDAuMjU0LDExLjQxNCwwLjAwNCwyNi4wNDdDLTAuMTM4LDM0LjM0NCwzLjU2LDQxLjgwMSw5LjQ0OCw0Ni43Ng0KCQljMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzDQoJCWMtMC43MzQtMC40NzUtMS4yMjYtMS4yOTYtMS4yMjYtMi4yMzF2LTMuNTQ2YzAtMC43OCwwLjM0Ny0xLjQ3NywwLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLTEuMDUzLTcuOTc3LDkuNzUtNy45NzcNCgkJczkuNzUsNy45NzcsOS43NSw3Ljk3N3Y1LjEyNmMwLjU0LDAuNDg4LDAuODg2LDEuMTg1LDAuODg2LDEuOTY1djMuNTQ2YzAsMS4xOTItMC44LDIuMTk1LTEuODg2LDIuNTMNCgkJYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMNCgkJYzAuNTA4LDAuMjU0LDAuOTY3LDAuNTc1LDEuMzksMC45MzJjNS43MS00Ljc2Miw5LjM5OS0xMS44ODIsOS41MzYtMTkuOUM1My4yNDYsMTIuMzIsNDEuNTg3LDAuMjU0LDI2Ljk1MywwLjAwNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
      />
      <Card.Title>
        Eligibility <br />
        Criteria{" "}
      </Card.Title>
      <Card.Body style={{ fontSize: "0.8rem" }}>
        The base condition that have to be fulfiled by participants to take part
        in the competition.
        <br />
        <br />
        <Button id='orangeButton'>
          <b>Read More</b>
        </Button>
      </Card.Body>
    </Card>
  );
};

const CompetitionSchedule = () => {
  var data = [
    { date: "", data: "o" },
    { date: "", data: "o" },
    { date: "", data: "o" },
    { date: "", data: "o" },
    { date: "", data: "o" },
    { date: "", data: "a" },
  ];
  return (
    <div className='cuscont'>
      <img
        className='basebgimg'
        src={prize}
        alt='Snow'
        style={{ width: "100%" }}
      />
      <div className='cuscent2'>
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "#00CCF8" }}>COMPETITION SCHEDULE </h3>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ background: "transparent", height: "1px", width: "40%" }}
          >
            .
          </div>
          <div style={{ background: "orange", height: "3px", width: "5%" }}>
            .
          </div>
          <div
            style={{ background: "#707070", height: "1px", width: "55%" }}
          ></div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <table
            style={{
              margin: "auto",
              padding: "10px",
              background: "transparent",
            }}
          >
            <CustomTableRow data={data} />
          </table>
        </div>
      </div>
    </div>
    // <div style={{ background: "#08254F" }}>
    //   <div style={{ marginTop: "80px" }}>
    //     <h3 style={{ color: "#00124D" }}>COMPETITION SCHEDULE </h3>
    //   </div>
    //   <div style={{ display: "flex" }}>
    //     <div style={{ background: "transparent", height: "1px", width: "40%" }}>
    //       .
    //     </div>
    //     <div style={{ background: "orange", height: "3px", width: "5%" }}>
    //       .
    //     </div>
    //     <div
    //       style={{ background: "#707070", height: "1px", width: "55%" }}
    //     ></div>
    //   </div>
    //   <div style={{ marginTop: "10px" }}>
    //     <table
    //       style={{ margin: "auto", padding: "10px", background: "transparent" }}
    //     >
    //       <CustomTableRow data={data} />
    //     </table>

    //   </div>
    // </div>
  );
};

const CustomTableRow = ({ data }) => {
  var colors = ["orange", "white"];
  return (
    <>
      {data.map((item, index) => (
        <Singlerow item={item} color={colors[index % colors.length]} />
      ))}
    </>
  );
};

const Singlerow = ({ item, color }) => {
  var colors = ["#F77A19", "#FFFFFF"];

  return (
    <>
      {" "}
      {color === "white" ? (
        <tr id='schtr' style={{ background: "transparent" }}>
          <td id='schtd' style={{ background: "transparent" }}>
            <img src={bullet} />
          </td>
          <td style={{ color: "#FFFFFF", background: "transparent" }}>
            March 3,2021
          </td>
          <td style={{ color: "#FFFFFF", background: "transparent" }}>
            Competition Announcement
          </td>
        </tr>
      ) : (
        <tr id='schtr'>
          <td id='schtd' style={{ background: "black" }}>
            <img src={bullet} />
          </td>
          <td style={{ color: "#F77A19", background: "black" }}>
            March 3,2021
          </td>
          <td style={{ color: "#F77A19", background: "black" }}>
            Competition Announcement
          </td>
        </tr>
      )}
    </>
  );
};
export default Home;
