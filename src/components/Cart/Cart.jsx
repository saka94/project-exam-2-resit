import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import GameRating from "../GameRating/GameRating";
import styles from "./Cart.module.css";

export default function Cart() {
  let getGamesFromLocalStorage = localStorage.getItem("gamedetails");
  const gameDetails = JSON.parse(getGamesFromLocalStorage);

  const onRemove = (id) => {
    let GameData = localStorage.getItem("gamedetails");
    let newList = JSON.parse(GameData);
    let index = newList.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    localStorage.setItem("gamedetails", JSON.stringify(newList));
  };

  return (
    <main>
      <h1 style={{ textAlign: "center", margin: "3rem 0" }}>Cart</h1>
      <Container>
        <ListGroup className={styles.mainContainer}>
          {gameDetails.map(function (gameDetail) {
            return (
              <ListGroup.Item className={styles.listContainer} key={gameDetail.id}>
                <h2 className={styles.h2}>{gameDetail.gameName}</h2>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={gameDetail.imageUrl} alt={gameDetail.gameName}></img>
                </div>
                <GameRating heartRating={gameDetail.rating} alt={gameDetail.rating} />
                <p>
                  <strong>price</strong> ${gameDetail.price}
                </p>
                <div className={styles.removeFromCartButton} onClick={onRemove}>
                  Remove
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
      {gameDetails.length ? (
        <Link to="/checkout">
          <div className="d-flex justify-content-center">
            <div className={styles.checkOutButton}>Go to checkout</div>
          </div>
        </Link>
      ) : (
        <div className={styles.mainContainer}>
          <h2 className={styles.h2}>Cart is empty 😅</h2>
          <Link to="/home">
            <div className="d-flex justify-content-center">
              <div className={styles.checkOutButton}>Go to Home</div>
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}
