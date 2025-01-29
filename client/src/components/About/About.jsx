import React from "react";
import "./About.css";
import useAnimateOnScroll from "../../hooks/AnimateOnScroll";

const About = () => {
  useAnimateOnScroll();

  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="container">
          <div className="hero-content">
            <h2>Welcome to Delta 5.0!</h2>
            <p>
              Welcome to Delta, an organization fueled by the passion and
              ingenuity of engineering students at Purwanchal Campus in Dharan,
              Sunsari. Established as a collaborative effort by students from
              seven diverse faculties—Agricultural, Architecture, Computer,
              Civil, Electrical, Electronics, Information & Communication, and
              Mechanical—Delta stands as a testament to the power of unity in
              education.
            </p>
          </div>
          <div className="hero-image">
            <img className="img" src="/about/1.jpg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="hero-image">
            <img className="img" src="/about/2.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h2>Our Mission</h2>
            <p>
              At Delta, we go beyond the traditional boundaries of education.
              Each faculty boasts its own society, driven by students with a
              shared goal: to provide training beyond the standard curriculum.
              This training equips students with skills essential for success in
              their respective fields. Led by seniors and industry experts,
              these sessions offer practical insights and real-world knowledge
              to the next generation of engineers.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2>Delta: An Umbrella of Excellence</h2>
            <p>
              Delta is more than an organization; it's an umbrella that shelters
              seven distinct societies, each representing a faculty at
              Purwanchal Campus. These societies form the backbone of Delta, and
              their representatives play crucial roles in the organization's
              dynamic and collaborative organizing committee.
            </p>
          </div>
          <div className="hero-image">
            <img className="img" src="/about/3.jpg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="hero-image">
            <img className="img" src="/about/4.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h2>Annual Transformation</h2>
            <p>
              Every year, Delta undergoes a transformation, marked by a change
              in nomenclature from Delta4.0 to Delta5.0. This evolution
              signifies our commitment to progress and innovation. Last year,
              under the theme of "Green Technology," Delta4.0 hosted a grand
              National Technological Event, setting the stage for an annual
              tradition of exploration and advancement.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2>Events that Define Excellence</h2>
            <p>
              In our main events, we bring together all seven faculties for
              competitions that challenge the boundaries of innovation and
              creativity. From Software Hackathons to Popsicles Bridge
              Competitions, each event is a testament to the diverse talents
              within our organization. Our dedication to fostering creativity
              extends to pre-events like Delta Champs, designed to engage school
              and +2 level students in art, speech, quiz contests, and more.
            </p>
          </div>
          <div className="hero-image">
            <img className="img" src="/about/5.jpg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="hero-image">
            <img className="img" src="/about/6.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h2>Training for Success</h2>
            <p>
              Delta is not just an event organizer; it's a training ground. We
              believe in nurturing talent by inviting experts to provide
              specialized training to our students. This commitment extends to
              pre-events, where participants are immersed in three days of
              creative and technological activities.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2>Get Ready for the Ultimate Technical Adventure!</h2>
            <p>
              Join us on our journey of growth, collaboration, and excellence.
              Delta is more than an organization; it's a community dedicated to
              shaping the future of engineering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
