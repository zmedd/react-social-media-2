import React, { useEffect, useState } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";
import { Input, Button, Form, Typography } from "../components";
import { BUTTON_TYPES, emailRegex } from "../const/const";
import { api } from "../api/api";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { loading, loggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && loggedIn && history.push("/");
  }, [loading, loggedIn, history]);

  const handleInputValueChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFormError = (key, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(formData);

    if (!emailRegex.test(formData.email)) {
      handleFormError("email", "Invalid email address.");
      return;
    }

    if (formData.password.length < 8) {
      handleFormError("password", "Password must be at least 8 characters.");
      return;
    }

    const { data, status } = await api.login(formData.email, formData.password);

    if (status === 201) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("account", JSON.stringify(data.user));
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      console.warn("ERROR: ", data);
    }
  };

  return (
    <Form>
      <Typography.H1>Login</Typography.H1>
      <Input
        placeholder="Email address"
        type="email"
        error={errors.email}
        handleOnChange={handleInputValueChange}
        value={formData.email}
        name="email"
      />
      <Input
        placeholder="Password"
        type="password"
        error={errors.password}
        handleOnChange={handleInputValueChange}
        value={formData.password}
        name="password"
      />
      <Button
        buttonType={BUTTON_TYPES.PRIMARY}
        text="Log in"
        handleClick={handleSubmit}
      />
    </Form>
  );
};
