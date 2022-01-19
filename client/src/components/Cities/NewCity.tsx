import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black"
  }
});

export const NewCity = () => {
  const [formValues, handleInputChange] = useForm({
    city: "",
    fromDate: "",
    toDate: ""
  });

  const navigate = useNavigate();

  const handleSubmit = e => {
    fetch("http://localhost:9000/stored/newPlace", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));

    e.preventDefault();
    e.target.reset();
    navigate("/");
  };
  return (
    <div className="newCity_main">
      <form className="newCity_form" onSubmit={handleSubmit}>
        <div className="newCity_content">
          <h3>New travel</h3>
          <CssTextField
            type="text"
            name="city"
            id="input"
            label="Where did you go?"
            variant="standard"
            autoComplete="off"
            onChange={handleInputChange}
          />
          <div className="newCity_container-date">
            <CssTextField
              type="date"
              name="fromDate"
              id="date"
              variant="standard"
              label="Start date"
              onChange={handleInputChange}
            />
            <CssTextField
              type="date"
              name="toDate"
              id="date"
              variant="standard"
              label="End date"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button type="submit" id="button">
          Submit
        </Button>
      </form>
    </div>
  );
};
