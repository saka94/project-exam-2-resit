import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseUrl } from "../../../../constants/apiUrl";
import useLocalStorage from "../../../../hooks/useLocalStorage";
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
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useNavigate();

  const [auth, setAuth] = useLocalStorage("jwt", null);
  const [user, setUser] = useLocalStorage("user", null);

  async function onSubmit(data) {
    const url = baseUrl + "/api/auth/local";

    const options = {
      method: "POST",
      body: JSON.stringify({ identifier: data.email, password: data.password }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.jwt) {
        setAuth(json.jwt);
        setUser(json.user);
        history("/");
        window.location.reload();
      }

      if (json.error) {
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  }

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.loginText}>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="d-flex flex-column">
          <Form.Label className={styles.label}>Email address</Form.Label>
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>
        <Form.Control {...register("email")} type="email" placeholder="Enter email" />
        <Form.Text className={styles.fadedText}>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <div className="d-flex flex-column">
          <Form.Label className={styles.label}>Password</Form.Label>
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>
        <Form.Control {...register("password")} type="password" placeholder="Password" />
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
