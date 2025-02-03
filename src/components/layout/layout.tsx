import React from 'react';
import {View} from 'react-native';
import BottomNavBar from './components/BottomNavBar';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>{children}</View>
      <BottomNavBar />
    </View>
  );
};

export default Layout;
