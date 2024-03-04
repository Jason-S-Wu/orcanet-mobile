import React, {useState} from 'react';
import {Header} from '@rneui/base';
import {View} from 'react-native';
import Menu from './Menu';
import Home from './Index';

const Main = () => {
  const [menu, setMenu] = useState('Home');

  const handleMenuClick = (menuItem: string) => {
    setMenu(menuItem);
  };

  const renderPage = () => {
    switch (menu) {
      case 'Home':
        return <Home />;
      case 'Menu':
        return <Menu />;
      default:
        return null;
    }
  };

  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: menu,
          style: {color: '#fff', fontSize: 25},
        }}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => handleMenuClick('Menu'),
          size: 60,
        }}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => handleMenuClick('Home'),
          size: 60,
        }}
      />
      {renderPage()}
    </View>
  );
};

export default Main;
