import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getUser } from "../../services/users";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#c70039",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#c70039",
  },

  "input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 100px white inset",
  },
});

export const Login = () => {
  const [formValues, handleInputChange] = useForm({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    getUser(formValues)
      .then((data) => {
        navigate("/web");
      })
      .catch((error) => setError(error.message));

    e.preventDefault();
    e.target.reset();
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-container">
        <h3>Login</h3>
        <AccountCircleIcon className="login-image" />
        {error && (
          <Alert className="login-alert" severity="error">
            {error}
          </Alert>
        )}

        <CssTextField
          type="text"
          name="username"
          label="Username"
          variant="standard"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <CssTextField
          type="password"
          name="password"
          label="Password"
          variant="standard"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <Button type="submit" id="button">
          Sign in
        </Button>
        <Link to="/Register">Create account</Link>
      </div>
    </form>
  );
};
