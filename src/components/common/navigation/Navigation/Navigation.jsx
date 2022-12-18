import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../../../logo/Logo-Raw-alt-color3.png";
import styles from "./Navigation.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const getUserFromLocalStorage = localStorage.getItem("userdetails");
  const userDetails = JSON.parse(getUserFromLocalStorage);
  return (
    <>
      {userDetails ? (
        <Navbar sticky="top" className={styles.navigtaion}>
          <Container>
            <Navbar.Brand href="/home" className={styles.brand}>
              <img src={logo} width="100%" className={styles.logo} alt="Bits and bots logo" />
            </Navbar.Brand>

            <Button className={styles.cartButton}>
              <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
              <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0 }}>
                3
              </div>
            </Button>
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
