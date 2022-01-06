import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

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
        <h3>New travel</h3>
        <input
          type="text"
          name="city"
          placeholder="Where did you go?"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <div className="newCity_container-date">
          <input
            type="date"
            name="fromDate"
            placeholder="Where did you go?"
            onChange={handleInputChange}
          />
          <input type="date" name="toDate" onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
