import {RouteProp} from '@react-navigation/native';
import {RootStackParmList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

export type HomeNavigationProps = StackNavigationProp<
  RootStackParmList,
  'Home'
>;

export type PlayerScreenRouteProp = RouteProp<
  RootStackParmList,
  'PlayerScreen'
>;

export interface PlayerScreenProps {
  route: PlayerScreenRouteProp;
}
