import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import GameRating from "../../GameRating/GameRating";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

import styles from "./GamesItem.module.css";
import { useState } from "react";

export default function GamesItem({ id, altText, gameName, rating, img, price, description }) {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  function addToCartButton() {
    let storedGame = localStorage.gamedetails ? JSON.parse(localStorage.gamedetails) : [];
    let game = {
      id: id,
      gameName: gameName,
      rating: rating,
      price: price,
      imageUrl: img,
    };
    storedGame.push(game);
    localStorage.setItem("gamedetails", JSON.stringify(storedGame));
    setUpdate(true);
    if (update === true) {
      setUpdate(false);
    }
    localStorage.setItem("update", JSON.stringify(update));
  }

  function removeFromCartButton() {
    let storedGame = JSON.parse(localStorage.getItem("gamedetails"));
    const filtered = storedGame.filter((game) => game.id !== id);
    localStorage.setItem("gamedetails", JSON.stringify(filtered));
  }

  return (
    <>
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
          <div className={styles.priceContainer}>
            <p>
              <strong>Price</strong> ${price}
            </p>
          </div>
          <div className="d-flex justify-content-evenly mb-3">
            <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide className={styles.toast}>
              <Toast.Header className={styles.toastHeader}>
                <strong className="me-auto">{gameName}</strong>
                <small>1 second ago</small>
              </Toast.Header>
              <Toast.Body className={styles.toastBody}>{gameName} added to cart!</Toast.Body>
            </Toast>
            <div
              onClick={() => {
                addToCartButton();
                setShow(true);
              }}
              className={styles.addToCartButton}
            >
              Add to cart
            </div>
            <div onClick={removeFromCartButton} className={styles.removeFromCartButton}>
              Remove
            </div>
          </div>
          <Link to={`/detail/${id}?=${gameName}`}>
            <Button className={styles.seeMoreButton}>See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
