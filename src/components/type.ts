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
