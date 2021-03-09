import logo from "./logo.png";
import "./App.css";
import "./styles/style.css";
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
import IconCard from "./components/IconCard";
import CustomNav from "./components/CustomNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/A"
import Brief from "./pages/Brief";
import Jury from "./pages/Jury";
import Registeration from "./pages/Registeration";
import Prize from "./pages/Prize";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <CustomNav />
          <Switch>
            <Route path='/brief'>
              <Brief />
            </Route>
            <Route path='/jury'>
              <Jury />
            </Route>
            <Route path='/prize'>
              <Prize />
            </Route>
            <Route path='/register'>
              <Registeration />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          <CustomFooter />
        </div>
      </Router>
      {/* <CustomNav/>
      <Intro/> */}

      {/* <Test/>
<Intro/>
<Participate/>
<CompetitionSchedule />
      */}
    </div>
  );
}

const Test = () => {
  return (
    <>
      <div style={{ background: "red", height: "50vh" }}>
        <div style={{ display: "flex" }}>
          <IconCard />
          <IconCard />
          <IconCard />
        </div>
      </div>
    </>
  );
};

const Intro = () => {
  return (
    <>
      {/* <div style={{background:"red",height:"50vh"}}> */}
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src='https://www.apple.com/v/apple-events/home/n/images/overview/meta/og__fodnljjkwl6y.png?202102011354'
          alt='Snow'
        ></img>
        <Button
          style={{
            position: "absolute",
            top: "50%",
            left: " 50%",
            transform: "translate(-50%, -50%)",
            //-ms-transform: translate(-50%, -50%);
            // background-color: #555;
            // color: white;
            // font-size: 16px;
            // padding: 12px 24px;
            // border: none;
            // cursor: pointer;
            // borderRadius: 5px
          }}
          class='btn'
        >
          Button
        </Button>
      </div>

      {/* </div> */}
    </>
  );
};

const Participate = () => {
  return (
    <div
      style={{
        background: "whitesmoke",
        height: "50vh",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div>Participate</div>
      <div
        style={{
          display: "inline-flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <CustomParticipateCard />
        <CustomParticipateCard />
        <CustomParticipateCard />
      </div>
    </div>
  );
};

const CustomParticipateCard = () => {
  return (
    <>
      <div style={{ background: "white", margin: "10px" }}>
        <h5>Eligibility Criteria</h5>

        <div>ccfd jv hdf vjh vjd jv vjvfjjs</div>
        <Button>Now</Button>
      </div>
      {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Eligibility Criteria</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
    </>
  );
};
export default App;
