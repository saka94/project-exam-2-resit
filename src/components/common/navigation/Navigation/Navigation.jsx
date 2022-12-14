import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../../../logo/Logo-Raw-alt-color3.png";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <Navbar className={styles.navigtaion}>
      <Container className="justify-content-center">
        <Navbar.Brand href="#home" className={styles.brand}>
          <img src={logo} width="100%" className={styles.logo} alt="Bits and bots logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
