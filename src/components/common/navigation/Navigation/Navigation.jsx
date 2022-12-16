import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../../../logo/Logo-Raw-alt-color3.png";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const getUserFromLocalStorage = localStorage.getItem("userdetails");
  const userDetails = JSON.parse(getUserFromLocalStorage);
  return (
    <>
      {userDetails ? (
        <Navbar className={styles.navigtaion}>
          <Container>
            <Navbar.Brand href="/home" className={styles.brand}>
              <img src={logo} width="100%" className={styles.logo} alt="Bits and bots logo" />
            </Navbar.Brand>
            <div>Hey hallo</div>
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
