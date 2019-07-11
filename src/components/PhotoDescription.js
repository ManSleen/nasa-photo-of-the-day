import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const PhotoDescription = ({ description }) => {
  return (
    <div>
      <main>
        <Container maxWidth="md">
          <Typography paragraph>{description}</Typography>
        </Container>
      </main>
    </div>
  );
};

export default PhotoDescription;
