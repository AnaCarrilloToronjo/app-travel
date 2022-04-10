import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Context } from "../../context/context.provider";
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
  console.log("we are at login");

  const { setUser } = useContext(Context);
  const [formValues, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    /*fetch(`http://localhost/api/users/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: formValues.username,
        password: formValues.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        navigate("/");
      })
      .catch((error) => console.error("Error fetching data: ", error));*/

    getUser(formValues)
      .then((data) => {
        setUser(data.user);
        navigate("/");
      })
      .catch((error) => console.error("Error fetching data: ", error));

    e.preventDefault();
    e.target.reset();
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-container">
        <h3>Login</h3>
        <AccountCircleIcon className="login-image" />
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
