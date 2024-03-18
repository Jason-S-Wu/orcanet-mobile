import { Text, View, StyleSheet, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

const ViewerTab = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    aspectRatio: 16 / 9,
    width: '100%'
  },
});

export default ViewerTab;
