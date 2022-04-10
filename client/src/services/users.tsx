const url = "http://localhost/api/users";

export const getUser = (formValues) => {
  return fetch(`${url}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: formValues.username,
      password: formValues.password,
    }),
  }).then((res) => res.json());
};

export const setUser = (formValues) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};