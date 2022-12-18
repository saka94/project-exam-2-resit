import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../../../logo/Logo-Raw-alt-color3.png";
import styles from "./Navigation.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const getUserFromLocalStorage = localStorage.getItem("userdetails");
  const userDetails = JSON.parse(getUserFromLocalStorage);
  const history = useNavigate();
  const [storedGameLength, setStoredGameLength] = useState(0);
  const [count, setCount] = useState("");

  function Logout() {
    localStorage.removeItem("userdetails");
    history("/");
  }

  let getGames = JSON.parse(localStorage.getItem("gamedetails"));
  useEffect(
    function () {
      async function FetchGameFromLocalStorage() {
        setStoredGameLength(getGames.length);
        if (!getGames) {
          setCount(styles.hide);
          return;
        }
        if (getGames.length > 0) {
          setCount("");
        }
        if (getGames.length === 0) {
          setCount(styles.hide);
        }
      }
      FetchGameFromLocalStorage();
    },
    [getGames]
  );

  return (
    <>
      {userDetails ? (
        <Navbar sticky="top" className={styles.navigtaion}>
          <Container>
            <Navbar.Brand href="/home" className={styles.brand}>
              <img src={logo} width="100%" className={styles.logo} alt="Bits and bots logo" />
            </Navbar.Brand>

            <Link to="/cart">
              <Button className={styles.cartButton}>
                <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
                <div
                  className={`rounded-circle bg-danger d-flex justify-content-center align-items-center ${count}`}
                  style={{ width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0 }}
                >
                  {storedGameLength}
                </div>
              </Button>
            </Link>
            <div className={styles.logoutButton} onClick={Logout}>
              Logout
            </div>
          </Container>
        </Navbar>
      ) : (
        <Navbar className={styles.navigtaion}>
          <Container className="justify-content-center">
            <Navbar.Brand href="/home" className={styles.brand}>
              <img src={logo} width="100%" className={styles.logo} alt="Bits and bots logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      )}
    </>
  );
}
