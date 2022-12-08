import styles from "./Footer.module.css";
import logo from "../../../logo/Logo-Raw-alt-color3.png";

export default function Footer() {
  return (
    <div className={styles.footerStyling}>
      <div className="d-flex justify-content-between align-items-center mx-4 flex-wrap">
        <a href="/">
          <img className={styles.logo} src={logo} alt="Bit and Bots logo" />
        </a>
        <span className={styles.textFooter}>Copyright ©</span>
        <span className={styles.textFooter}>Design by Saka</span>
      </div>
    </div>
  );
}
