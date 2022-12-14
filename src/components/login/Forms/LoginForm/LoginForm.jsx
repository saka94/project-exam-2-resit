import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useNavigate();

  function loginUser() {
    const userEmail = document.getElementById("login__mail").value;
    const userPassword = document.getElementById("login__password").value;
    const errorText = document.getElementById("error__text");

    if (localStorage.getItem("userdetails")) {
      const loginDetails = JSON.parse(localStorage.getItem("userdetails"));
      if (userEmail === loginDetails.email && userPassword === loginDetails.password) {
        history("/home");
        console.log("login successful");
      } else {
        errorText.style.display = "block";
        console.log("Wrong username or Password");
      }
      reset();
    }
  }

  return (
    <Form className={styles.form} onSubmit={handleSubmit(loginUser)}>
      <h2 className={styles.loginText}>Login</h2>
      <p id="error__text" style={{ display: "none" }} className={styles.errorTextStyle}>
        Wrong username or Password
      </p>
      <Form.Group className="mb-3">
        <div className="d-flex flex-column">
          <Form.Label className={styles.label}>Email address</Form.Label>
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>
        <Form.Control {...register("email")} type="email" placeholder="Enter email" id="login__mail" />
        <Form.Text className={styles.fadedText}>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <div className="d-flex flex-column">
          <Form.Label className={styles.label}>Password</Form.Label>
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>
        <Form.Control {...register("password")} type="password" placeholder="Password" id="login__password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me logged inn" className={styles.checkBoxText} />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" className={styles.loginButton}>
          Login
        </Button>
      </div>
    </Form>
  );
}
