import { useState, useEffect } from "react";
import { baseUrl } from "../../../constants/apiUrl";
import Loading from "../../common/Loading/Loading";
import Alert from "react-bootstrap/Alert";
import { Container, Tabs, Tab } from "react-bootstrap";
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
    <Container className="w-auto flex-row text-center my-5 justify-content-center flex-wrap">
      <Tabs defaultActiveKey="arcade" id="uncontrolled-tab-example" className="mb-3 d-flex flex-wrap justify-content-center">
        <Tab eventKey="arcade" title="Arcade">
          {games.map(function (game) {
            return game.attributes.genere === "horror" ? (
              <GamesItem
                key={game.id}
                id={game.id}
                altText={game.attributes.cover_image.data.attributes.alternativeText}
                rating={game.attributes.rating}
                gameName={game.attributes.title}
                img={game.attributes.cover_image.data.attributes.url}
                price={game.attributes.price}
                description={game.attributes.description}
                genere={game.attributes.genere}
              />
            ) : (
              <div key={game.id}></div>
            );
          })}
        </Tab>
        <Tab eventKey="rpg" title="Rpg">
          {games.map(function (game) {
            return game.attributes.genere === "Rpg" ? (
              <GamesItem
                key={game.id}
                id={game.id}
                altText={game.attributes.cover_image.data.attributes.alternativeText}
                rating={game.attributes.rating}
                gameName={game.attributes.title}
                img={game.attributes.cover_image.data.attributes.url}
                price={game.attributes.price}
                description={game.attributes.description}
                genere={game.attributes.genere}
              />
            ) : (
              <div key={game.id}></div>
            );
          })}
        </Tab>
        <Tab eventKey="racing" title="Racing">
          {games.map(function (game) {
            return game.attributes.genere === "racing" ? (
              <GamesItem
                key={game.id}
                id={game.id}
                altText={game.attributes.cover_image.data.attributes.alternativeText}
                rating={game.attributes.rating}
                gameName={game.attributes.title}
                img={game.attributes.cover_image.data.attributes.url}
                price={game.attributes.price}
                description={game.attributes.description}
                genere={game.attributes.genere}
              />
            ) : (
              <div key={game.id}></div>
            );
          })}
        </Tab>
      </Tabs>
    </Container>
  );
}
