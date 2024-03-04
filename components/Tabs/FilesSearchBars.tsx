import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FilesSearchBar = ({ onChangeText }) => {
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (text) => {
    setSearchText(text);
    onChangeText(text);
  };

  const handleCancelSearch = () => {
    setSearchText("");
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for files"
        value={searchText}
        onChangeText={handleChangeText}
      />
      {searchText !== "" && (
        <TouchableOpacity onPress={handleCancelSearch}>
          <Ionicons
            name="close-circle-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});

export default FilesSearchBar;
