import React from "react";
import bullet from "../temp/bullet.svg";

//import prize from "../temp/prize.png";
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
import prize from "../temp/prize_bg2.png";
import prizeIcon from "../temp/participate_icon.svg";

const Participate = () => {
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
      <TheBackground />
      <Subbmission />
      <Evaluation />
    </div>
  );
};
const TheBackground = () => {
  return (
    <div style={{ background: "#ececec" }}>
      <div style={{ paddingTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>ELIGIBILITY CRITERIA </h3>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ background: "#ececec", height: "1px", width: "40%" }}
        ></div>
        <div style={{ background: "orange", height: "3px", width: "5%" }}></div>
        <div
          style={{ background: "#707070", height: "1px", width: "55%" }}
        ></div>
      </div>
      <br />
      <br />
      <div
        id='bulletItems'
        style={{ width: "70%", margin: "auto", background: "#ececec" }}
      >
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            The competition is open to all engineering and architecture firms
            that are registered in India or under owners who have Indian
            citizenship; government and non-government organisations.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            Advertising, graphic design or other media firms are allowed to
            participate as long as they collaborate with registered
            professionals of engineering or architecture in India.
          </td>
        </tr>

        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            The participating team/s must combine engineering and architecture
            professionals for the entry/ entries to be deemed as qualified.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            Advertising, graphic design or other media firms are allowed to
            participate as long as they collaborate with registered
            professionals of engineering and architecture in India.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            The participating team/s must send in the completed forms in the
            mentioned format for it to be considered as a valid entry.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            Up to two entries can be submitted by the same organisation.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            Employees of the organising parties are not eligible to enter the
            competition.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            Firms interested to participate may register on the website by
            filling in the registration form.
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ background: "#ececec" }}>
            <img src={bullet} />
          </td>
          <td style={{ background: "#ececec" }}>
            Participants are expected to take careful note of all the
            conditions. Non-compliance may result in disqualification.
          </td>
        </tr>

        <div id='buttonpair'>
          {" "}
          <Button id='clickButton'>Read the Brief</Button>{" "}
          <Button id='clickButton'>Register Now</Button>{" "}
        </div>

        <br />

        <br />
        <br />
      </div>
      {/* ADD buttons here*/}

      <br />
      <br />
    </div>
  );
};

const Subbmission = () => {
  return (
    <div>
      <div
        style={{
          width: "70%",
          margin: "auto",
          paddingTop: "40px",
          marginTop: "40px",
        }}
      >
        <h3 style={{ color: "#00124D" }}>SUBMISSION GUIDELINES</h3>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ background: "#707070", height: "1px", width: "55%" }}
        ></div>
        <div style={{ background: "orange", height: "3px", width: "5%" }}>
          .
        </div>
        <div style={{ background: "white", height: "1px", width: "40%" }}>
          .
        </div>
      </div>

      <div
        id='bulletItems'
        style={{ width: "70%", margin: "auto", marginTop: "50px" }}
      >
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry must be submitted on or before 11:59 pm IST on JunMay 315,
            2021.
          </td>
        </tr>

        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry must be submitted on or before 11:59 pm IST on JunMay 315,
            2021.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>The entry can only be submitted online. </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry must be submitted on or before 11:59 pm IST on JunMay 315,
            2021.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>The entry can only be submitted online. </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Please plan accordingly to ensure that the entry is uploaded within
            the given deadline. Any submission/s delivered later than the
            above-mentioned date will be disqualified, regardless of the reason.{" "}
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Any missing or incomplete information will be considered as a basis
            of disqualification.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry should not have the name of the participating team/s at
            any place. Any non-compliance will render the entry disqualified.{" "}
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            A maximum of two entries are allowed from the same organisation.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Each entry needs to be sent in separately with its unique
            identification code.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>Please do not combine multiple entries. </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The submissions may be made using wetransfer else upload on any
            cloud storage [Google Drive] and send the link to us for download,
            along with the challenge-id.
          </td>
        </tr>
        <br />
        <h5 style={{ textAlign: "left", color: "#0093CC" }}>
          i. Visual Representation
        </h5>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The participating team/s must submit their idea as a detailed
            drawing or a graphic representation.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>This must be composed of a maximum of two A1 panels.</td>
        </tr>
        <br />
        <h5 style={{ textAlign: "left", color: "#0093CC" }}>ii. Synopsis</h5>
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The participating team/s must accompany the visual representation
            with a description of the concept in a synopsis within 750-1000
            words.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The synopsis must be in English. Any handwritten notes or regional
            dialect texts will be deemed invalid
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The synopsis must be typed in size 12 Calibri font and be
            double-spaced.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>The synopsis must address the following issues:</td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Establishing the Context - Need to Engineer the Idea of Notions of
            India
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>Establishing the Concept - Description of the Idea</td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Establishing the Medium - Description of how Steel is ideal to
            translate the idea. Also, describe associated materials used in
            combination.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Brief profile of the participating team with full contact details.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Each of the selected finalists will be required to submit detailed
            drawings (plans, elevations, sections, 3D finished views etc) and
            all relevant documents that will explain their idea from the point
            of construction
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The submission must include a 1:25 scale model, for which the
            organisers will pay a stipend of INR .
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The model must be submitted within 10 days of the intimation of
            being shortlisted for the second stage.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            A BOQ specifying material requirement and details for fabrication,
            assembly and finish is mandatory for the second stage entry to be
            deemed valid
          </td>
        </tr>
        <div id='buttonpair2'>
          <Button id='clickButton'>Read the Brief</Button>{" "}
          <Button id='clickButton'>Register Now</Button>{" "}
        </div>
        <br></br>
      </div>

      {/*  <div
      //   id='bulletItems'
      //  style={{ width: "70%", margin: "auto", marginTop: "50px" }}
      >
        
       
       

      
        
        
        
      </div>
      */}
    </div>
  );
};

