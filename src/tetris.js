import React, { useEffect } from 'react';
import './Tetris.css';

const Tetris = () => {
  useEffect(() => {
    const tetrisContainer = document.querySelector('.tetris-container');
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33FF', '#33FFFF', '#FFFF33'];

    const createBlock = () => {
      const block = document.createElement('div');
      block.className = 'tetris-block';
      block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      block.style.left = `${Math.floor(Math.random() * 90)}%`; // Ensure blocks stay within container
      tetrisContainer.appendChild(block);

      const fallDuration = 5; // seconds
      block.style.animation = `fall ${fallDuration}s linear forwards`;

      block.addEventListener('animationend', () => {
        // Remove block after animation ends to prevent overflow
        tetrisContainer.removeChild(block);

        // Check for blocks that might be piled up and remove them
        const blocks = document.querySelectorAll('.tetris-block');
        blocks.forEach((b) => {
          const rect = b.getBoundingClientRect();
          if (rect.top > tetrisContainer.getBoundingClientRect().bottom - 30) {
            b.remove();
          }
        });
      });
    };

    const interval = setInterval(createBlock, 300); // Create a new block every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tetris-animation">
      <div className="tetris-container"></div>
    </div>
  );
};

export default Tetris;
