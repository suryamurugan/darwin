import React from "react";
import brief from "../temp/brief.png";
import bullet1 from "../temp/bullet.svg";
import bullet2 from "../temp/bullet.svg";
import prize from "../temp/prize_bg2.png";
import prizeIcon from "../temp/prizes_icon.svg";

const Brief = () => {
  return (
    <div>
      <div className='cuscont'>
        <img
          className='coverbgimg'
          src={prize}
          alt='Snow'
          style={{ width: "100%" }}
        />
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

      <TheRoadBlocks />
      <TheSolution />
      <FromRtoR />
      <CompetitionChallange />
    </div>
  );
};

const TheBackground = () => {
  return (
    <div style={{ background: "#ececec" }}>
      <div style={{ paddingTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>THE BACKGROUND</h3>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ background: "#ececec", height: "1px", width: "40%" }}>
          .
        </div>
        <div style={{ background: "orange", height: "3px", width: "5%" }}>
          .
        </div>
        <div
          style={{ background: "#707070", height: "1px", width: "55%" }}
        ></div>
      </div>
      <br />

      <div id='bulletItems' style={{ width: "70%", margin: "auto" }}>
        Over the past 15 years, India has undergone a rapid metamorphosis. The
        country has never in the recent past posed a younger outlook with such
        heightened aspirations. Today, it not only stands amongst the top 5
        global economies but also is an important force in global and regional
        politics.
        <br />
        <br />
        The Government has brought forth several reforms to improve trade, and
        commerce, reduce inequality and bright forth inclusive growth.
        <br />
        <br />
        What is a nation but its people? India has a young populace - every
        third person in an Indian city today is a youth. The median individual
        in India or nearly 64 per cent of its population is in the working age
        group, making it the youngest country in the world.
        <br />
        <br />
        <b>
          <i style={{ color: "orange" }}>
            Every great design begins with an even better story.
          </i>
        </b>
        <div style={{ color: "orange" }}>~Lorinda Mamo</div>
        India is in performing optimally on most counts. Its’ innate strengths
        present a picture of a promising and glorious future.
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

const TheRoadBlocks = () => {
  return (
    <div style={{ background: "#fff" }}>
      <div style={{ paddingTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>THE ROADBLOCKS </h3>
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
      <br />
      No nation is as diverse as India. India is a confluence of
      regions,climates, languages, religions, cultures and tradiditons.
      <br />
      {/*BOX IMAGE SHOULD BE ADDED*/}
      On top of it, diversity in cuisine, occupation, celebrations, family
      structures, weather, sports, music, dance and values. This creates
      dissimilarities in the way billion of us live, work, communicate and
      connect.
      <br />
      <br />
      Such diversity is bound to produce a multiplicity of thought and vision.
      <br />
      <br />
      How do we communicate a common objective to such a vast population who
      speak in over 1,600 dialects?
      <br />
      How can we express this essence of new India that connects with and will
      be celebrated by a billion?
      <br />
      <br />
      <b>
        <i style={{ color: "orange" }}>
          A different world cannot be built by indifferent people.
        </i>
      </b>
      <br />
      <div style={{ color: "orange" }}> ~Peter Marshall </div>
      <br />
      <br />
      <br />
    </div>
  );
};

const TheSolution = () => {
  return (
    <div style={{ background: "white" }}>
      <div style={{ paddingTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>THE SOLUTION</h3>
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
      <p style={{ textAlign: "left" }}>
        {" "}
        <br />
        <br />
        <br />
        Can the solution be through design? We certainly believe so.
        <br />
        <br />
        Design is one of the most powerful forces in our lives, whether or not
        we are aware of it, and can also be inspiring, empowering and
        enlightening. It can be a powerful and productive medium that can help
        to build a better life.
        <br />
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td style={{ color: "#0093CC" }}>
            Design creates culture, Culture shapes values. Values determine the
            future.
            <br />
            ~Robert Peters
          </td>
        </tr>
        Can we use design to create symbols or iconic structures that can
        overcome the barriers of language, religion and values?
        <br />
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td style={{ color: "#0093CC" }}>
            Symbols are powerful because they are the sign of the invisible
            realities.
            <br />
            ~Saint Augustine.
            <br />
          </td>
        </tr>
        <br />
        <br />
        It is with this objective that Tata Structura has endeavoured to create
        an iconic symbol that articulates the Idea of India for today and
        tomorrow. A quest to create a landmark that will never cease in its
        intent to amaze, regardless of the era in which it is seen. Because even
        as it remains in permanence, it will always remain true to its purpose
        of changing times.
        <br />
        <br />
        And who better to do that than the people who construct the nation.
        People who recognise challenges as beauty in opportunity. People who are
        not restricted by space to embody the beauty in spirit. People who
        influence dreams through the beauty of form and function. Nation
        builders who have the power to shape the nation to come.
        <br />
        <br />
        <tr>
          <td>
            <img src={bullet2} />
          </td>
          <td style={{ color: "ORANGE" }}>Our Architects. Our Engineers.</td>
        </tr>
        In 2006, as India turned 60 years, Tata Structura launched Notions of
        India, a seminal competition to celebrate this milestone and give India
        its most distinguishable symbol of ‘The Shape of Things to Come’.
        <br />
        <br />
        Now, fifteen years hence, on the eve of the 75th anniversary of our
        nation’s independence, we see a nation younger than ever. How do we
        portray the dynamics of this transformational reality and present it not
        just to the global audience, but to ourselves as well? How do we capture
        the beauty of this momentum in a medium that will continue to have the
        ability to inspire us forever?
      </p>
      <br />
      <br />
      <br />
    </div>
  );
};
const FromRtoR = () => {
  return (
    <div style={{ background: "#fff" }}>
      <div style={{ paddingTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>FROM RELASTATION TO REALITY</h3>
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
      <i style={{ color: "orange" }}>Let’s build a change we wish to see.</i>
      <br />
      <div style={{ color: "orange" }}>~Emily Pilloton</div>
      Not limiting itself to just an ideas competition, Tata Structura chooses
      to have this symbol erected and installed in public spaces across select
      cities of India.
      <br />
      <br />
      This way, the ‘Notions of India’ symbol will not only be celebrated by
      communities but also will shape the lives of people around it.
      <br />
      <br />
      <br />
    </div>
  );
};
const CompetitionChallange = () => {
  return (
    <div style={{ background: "white" }}>
      <div style={{ paddingTop: "40px" }}>
        <h3 style={{ color: "#00124D" }}>COMPETITION CHALLENGE</h3>
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
      <p style={{ textAlign: "left" }}>
        <br />
        <br />
        {/*SCROLL BAR SHOULD BE ADDED*/}
        One of the most unique characteristics of steel hollow sections is that
        it distinguishes itself from other building materials are the array of
        applications that it caters to. The spatial distribution of material
        around the axis of these steel hollow sections gives it several magical
        qualities. This not only gives designers greater flexibility to shape
        structures but also makes it convenient and easier to express their
        creativity. In short, strong yet immensely versatile.
        <br /> <br />
        It is this versatility that makes steel hollow sections an ideal medium
        of creative expression. Its versatility and strength help construct a
        spatial vocabulary that underlines efficiency and intelligence of
        process and program. It also speaks of a collaborative approach wherein
        multidisciplinary design professionals combine to develop a cohesive
        vision. Much like the Idea of India.
        <br />
        <br />
        <br />
        {/*SCROLL BAR SHOULD BE ADDED*/}
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>Interpretation of the Brief</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The participant is free to imagine the scope of Notions of India as
            per their visualization of the concept.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            There are no restrictions to inspiration except as and where
            mentioned.
          </td>
        </tr>
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>The Medium</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The Notions of India must use steel hollow sections as the primary
            medium of the design. It may be combined with any other media (wood,
            glass, technology etc.) but hollow sections must remain the main
            medium conceptually and visually.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            For any reasons, if the participant wishes to choose another primary
            material, then he/she must provide a valid reason for it.
            Maintaining the validity of the reason submitted will be at the
            discretion of the jury.
          </td>
        </tr>
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>The Construct</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The Notions of India must address technical and functional aspects
            as well as programmatic ones. It must have a stable and feasible
            structural system to be buildable.
          </td>
        </tr>
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>Form and Dimensions</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>The symbol should be an iconic outdoor sculpture.</td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            There are no limits on its outer volumetric dimensions but it is
            suggested that they may be kept within 12 x 12 x 12 metres.
          </td>
        </tr>
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>Integration</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The Notions of India must take into account the contextual
            conditions of India to make an inspiring visual contribution while
            integrating into the fabric of the nation.
          </td>
        </tr>
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>Impact</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The submission must impact its people through aesthetics, form,
            design inventiveness and responsibility to the environment.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The Notions of India must take into consideration the longevity of
            the concept so that its relevance continues to apply and inspire.{" "}
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The Notions of India must adhere to ethical practices in all phases
            of the competition.{" "}
          </td>
        </tr>
        <br />
        <br />
        <div style={{ color: "#0093CC" }}>
          <h4>Innovation</h4>
        </div>
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            Steel hollow sections take an attractive position in the dialogue
            between durability, versatility and economics.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The Notions of India must explore and exploit the potential of Steel
            hollow sections through an innovative approach.
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <img src={bullet1} />
          </td>
          <td>
            The approach can address aesthetic expression, structural systems,
            fabrication or even finishing methods.
          </td>
        </tr>
      </p>{" "}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Brief;
