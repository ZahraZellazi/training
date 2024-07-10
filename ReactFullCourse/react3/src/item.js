import React from 'react';

function Item({title, description , imgSrc}) {
  return (
    <div className="container">
      <div>
        <img 
          src ={imgSrc}
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
