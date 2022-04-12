import { PhotosEntity, PhotoEntity } from "../model";

const url = "http://localhost/api/photos";

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

export const putPhoto = (id, PhotoId) => {
  return fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ photo: PhotoId }),
    headers: {
      "Content-Type": "application/json",
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
