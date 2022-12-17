import clip from "../../../Video/pexels-artem-podrez-7774457.mp4";
import styles from "./LoginVideo.module.css";

export default function LoginVideo() {
  return <video src={clip} autoPlay loop playsInline className={styles.backgroundVideo}></video>;
}
