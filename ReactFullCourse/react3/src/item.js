import React from 'react';

function Item({title, description}) {
  return (
    <div className="container">
      <div>
        <img 
          src="https://i5.walmartimages.com/asr/944e1c1b-7eb6-4f6d-91b5-428ee4837ef6.68fa7f85f3897c2ac678f3b04ed21b10.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="image"
        />
      </div>        
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Item;
