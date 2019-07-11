import React from "react";
import Typography from "@material-ui/core/Typography";

const PhotoTitle = ({ title }) => {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};

export default PhotoTitle;
