const url = "http://localhost/api/stored";

export const getPlaces = () => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const getPlaceById = (id) => {
  return fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const setPlace = (formValues) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const deletePlace = (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
