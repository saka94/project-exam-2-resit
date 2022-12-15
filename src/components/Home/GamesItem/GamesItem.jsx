import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import GameRating from "../../GameRating/GameRating";
import Button from "react-bootstrap/Button";
import styles from "./GamesItem.module.css";

export default function GamesItem({ id, altText, gameName, rating, img, price }) {
  return (
    <Link to={`/detail/${id}?=${gameName}`}>
      <Card key={id} style={{ width: "20rem" }} className={styles.cardStyling}>
        <Card.Img className={styles.imgStyling} variant="top" src={img} alt={altText} />
        <Card.Body className={styles.cardBodyStyling}>
          <Card.Title>{gameName}</Card.Title>
          <div className="d-flex align-items-baseline justify-content-evenly flex-wrap">
            <div className="d-flex align-items-baseline gap-1 ">
              <GameRating gameRating={rating} alt={rating} />
            </div>
          </div>
          <div className="mb-3">
            <strong>Price</strong> {price} $
          </div>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
