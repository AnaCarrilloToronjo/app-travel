import React, { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
});

export const NewCity = () => {
  const { user } = useContext(Context);

  const [formValues, handleInputChange] = useForm({
    city: null,
    fromDate: null,
    toDate: null,
    user: user,
  });

  const [selectedFromDate, setSelectedFromDate] = useState<Date | null>(null);
  const [selectedToDate, setSelectedToDate] = useState<Date | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    formValues.fromDate = selectedFromDate;
    formValues.toDate = selectedToDate;

    if (formValues.city) {
      setPlace(formValues).then((data) => {
        navigate("/web/login");
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start date"
                value={selectedFromDate}
                onChange={setSelectedFromDate}
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    id="date"
                    type="date"
                    name="fromDate"
                    margin="normal"
                    variant="standard"
                    autoComplete="off"
                  />
                )}
              />
              <DatePicker
                label="End date"
                value={selectedToDate}
                inputFormat="dd/MM/yyyy"
                onChange={setSelectedToDate}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    id="date"
                    name="toDate"
                    margin="normal"
                    variant="standard"
                    autoComplete="off"
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <Button type="submit" id="button">
          Submit
        </Button>
      </form>
    </div>
  );
};
