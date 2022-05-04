import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Context } from "../../context/context.provider";
import { setPlace } from "../../services/places";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#c70039",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#c70039",
  },
  "input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 100px #f5f3f4 inset",
  },
});

export const NewCity = () => {
  const { user } = useContext(Context);

  const [formValues, handleInputChange] = useForm({
    city: "",
    fromDate: "",
    toDate: "",
    user: user,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (formValues.city) {
      setPlace(formValues).then((data) => {
        console.log(data);
        navigate("/web");
      });
    }
    e.target.reset();
    e.preventDefault();
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
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls="react-autowhatever-scrollable-container-example"
            variant="standard"
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
