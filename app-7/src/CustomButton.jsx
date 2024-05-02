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
    setClicked(true);
    if (warnMessage) {
      const warningSection = document.createElement('div');
      warningSection.innerText = warnMessage;
      warningSection.classList.add('warning')
      document.body.appendChild(warningSection);
    }
  };

  return (
    <button
      className={`custom-button ${clicked ? 'clicked' : ''}`}
      onMouseOver={toggleHint}
      onMouseOut={toggleHint}
      onClick={handleClick}
    >
      {text}
      {showHint && <span className="hint">{hint}</span>}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  warnMessage: PropTypes.string,
  hint: PropTypes.string,
};

export default CustomButton;
