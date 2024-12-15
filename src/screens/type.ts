import {RouteProp} from '@react-navigation/native';
import {RootStackParmList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {z} from 'zod';
import {signSchema} from '../schema/SignSchema';

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

export type SignFormValues = z.infer<typeof signSchema>;

export type SignInNavigationProps = StackNavigationProp<
  RootStackParmList,
  'SignInScreen'
>;

export type SignUpNavigationProps = StackNavigationProp<
  RootStackParmList,
  'SignUpScreen'
>;
