import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Home from './src/screens/Home';
import {AlbumType} from './src/apis/type';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PlayerScreen from './src/screens/PlayerScreen';
import SearchScreen from './src/screens/SearchScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import {AlertProvider} from './src/components/common/AlertProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Text, View} from 'react-native';

export type RootStackParmList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  Home: undefined;
  PlayerScreen: {album: AlbumType};
  SearchScreen: {query: string};
};

const Stack = createStackNavigator<RootStackParmList>();
const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={'large'} color={'#0000ff'} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isAuthenticated ? 'Home' : 'SignInScreen'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AlertProvider>
    </QueryClientProvider>
  );
};
export default App;
