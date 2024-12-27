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
  albums: AlbumType[];
  handlePress: (item: AlbumType) => void;
};

export type LatestAlbum = {
  listId: number;
  videoId: string;
  albumType?: AlbumType; // 추가되어야함
};

export type LatestAlbumsResponse = {
  list: LatestAlbum[];
};

export type BookMarkListProps = {
  albums: AlbumType[];
  handlePress: (item: AlbumType) => void;
};

export type BookMarkResponse = {
  markList: BookMarkItem[];
};

export type BookMarkItem = {
  markId: string;
  videoId: string;
};
