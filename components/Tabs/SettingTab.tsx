import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SettingTab = () => (
  <View style={styles.container}>
    <Text>Current Key</Text>
    <TouchableOpacity
      style={styles.actionButton}
    >
      <Text style={styles.actionText}>Generate Key</Text>
    </TouchableOpacity>    
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    fontWeight: 'bold',
  },
});

export default SettingTab;
