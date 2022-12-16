import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import GameRating from "../../GameRating/GameRating";
import Button from "react-bootstrap/Button";
import styles from "./GamesItem.module.css";

export default function GamesItem({ id, altText, gameName, rating, img, price, description }) {
  function addToCartButton() {
    let storedGame = localStorage.gamedetails ? JSON.parse(localStorage.gamedetails) : [];
    let game = {
      id: id,
      gameName: gameName,
      rating: rating,
      price: price,
    };
    storedGame.push(game);
    localStorage.setItem("gamedetails", JSON.stringify(storedGame));
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        <Card key={id} style={{ width: "20rem" }} className={styles.cardStyling}>
          <Link to={`/detail/${id}?=${gameName}`}>
            <Card.Img className={styles.imgStyling} variant="top" src={img} alt={altText} />
          </Link>
          <Card.Body className={styles.cardBodyStyling}>
            <Card.Title className={styles.cardTitle}>{gameName}</Card.Title>
            <div className="d-flex align-items-baseline justify-content-evenly flex-wrap">
              <div className="d-flex align-items-baseline gap-1 ">
                <GameRating heartRating={rating} alt={rating} />
              </div>
            </div>
            <div className="mb-3">
              <p>
                <strong>Price</strong> {price},- $
              </p>
              <div onClick={addToCartButton} className={styles.addToCartButton}>
                Add to cart
              </div>
            </div>
            <Link to={`/detail/${id}?=${gameName}`}>
              <Button variant="primary">See more</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
