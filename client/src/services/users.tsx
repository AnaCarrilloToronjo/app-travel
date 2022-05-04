import { UserEntity } from "../model";

const url = "http://localhost/api/users";

export const getUser = (formValues): Promise<UserEntity> => {
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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    switch (res.status) {
      case 401:
        throw new Error("Invalid login credentials");
      default:
        throw new Error(`Unknown server error occured: ${res.statusText}`);
    }
  });
};

export const setUser = (formValues): Promise<UserEntity> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const logout = () => {
  return fetch(`${url}/logout`).then();
};
