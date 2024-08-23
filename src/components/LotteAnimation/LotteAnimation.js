// src/LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation2.json';
import './LottieAnimation.css';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="animation-container">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
