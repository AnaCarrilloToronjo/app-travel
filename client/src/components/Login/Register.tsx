import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { setUser } from "../../services/users";

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

export const Register = () => {
  const [formValues, handleInputChange] = useForm({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (formValues.password === formValues.confirmPassword) {
      setUser(formValues).then((data) => console.log(data));

      e.preventDefault();
      e.target.reset();
      navigate("/");
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-container">
        <h3>Create account</h3>
        <AccountCircleIcon className="login-image" />
        <CssTextField
          type="text"
          name="username"
          id="input"
          label="Username"
          variant="standard"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <CssTextField
          type="password"
          name="password"
          id="input"
          label="Password"
          variant="standard"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <CssTextField
          type="password"
          name="confirmPassword"
          id="input"
          label="Confirm Password"
          variant="standard"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />

        <Button type="submit" id="button">
          Create
        </Button>
      </div>
    </form>
  );
};
