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
import compImage from "../temp/compImage.png"
import comp from "../temp/comp.svg";
import fooc1 from "../temp/fooc1.svg";
import fooc2 from "../temp/fooc2.svg";
import fooc3 from "../temp/fooc3.svg";
import subg from "../temp/subg.svg";
import elecri from "../temp/elecri.svg";
import evalcri from "../temp/evalcri.svg";
import reportWebVitals from "../reportWebVitals";
import jury from "../temp/jury.png";
import magic from "../temp/magic.svg";
import tswemake from "../temp/tataSteel.png";
import tstr from "../temp/tstr.png";
import tsmss from "../temp/tsmss.png";
import mainlogo from "../mainlogo.png";
import mainlogo2 from "../temp/mainlogo2.png";
import cover from "../temp/bcimg.png";
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
      <Cards />
      <About />
      {/* <Button onClick={executeScroll}></Button> */}
      <WeMake />

      <TataStruct />

      <NotionsOfIndia />
      <CompetitionBrief />
      <Participate />
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
                {/* <Button id='CustomButtonBox'>Read the Brief</Button>

                <Button id='CustomButtonBox'> Register Now</Button> */}
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

const Cards = () => {
  return(
    <div>
      <div class="row">
  <div class="column">
    <div class="card">
    <img id='tswlogo' src={comp}></img>
      <p>Competition Brief</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img id='tswlogo' src={elecri}></img>
      <p>Eligibility Criteria</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card column-active">
    <img id='tswlogo' src={subg}></img>
      <p>Submission Guidelines</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img id='tswlogo' src={evalcri}></img>
      <p>Evaluation Criteria</p>
    </div>
  </div>
</div>

    </div>
  );
}

const About = () => {
  return (
    <div className='sect'>
      <div className='sectchild'>
        <div style={{ marginTop: "10px" }}>
          <h3 style={{ color: "#00124D", fontSize: "40px", margin: "92px 238px 5.4px", lineHeight: "0.75", letterSpacing: "0.56px", textAlign: "center", color: "#00124d" }}>ABOUT </h3>
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
          <i style={{ fontSize: "16px", lineHeight: "43px", letterSpacing: "0.22px", color: "#707070" }}>- Swami Vivkeananda</i>
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
      <div className='sectchild setSubChild'>
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
      <div className='sectnewchild'>
        <div style={{ marginTop: "10px" }}>
          <h3 style={{ color: "#00124d", fontWeight: "600", fontSize: "40px" }}>COMPETITION BRIEF </h3>
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
        <div style={{ marginLeft: "-100px", float: "left", display:"inline" }}>
        </div>
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
        <img src={compImage} style={{height: "700px", width: "600px", zIndex:"1", float: "right", display:"inline"}} />
        <div>
          <Button id='orangeButton'>
            <b>Read More</b>
          </Button>
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
        <div style={{width: "1007px",
                    height: "68px",
                    margin:"auto",
                    objectFit: "contain",
                    fontFamily: "Roboto",
                    fontSize: "40px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "0.75",
                    letterSpacing: "0.56px",
                    textAlign: "center",
                    color: "#00124d" }}>
          <h3 style={{ color: "#00124d", fontWeight: "600", fontSize: "40px", marginLeft: "-120px" }}>PARTICIPATE </h3>
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
          <ParticipateCardTwo />
          <ParticipateCardThree />
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
        width: "341px",
        height: "493px",
        padding: "30px 68px 71.4px",
        boxShadow: "6px 12px 32px 0 rgba(0, 0, 0, 0.16)",
        margin: "auto",
        marginBottom: "100px",
      }}
    >
            <img src={fooc1} />
      <Card.Title 
          style={{
            paddingTop: "1rem",
            fontWeight: "600",
            fontSize: "26px"
          }}
      >
        Eligibility <br />
        Criteria{" "}
      </Card.Title>
      <Card.Body style={{ width: "205px",
                          height: "129px",
                          margin: "28px 0",
                          objectFit: "contain",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontWeight: "normal",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "1.88",
                          letterSpacing: "0.22px",
                          textAlign: "center",
                          color: "#282828"}}>
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

const ParticipateCardTwo = () => {
  return (
    <Card
      style={{
        width: "341px",
        height: "493px",
        padding: "30px 68px 71.4px",
        boxShadow: "6px 12px 32px 0 rgba(0, 0, 0, 0.16)",
        margin: "auto",
        marginBottom: "100px",
      }}
    >
            <img src={fooc2} />

      <Card.Title 
          style={{
              paddingTop: "1rem",
              fontWeight: "600",
              fontSize: "26px"
          }}
      >
        Submission <br />
        Guidelines{" "}
      </Card.Title>
      <Card.Body style={{ width: "205px",
                          height: "129px",
                          margin: "28px 0",
                          objectFit: "contain",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontWeight: "normal",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "1.88",
                          letterSpacing: "0.22px",
                          textAlign: "center",
                          color: "#282828"}}>
      The detailed guidelines of the formats in which the entries are to be presented.
        <br />
        <br />
        <Button id='orangeButton'>
          <b>Read More</b>
        </Button>
      </Card.Body>
    </Card>
  );
}

const ParticipateCardThree = () => {
  return (
    <Card
      style={{
        width: "341px",
        height: "493px",
        padding: "30px 68px 71.4px",
        boxShadow: "6px 12px 32px 0 rgba(0, 0, 0, 0.16)",
        margin: "auto",
        marginBottom: "100px",
      }}
    >
      <img src={fooc3} />
      <Card.Title 
        style={{
          paddingTop: "1rem",
          fontWeight: "600",
          fontSize: "26px"
        }}
      >
      Evaluation <br />
      Criteria{" "}
      </Card.Title>
      <Card.Body style={{ width: "205px",
                          height: "129px",
                          margin: "28px 0",
                          objectFit: "contain",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontWeight: "normal",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "1.88",
                          letterSpacing: "0.22px",
                          textAlign: "center",
                          color: "#282828"}}>
        The factors or parameters that will be used by the jurors to assess the submitted entries.       
        <br />
        <br />
        <Button id='orangeButton'>
          <b>Read More</b>
        </Button>
      </Card.Body>
    </Card>
  );
}


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
