import { useState, useEffect } from "react";
import { baseUrl } from "../../../constants/apiUrl";
import Loading from "../../common/Loading/Loading";
import Alert from "react-bootstrap/Alert";
import { Container } from "react-bootstrap";
import GamesItem from "../GamesItem/GamesItem";

export default function GamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchGames() {
      try {
        const response = await fetch(baseUrl + "/api/games?populate=*");

        if (response.ok) {
          const json = await response.json();
          setGames(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

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

  return (
    <Container className="w-auto d-flex flex-row text-center my-5 justify-content-center flex-wrap">
      {games.map(function (game) {
        const { id } = game;
        const { title, rating, price } = game.attributes;
        const { alternativeText } = game.attributes.cover_image.data.attributes;
        const { url } = game.attributes.cover_image.data.attributes.formats.medium;
        return <GamesItem key={id} id={id} gameName={title} altText={alternativeText} img={url} rating={rating} price={price} />;
      })}
    </Container>
  );
}
