import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styles from "./NavigationLogin.module.css";
import logo from "../../../../logo/Logo-Raw-alt-color3.png";

export default function NavigationLogin() {
  return (
    <>
      <Navbar className={styles.navigtaion}>
        <Container className="justify-content-center">
          <Navbar.Brand href="#home" className={styles.brand}>
            <img src={logo} width="100%" className={styles.logo} alt="Bits and bots logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
