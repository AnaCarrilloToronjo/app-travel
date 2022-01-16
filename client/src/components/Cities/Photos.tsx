import React, { useEffect, useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";

interface IPhoto {
  photoId: string;
  principal: boolean;
}

let changePhoto: boolean = false;

export const Photos = props => {
  const { id } = props;
  const [photosIDs, setPhotosIDs] = useState<IPhoto[]>([]);
  const [changePrincipalPhoto, setChangePrincipalPhoto] = useState(changePhoto);

  useEffect(() => {
    fetch(`http://localhost:9000/photos/cities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        let photos = data.map(photoID => {
          return { photoId: photoID, principal: false };
        });
        setPhotosIDs(photos);
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  const handleSelectPrincipalPhoto = (photoIdSelected: string) => {
    console.log("Lanzado");
    let principalChanged = photosIDs.map(photoID => {
      if (photoID.photoId === photoIdSelected) {
        return { photoId: photoIdSelected, principal: true };
      } else {
        return { photoId: photoID.photoId, principal: false };
      }
    });
    setPhotosIDs(principalChanged);
  };

  const handleChangePhoto = () => {
    if (changePrincipalPhoto) {
      setChangePrincipalPhoto(false);

      let principalPhoto = photosIDs.filter(photoID => {
        if (photoID.principal === true) {
          return photoID;
        }
      });

      if (principalPhoto[0].photoId) {
        fetch(`http://localhost:9000/stored/${id}`, {
          method: "PUT",
          body: JSON.stringify({ photo: principalPhoto[0].photoId }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => console.log(data));
      }
    } else {
      setChangePrincipalPhoto(true);
    }
  };

  return (
    <>
      {!changePrincipalPhoto && (
        <button onClick={handleChangePhoto}>Select principal photo</button>
      )}
      {changePrincipalPhoto && (
        <button onClick={handleChangePhoto}>Select</button>
      )}
      <div className="photos_container">
        {photosIDs.map(photoID => (
          <div key={photoID.photoId} id="photo-div">
            <img
              onClick={() =>
                changePrincipalPhoto &&
                handleSelectPrincipalPhoto(photoID.photoId)
              }
              src={`http://localhost:9000/photos/${photoID.photoId}.png`}
            />
            {changePrincipalPhoto && photoID.principal && (
              <CheckCircle className="photo-check" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
