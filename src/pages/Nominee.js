import React from 'react';
// import Images from '../nominee-images';
import './Nominee.css';

const Nominee = () => {
  return (
    <div className="nominee">
      <h2>Meet the Award Nominees</h2>
      {/* <div className="nominee-grp">
        {Images.map((image) => (
          <div className="nominee-card">
            <img src={image.imageUrl} alt={image.imageAlt} />
            <h2>{image.imageName}</h2>
            <p>
              <em>{image.description}</em>
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Nominee;
