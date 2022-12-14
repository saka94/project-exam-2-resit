import LoginForm from "../Forms/LoginForm/LoginForm";
import SignupForm from "../Forms/SignupForm/SignupForm";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styles from "./LoginTabs.module.css";

export default function LoginTabs() {
  return (
    <>
      <h1 className={styles.h1text}>Login to enter</h1>
      <div className={styles.tabContainer}>
        <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className={styles.tabs}>
          <Tab className={styles.loginTab} eventKey="Login" title="Login">
            <LoginForm />
          </Tab>
          <Tab eventKey="Sign up" title="Sing up">
            <SignupForm />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
