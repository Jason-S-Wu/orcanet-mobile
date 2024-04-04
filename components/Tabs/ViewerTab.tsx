import { Text, View, StyleSheet, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

type Props = {
  videoHash : string
}

const ViewerTab = (props: Props) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const {videoHash} = props

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://localhost:5000/video?hash=' + videoHash,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        shouldPlay={true}
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
