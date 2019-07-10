import React from "react";

const PhotoOfTheDay = ({ image }) => {
  return (
    <div>
      {image.includes(".jpg") ? (
        <div className="container">
          <img src={image} />
        </div>
      ) : (
        <div className="container">
          <iframe
            allowFullScreen="allowFullScreen"
            frameBorder="0"
            title="APOD"
            className="video"
            src={image}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoOfTheDay;
