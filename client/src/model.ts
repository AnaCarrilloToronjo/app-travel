export interface PlaceEntity {
  city: string;
  fromDate: Date;
  toDate: Date;
  photo: string;
  user: string;
}

export interface PhotosEntity {
  place_id: string;
  photo: Buffer;
}

export interface PhotoEntity {
  photoId: string;
}
export interface UserEntity {
  username: string;
  password: string;
}
