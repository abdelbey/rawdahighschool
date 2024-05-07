import React from 'react';

function ExampleCarouselImage({ text, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={text} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    </div>
  );
}

export default ExampleCarouselImage;
