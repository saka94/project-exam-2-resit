import Spinner from "react-bootstrap/Spinner";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Spinner className={styles.loadingSpinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
