import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SettingTab = () => (
  <View style={styles.container}>
    <Text>Setting Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingTab;
