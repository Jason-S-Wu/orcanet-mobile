import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SearchTab = () => (
  <View style={styles.container}>
    <Text>Search for Files Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchTab;
