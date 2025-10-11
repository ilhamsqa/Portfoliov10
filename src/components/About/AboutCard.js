import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ilham Adam Shodiqin </span>
            from <span className="purple"> Blitar, Jawa Timur, Indonesia.</span>
            <br />
            I am developer bot WhatsApp Hamself.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> WhatsApp Bot Developer
            </li>
            <li className="about-activity">
              <ImPointRight /> All You Can Eat
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ilhamsqa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
