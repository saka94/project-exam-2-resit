import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import styles from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your Name"),
    adress: yup.string().required("please enter your adress").min(5, "must be atleast 5 charactes long").required("Please enter your adress"),
    cardnumber: yup.number().min(16, "must be 16 numbers long"),
    cardholdername: yup.string().required("please enter card holders name"),
    ccv: yup.number().min(3, "ccv needs to be 3 characters"),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();

  function navigateHome() {
    navigate("/home");
  }

  return (
    <Container className={styles.formContainer}>
      <h1 className={styles.h1}>Checkout</h1>
      <Form onSubmit={navigateHome}>
        <p id="error__text" style={{ display: "none" }}>
          Wrong username or Password
        </p>
        <Form.Group className="mb-3">
          <div className="d-flex flex-column">
            <Form.Label className={styles.lableText}>Name</Form.Label>
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <Form.Control {...register("name")} type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="d-flex flex-column">
            <Form.Label className={styles.lableText}>Adress</Form.Label>
            {errors.adress && <span>{errors.adress.message}</span>}
          </div>
          <Form.Control {...register("adress")} type="text" placeholder="Adress" />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="d-flex flex-column">
            <Form.Label className={styles.lableText}>Card number</Form.Label>
            {errors.cardnumber && <span>{errors.cardnumber.message}</span>}
          </div>
          <Form.Control {...register("cardnumber")} type="password" placeholder="cardnumber" />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="d-flex flex-column">
            <Form.Label className={styles.lableText}>Card holder name</Form.Label>
            {errors.cardholdername && <span>{errors.cardholdername.message}</span>}
          </div>
          <Form.Control {...register("cardholdername")} type="text" placeholder="card holder name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="d-flex flex-column">
            <Form.Label className={styles.lableText}>Ccv</Form.Label>
            {errors.ccv && <span>{errors.ccv.message}</span>}
          </div>
          <Form.Control {...register("ccv")} type="password" placeholder="ccv" />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}
