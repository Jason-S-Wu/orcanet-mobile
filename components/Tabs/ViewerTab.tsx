import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ViewerTab = () => (
  <View style={styles.container}>
    <Text>Viewer Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewerTab;
