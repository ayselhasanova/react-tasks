import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const CustomButton = ({ text, warnMessage, hint }) => {
  const [showHint, setShowHint] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
    <button
      className={`custom-button ${clicked ? 'clicked' : ''}`}
      onMouseOver={toggleHint}
      onMouseOut={toggleHint}
      onClick={handleClick}
      >
      {text}
      {showHint && <span className="hint">{hint}</span>}
    </button>
      {clicked && <div className="warning">{warnMessage}</div>}
      </>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  warnMessage: PropTypes.string,
  hint: PropTypes.string,
};

export default CustomButton;
