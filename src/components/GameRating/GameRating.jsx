import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Styles from "./GameRating.module.css";

export default function GameRating(props) {
  let heart = <FontAwesomeIcon icon={faHeartSolid} className={Styles.heart} />;
  let openHeart = <FontAwesomeIcon icon={faHeart} className={Styles.openHeart} />;
  let ratingContainer = "";

  if (props.gameRating === 1) {
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

  if (props.gameRating === 2) {
    ratingContainer = (
      <div>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.gameRating === 3) {
    ratingContainer = (
      <div>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{openHeart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.gameRating === 4) {
    ratingContainer = (
      <div>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{openHeart}</span>
      </div>
    );
  }

  if (props.gameRating === 5) {
    ratingContainer = (
      <div>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
        <span>{heart}</span>
      </div>
    );
  }
  return <div className={Styles.mainContainer}>{ratingContainer}</div>;
}
