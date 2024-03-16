import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {marketData} from 'components/api/MockMarketData';

const MarketTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(marketData);

  // when a user taps on a file
  const handleFilePress = file => {
    // "EXCHANGE HAPPEN HERE"
    console.log(`Streaming ${file.name} with hash ${file.hash}...`);
  };

  // handle search input change
  const handleSearchInputChange = query => {
    setSearchQuery(query);
    const filtered = marketData.filter(file =>
      file.hash.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderFileItem = ({item}) => (
    <TouchableOpacity onPress={() => handleFilePress(item)} style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemHash}>Hash: {item.hash} </Text>
      <Text style={styles.itemCost}>Cost: {item.cost} Ocra Coin</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Market</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by hash"
        onChangeText={handleSearchInputChange}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderFileItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    width: '100%',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemHash: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCost: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default MarketTab;
