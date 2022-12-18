import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import GameRating from "../GameRating/GameRating";
import { baseUrl } from "../../constants/apiUrl";
import Loading from "../common/Loading/Loading";
import styles from "./GameDetails.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import Toast from "react-bootstrap/Toast";

export default function GameDetails() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [altText, setAltText] = useState(null);
  const [gameName, setGameName] = useLocalStorage("gamename", null);
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/");
  }

  const url = baseUrl + `/api/games/${id}?populate=*`;

  useEffect(
    function () {
      async function fetchGames() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setGame(json.data);
          } else {
            setError("Somthing bad happend");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchGames();
    },
    [url]
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <Alert variant="error">
          <Alert.Heading>We have some server issues</Alert.Heading>
        </Alert>
      </>
    );
  }

  function handelImage(event) {
    setImageSrc(event.target.src);
    setAltText(event.target.alt);
  }

  function saveToLocalStorage() {
    setGameName(game.attributes.name);
  }

  function addToCartButton() {
    let storedGame = localStorage.gamedetails ? JSON.parse(localStorage.gamedetails) : [];
    let gameProps = {
      id: id,
      gameName: gameName,
      rating: game.attributes.rating,
      price: game.attributes.price,
      imageUrl: game.attributes.cover_image.data.attributes.url,
    };
    storedGame.push(gameProps);
    localStorage.setItem("gamedetails", JSON.stringify(storedGame));
  }

  function removeFromCartButton() {
    let storedGame = JSON.parse(localStorage.getItem("gamedetails"));
    const filtered = storedGame.filter((game) => game.id !== id);
    localStorage.setItem("gamedetails", JSON.stringify(filtered));
  }

  return (
    <main>
      <h1 className="text-center my-5">{game.attributes.title}</h1>
      <div className="container d-flex justify-content-center flex-column align-items-center" style={{ marginBottom: "6rem", marginTop: "6rem" }}>
        <div className={styles.imagesContainer}>
          <div className={styles.pictureContainer}>
            <img src={imageSrc ? imageSrc : game.attributes.cover_image.data.attributes.url} alt={altText ? altText : game.attributes.cover_image.data.attributes.alternativeText} />
          </div>
          <div className={styles.picturesContainer}>
            <img onMouseOver={handelImage} onClick={handelImage} src={game.attributes.cover_image.data.attributes.url} alt={game.attributes.cover_image.data.attributes.alternativeText} />
            {game.attributes.rest_images.data.map(function (gameImages) {
              return (
                <div onMouseOver={handelImage} onClick={handelImage} key={gameImages.id}>
                  <img src={gameImages.attributes.url} alt={gameImages.attributes.alternativeText} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className="d-flex align-items-baseline justify-content-evenly flex-wrap">
            <div className="d-flex align-items-baseline gap-1 mt-4">
              <GameRating heartRating={game.attributes.rating} alt={game.attributes.rating} />
            </div>
            <div>
              <p className="mt-4">{game.attributes.description}</p>
            </div>
            <div className="mb-3">
              <p>
                <strong>Price</strong> {game.attributes.price},-$
              </p>
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
            </div>

            <Link to={"/cart"}>
              <Button className={styles.goToCartButton} onClick={saveToLocalStorage}>
                Go to cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
