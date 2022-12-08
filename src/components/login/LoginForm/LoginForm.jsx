import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styles from "./LoginForm.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  return (
    <>
      <h1 className={styles.h1text}>Login to enter</h1>
      <div className={styles.tabContainer}>
        <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className={styles.tabs}>
          <Tab className={styles.loginTab} eventKey="Login" title="Login">
            <Form className={styles.form}>
              <h2 className={styles.loginText}>Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.label}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={styles.label}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="Sign up" title="Sing up">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