const Evaluation = () => {
  return (
    <div>
      <div style={{ width: "70%", margin: "auto", marginTop: "150px" }}>
        <h3 style={{ color: "#0093CC" }}>EVALUATION CRITERIA</h3>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ background: "#707070", height: "1px", width: "55%" }}
        ></div>
        <div style={{ background: "orange", height: "3px", width: "5%" }}>
          .
        </div>
        <div style={{ background: "white", height: "1px", width: "40%" }}>
          .
        </div>
      </div>
      <div
        id='bulletItems'
        style={{ marginTop: "40px", width: "70%", margin: "auto" }}
      >
        <br />

        <p style={{ textAlign: "left" }}>
          {" "}
          The Jury will evaluate entries based on a balanced approach between
          the interpretation of the concept, design aesthetics, technical
          excellence and the ability to inspire the Indian community.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          The entries will be evaluated based on the following parameters:{" "}
        </p>
        <h5 style={{ textAlign: "left", color: "#0093CC" }}>
          1.The Clarity in Interpretation
        </h5>

        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry will be judged on how the design has interpreted the
            primary challenge in this design – be it site, program or other
            parameters.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry will be judged on the extent to which the concept has
            addressed the challenge as a spatial response.{" "}
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Participating team/s are encouraged to establish the intent to
            communicate the same through the support of visual and textual
            materials.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry will be judged based on the relevance of its concept so
            that it continues to inspire others.
          </td>
        </tr>
        <br />
        <br />
        <h5 style={{ textAlign: "left", color: "#0093CC" }}>
          2.Design Response
        </h5>

        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry will be assessed on how well the design has aesthetically
            also responded to the challenge.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            Special considerations will be given to projects specifying the
            details of the technology and the materials used to create the final
            sculpture.
          </td>
        </tr>
        <br />
        <h5 style={{ textAlign: "left", color: "#0093CC" }}>
          3.Innovation in Material Usage
        </h5>

        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry will be evaluated on how it has presented steel hollow
            sections as the primary medium through innovation. These can address
            aesthetic expression, structural systems, fabrication or even
            finishing methods.{" "}
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry will also be judged based on how the primary material has
            been used in juxtaposition with other mediums (e.g., wood, glass,
            technology etc.) to highlight steel hollow section properties and
            present the overall idea with ingenuity.
          </td>
        </tr>
        <br />
        <h5 style={{ textAlign: "left", color: "#0093CC" }}>
          4.Responsibility to Economy and Environment
        </h5>

        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The entry/ entries will be judged on how its design maintains a
            responsibility to the environment in terms of fabrication,
            transportation, assembly and use of green methods.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet} />
          </td>
          <td>
            The submissions may be made using wetransfer else upload on any
            cloud storage [Google Drive] and send the link to us for download,
            along with the challenge-id.
          </td>
        </tr>

        <div id='buttonpair2'>
          {" "}
          <Button id='clickButton'>Read the Brief</Button>{" "}
          <Button id='clickButton'>Register Now</Button>{" "}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Participate;
