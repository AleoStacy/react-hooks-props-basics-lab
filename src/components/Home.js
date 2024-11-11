import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
      <p>{props.user}</p>
    </div>
  );
}

Home.propTypes = { 
  user: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  color: PropTypes.string,
};

export default Home;
