import React, { useEffect, useState } from "react";
import { useSession } from "../hooks";
import { useHistory, Link } from "react-router-dom";
import { Input, Button, Form, Typography } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BUTTON_TYPES, emailRegex } from "../const/const";
import { api } from "../api/api";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { loading, loggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && loggedIn && history.push("/");
  }, [loading, loggedIn, history]);

  const handleInputValueChange = (key, value) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleErrors = (key, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    setErrors({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      repeatPassword: "",
    });

    const { first_name, last_name, email, password, repeatPassword } =
      registerData;

    if (first_name.length < 3) {
      handleErrors("first_name", "First name must be at least 3 characters.");
      return;
    }
    if (last_name.length < 3) {
      handleErrors("last_name", "Last name must be at least 3 characters.");
      return;
    }
    if (!emailRegex.test(email)) {
      handleErrors("email", "Please enter a valid email address.");
      return;
    }

    if (password !== repeatPassword) {
      handleErrors("repeatPassword", "Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      handleErrors("repeatPassword", "Password must be at least 8 characters");
      return;
    }

    async function submitRegisterForm() {
      const { data, status } = await api.register(
        first_name,
        last_name,
        email,
        password
      );

      status === 201
        ? toast.success("Account created successfully. You can now log in.")
        : toast.error("Something went wrong. Try again later. " + data);
    }

    try {
      for (const key in errors) {
        if (errors[key] !== "") {
          console.log("error in " + key);
          throw new Error("Can not submit form.");
        }
      }
      submitRegisterForm();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Form>
      <Typography.H1>Register</Typography.H1>
      <ToastContainer />
      <Input
        value={registerData.first_name}
        handleOnChange={handleInputValueChange}
        type="text"
        name="first_name"
        error={errors.first_name}
        placeholder="First name"
      />
      <Input
        value={registerData.last_name}
        handleOnChange={handleInputValueChange}
        type="text"
        name="last_name"
        error={errors.last_name}
        placeholder="Last name"
      />
      <Input
        value={registerData.email}
        handleOnChange={handleInputValueChange}
        type="email"
        name="email"
        error={errors.email}
        placeholder="Email address"
      />
      <Input
        value={registerData.password}
        handleOnChange={handleInputValueChange}
        type="password"
        name="password"
        error={errors.password}
        placeholder="Password"
      />
      <Input
        value={registerData.repeatPassword}
        handleOnChange={handleInputValueChange}
        type="password"
        name="repeatPassword"
        error={errors.repeatPassword}
        placeholder="Repeat password"
      />
      <div>
        <Link to="/login">Have an account? Log in</Link>
      </div>
      <Button
        buttonType={BUTTON_TYPES.PRIMARY}
        text="Create account"
        handleClick={handleSubmit}
      />
    </Form>
  );
};
