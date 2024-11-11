import React from 'react';
import PropTypes from 'prop-types';

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github}>GitHub</a>
      <a href={props.linkedin}>LinkedIn</a>
    </div>
  );
}

Links.propTypes = { 
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default Links;
