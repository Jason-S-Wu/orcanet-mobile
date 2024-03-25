import React, {useState, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const AnimatedIcon = ({onAnimationComplete}) => {
  const [position] = useState(new Animated.ValueXY({x: -50, y: 350}));

  useEffect(() => {
    animateIcon();
  }, []);

  const animateIcon = () => {
    Animated.timing(position, {
      toValue: {x: 150, y: 350},
      duration: 500,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
      useNativeDriver: false,
    }).start(() => {
      onAnimationComplete();
    });
  };

  return (
    <Animated.View
      style={{
        position: 'absolute',
        transform: position.getTranslateTransform(),
      }}
    >
      <AntDesign name="filetext1" size={16} color="black" />
    </Animated.View>
  );
};

export default AnimatedIcon;
