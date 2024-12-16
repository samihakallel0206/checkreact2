import React from "react";
import { Card, Button } from "react-bootstrap";

const PlayerCard = ({
  name = "Didier Drogba",
  team = "chelsea",
  nationality = "Cote d'ivoire",
  jerseyNumber = "11",
  age = "40",
  imageUrl = "",
}) => {
 
  return (
    <div>
      {/* <h4>player</h4> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {team}
            <br />
            {nationality} <br />
            {jerseyNumber}
            <br />
            {age}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;
