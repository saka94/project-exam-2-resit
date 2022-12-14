import styles from "./SignupForm.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SignupForm() {
  return (
    <Form className={styles.formSignup}>
      <h2 className={styles.loginText}>Sign up</h2>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className={styles.label}>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.label}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className={styles.fadedText}>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.label}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Sign me up for weekly news letter" className={styles.checkBoxText} />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" className={styles.signupButton}>
          Sign up
        </Button>
      </div>
    </Form>
  );
}
