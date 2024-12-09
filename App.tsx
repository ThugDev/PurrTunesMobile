import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './src/screens/Home';
import {AlbumType} from './src/apis/type';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PlayerScreen from './src/screens/PlayerScreen';
import SearchScreen from './src/screens/SearchScreen';

export type RootStackParmList = {
  Home: undefined;
  PlayerScreen: {album: AlbumType};
  SearchScreen: {query: string};
};

const Stack = createStackNavigator<RootStackParmList>();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
