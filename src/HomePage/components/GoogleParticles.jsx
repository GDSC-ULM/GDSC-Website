import React from 'react';

export const GoogleParticles = () => (
  <div className="google-particles">
    {['blue', 'red', 'yellow', 'green'].map((color, i) => (
      [...Array(10)].map((_, j) => (
        <div
          key={`${i}-${j}`}
          className={`particle ${color}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))
    ))}
  </div>
);