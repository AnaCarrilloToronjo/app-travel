import { PhotosEntity, PhotoEntity } from "../model";

export const url = `http://${process.env.API_BASE}/api/photos`;

export const getPhotoById = (id: String) => {
  return fetch(`${url}/cities/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const getPhotos = (): Promise<PhotoEntity[]> => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const uploadPhoto = (id, formData) => {
  return fetch(`${url}/${id}`, {
    method: "POST",
    body: formData,
  }).then((res) => res.json());
};

export const deletePhoto = (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
