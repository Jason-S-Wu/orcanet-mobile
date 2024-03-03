import * as React from 'react';
import { Header } from '@rneui/base';
import { View } from 'react-native';
import Menu from './Menu';
import Home from './Home';

export default () => {
  const [menu, setMenu] = React.useState('Home');

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
          style: { color: '#fff', fontSize: 25 },
        }}
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => handleMenuClick('Menu'), size: 30 }}
        rightComponent={{ icon: 'home', color: '#fff', onPress: () => handleMenuClick('Home'), size: 30 }}
      />
      {renderPage()}
    </View>
  );
};
