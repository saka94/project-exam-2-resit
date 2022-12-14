import styles from "./SignupForm.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignupForm() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email address")
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Not valid email address"),
    password: yup.string().required("Please enter your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function registration() {
    const userData = {
      email: document.getElementById("register__email").value,
      password: document.getElementById("register__password").value,
    };
    localStorage.setItem("userdetails", JSON.stringify(userData));
    window.location.reload();
  }

  return (
    <Form onSubmit={handleSubmit(registration)} className={styles.formSignup}>
      <h2 className={styles.loginText}>Sign up</h2>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Email address</Form.Label>
        {errors.email && <span>{errors.email.message}</span>}
        <Form.Control {...register("email")} type="email" placeholder="Enter email" id="register__email" />
        <Form.Text className={styles.fadedText}>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Password</Form.Label>
        {errors.password && <span>{errors.password.message}</span>}
        <Form.Control {...register("password")} type="password" placeholder="Password" id="register__password" />
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
