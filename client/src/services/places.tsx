import { PlacesEntity } from "../model";

const url = "http://localhost/api/stored";

export const getPlaces = (): Promise<PlacesEntity[]> => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const getPlaceById = (id: string): Promise<PlacesEntity> => {
  return fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const setPlace = (formValues: PlacesEntity[]): Promise<PlacesEntity> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const deletePlace = (id: string) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const putPhoto = (id, PhotoId) => {
  return fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ photo: PhotoId }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
