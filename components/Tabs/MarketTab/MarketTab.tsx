import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {marketData} from 'components/api/MockMarketData';
import {MarketFile} from 'components/api/types';

const MarketTab = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  // mock data for now
  const [filteredData, setFilteredData] = useState<MarketFile[]>(marketData);

  const handleSearchInputChange = (query: string) => {
    setSearchQuery(query);
    const filtered = marketData.filter(file =>
      file.fileHash.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSeletFile = (file: MarketFile) => {
    console.log(`Selected ${file.name}`);
  };

  const handleBuyFile = (file: MarketFile) => {
    console.log(`Buying ${file.name} with Hash ${file.fileHash}`);
  };

  const handleCopyHash = (hash: string) => {
    console.log(`Hash ${hash} copied to clipboard`);
  };

  // Maybe not needed as all info is here
  const handleViewDetails = (file: MarketFile) => {
    console.log(`Viewing details of ${file.name}`);
  };

  const renderFileItem = ({item}: ListRenderItemInfo<MarketFile>) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSeletFile(item)}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemHash}>Hash: {item.fileHash}</Text>
      <Text style={styles.itemHash}>Size: {item.size}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleBuyFile(item)}
        >
          <Text style={styles.actionText}>Buy/Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleCopyHash(item.fileHash)}
        >
          <Text style={styles.actionText}>Copy Hash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleViewDetails(item)}
        >
          <Text style={styles.actionText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Market</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by hash name"
        onChangeText={handleSearchInputChange}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderFileItem}
        keyExtractor={item => item.fileHash.toString()}
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
    fontSize: 12,
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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

export default MarketTab;
