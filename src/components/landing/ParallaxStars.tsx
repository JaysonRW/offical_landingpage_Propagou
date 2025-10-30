// src/components/landing/ParallaxStars.tsx

"use client";

import React, { useEffect } from 'react';
import './ParallaxStars.css';

const ParallaxStars = () => {
  useEffect(() => {
    const stars = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    if (stars) {
      stars.style.boxShadow = generateBoxShadow(700);
    }
    if (stars2) {
      stars2.style.boxShadow = generateBoxShadow(200);
    }
    if (stars3) {
      stars3.style.boxShadow = generateBoxShadow(100);
    }
  }, []);

  const generateBoxShadow = (n: number) => {
    let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
    for (let i = 2; i <= n; i++) {
      value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
    }
    return value;
  };

  return (
    <div className="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default ParallaxStars;