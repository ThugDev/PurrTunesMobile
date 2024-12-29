import {Control, FieldErrors} from 'react-hook-form';
import {SignFormValues} from '../screens/type';
import {AlbumType} from '../apis/type';

export type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onSearchSubmit: () => void;
};

export type SignInFormProps = {
  onSubmit: () => void;
  errors: FieldErrors<SignFormValues>;
  control: Control<SignFormValues>;
  buttonText: string;
};

export type PopularListProps = {
  albums: AlbumType[];
  handlePress: (item: AlbumType) => void;
};

export type LatestListProps = {
  handlePress: (item: latestAlbumType) => void;
};

export type latestAlbumType = {
  id:
    | string
    | {
        kind: string;
        videoId: string;
      };
  title: string;
  thumbnail: latestThumbnail;
  description: string;
  channelTitle: string;
  publishedAt: string;
};

export type latestThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type LatestAlbum = {
  listId: number;
  videoId: string;
  albumType: latestAlbumType;
};

export type LatestAlbumsResponse = {
  list: latestAlbumType[];
};

export type BookMarkProps = {
  album: AlbumType | latestAlbumType;
};

export type BookMarkListProps = {
  handlePress: (item: latestAlbumType) => void;
};

export type BookMarkResponse = {
  markList: latestAlbumType[];
};

export type BookMarkItem = {
  markId: string;
  videoId: string;
};
