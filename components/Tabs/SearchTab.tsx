import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {staticFiles} from 'components/api/FilesFromNode';
import FilesSearchBar from './FilesSearchBars';

const SearchTab = () => {
  const filesFromNode = staticFiles; // for now

  const [searchResults, setSearchResults] = useState(filesFromNode); // By default, show all files we can think about only showing the first 10 and continue loading if the network gets larger
  const [chosenFile, setChosenFile] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    if (text === '') {
      // set search results to all files if search bar is empty
      setSearchResults(filesFromNode);
      return;
    }
    // Simulate search by filtering a static list of files
    const filteredResults = filesFromNode.filter(file =>
      file.toLowerCase().startsWith(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleFileSelect = file => {
    setSearchText('');
    setSearchResults([]);
    setChosenFile(file);
  };

  return (
    <View style={styles.container}>
      <FilesSearchBar onChangeText={handleSearch} />
      <FlatList
        style={styles.listView}
        data={searchResults}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleFileSelect(item)}
            style={styles.item}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
      <View style={styles.chosenFilesContainer}>
        <Text style={styles.chosenFilesText}>Chosen File:</Text>
        <Text>{chosenFile}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    width: '90%',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chosenFilesContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  chosenFilesText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SearchTab;
