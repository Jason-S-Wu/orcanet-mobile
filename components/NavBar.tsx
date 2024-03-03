import * as React from 'react';
import { Header } from '@rneui/base';
import { View, Text } from 'react-native';

export default () => {
  const [counter, setCounter] = React.useState(0);

  const handleMenuClick = () => {
    // ONLY INCREASE COUNTER DOESN'T MAKE SENSE, BUT IT'S JUST AN EXAMPLE
    setCounter(counter + 1);
  };

  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: 'Home',
          style: { color: '#fff', fontSize: 25 },
        }}
        leftComponent={{ icon: 'menu', color: '#fff', onPress: handleMenuClick, size: 30 }}
        rightComponent={{ icon: 'home', color: '#fff', size: 30 }}
      />
      <Text>{counter}</Text>
    </View>
  );
};
