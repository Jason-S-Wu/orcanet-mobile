import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const StatsTab = () => (
  <View style={styles.container}>
    <Text>Download Stats Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatsTab;
