import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./GameRating.module.css";

export default function GameRating(props) {
  let heart = <FontAwesomeIcon icon={faHeartSolid} className={styles.heart} />;
  let openHeart = <FontAwesomeIcon icon={faHeart} className={styles.openHeart} />;
  let ratingContainer = "";

  if (props.heartRating === 1) {
    ratingContainer = (
      <div>
        <span>{heart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.heartRating === 2) {
    ratingContainer = (
      <div className={styles.heartContainer}>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.heartRating === 3) {
    ratingContainer = (
      <div className={styles.heartContainer}>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.heartRating === 4) {
    ratingContainer = (
      <div className={styles.heartContainer}>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.heartRating === 5) {
    ratingContainer = (
      <div className={styles.heartContainer}>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
      </div>
    );
  }
  return <div className={styles.mainContainer}>{ratingContainer}</div>;
}
