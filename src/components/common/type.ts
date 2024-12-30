import {SavedAlbumType} from '../type';

export type AlertContextType = {
  showAlert: (message: string) => void;
};

export type AlbumGridProps = {
  data: SavedAlbumType[][];
  handlePress: (item: SavedAlbumType) => void;
};
