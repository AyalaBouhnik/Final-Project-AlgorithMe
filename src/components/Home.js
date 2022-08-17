import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/Graph_img_1.png";
import { useState, useEffect } from "react";


const Home = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState("");
const [delta, setDelta] = useState(300 - Math.random() * 100);
const [index, setIndex] = useState(1);
const toRotate = ["Practice Algorithm", "Start Test", "Get new feedback"];
const period = 2000;

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta);

  return () => {
    clearInterval(ticker);
  };
}, [text]);

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta((prevDelta) => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex((prevIndex) => prevIndex - 1);
    setDelta(period);
  } else if (isDeleting && updatedText === "") {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
  } else {
    setIndex((prevIndex) => prevIndex + 1);
  }
};




  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome Students</span>
                  <h1>
                    {`Algorithm Home `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Practice Algorithm", "Start Test", "Get new feedback" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Computer science students - we've got your back! Want to
                    practice algorithm problems? Looking for a place to study,
                    test yourself, and even track your incredible progress?
                    AlgorithMe is your home turf. Lecturers - we're here for you
                    too! This is the ideal place to monitor your students'
                    grades and progress. Come join the fun.
                  </p>
                  {/* <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home