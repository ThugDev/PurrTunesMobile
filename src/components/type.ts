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
  latestAlbums: LatestAlbumsResponse;
  handlePress: (item: SavedAlbumType) => void;
};

export type SavedAlbumType = {
  markId?: string;
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
  albumType: SavedAlbumType;
};

export type LatestAlbumsResponse = {
  list: SavedAlbumType[];
};

export type BookMarkProps = {
  album: AlbumType | SavedAlbumType;
};

export type BookMarkListProps = {
  bookmarkAlbums: BookMarkResponse;
  handlePress: (item: SavedAlbumType) => void;
};

export type BookMarkResponse = {
  markList: SavedAlbumType[];
};

export type BookMarkItem = {
  markId: string;
  videoId: string;
};
