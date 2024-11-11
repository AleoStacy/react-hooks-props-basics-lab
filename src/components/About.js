import React from "react";
import PropTypes from "prop-types";
import Links from "./Links/Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

About.propTypes = { 
  bio: PropTypes.string,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default About;
