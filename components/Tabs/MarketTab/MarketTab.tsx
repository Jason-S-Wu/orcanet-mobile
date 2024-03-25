import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  ListRenderItemInfo,
} from 'react-native';
import {marketData} from 'components/api/MockMarketData';
import {MarketFile} from 'components/api/types';

type Props = {
  setAnimateIcon: React.Dispatch<React.SetStateAction<boolean>>;
};

const MarketTab = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<MarketFile[]>(marketData);
  const [selectedFile, setSelectedFile] = useState<MarketFile | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const {setAnimateIcon} = props;

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
    setSelectedFile(file);
    setShowConfirmation(true);
  };

  const handleCopyHash = (hash: string) => {
    console.log(`Hash ${hash} copied to clipboard`);
  };

  const handleViewDetails = (file: MarketFile) => {
    setExpandedItem(file.fileHash === expandedItem ? null : file.fileHash);
  };

  const renderFileItem = ({item}: ListRenderItemInfo<MarketFile>) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSeletFile(item)}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemHash}>Cost: {item.size}</Text>
      {expandedItem === item.fileHash && (
        <View style={styles.additionalInfoContainer}>
          <Text style={styles.itemHash}>Hash: {item.fileHash}</Text>
          <Text style={styles.itemHash}>File Owner: User </Text>
          <Text style={styles.itemHash}>ip: 123.123.123.123 </Text>
          <Text style={styles.itemHash}>Size: {item.size}</Text>
          <Text style={styles.itemHash}>Cost per MB: 1 </Text>
        </View>
      )}
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
          <Text style={styles.actionText}>
            {expandedItem === item.fileHash ? 'Hide Details' : 'View Details'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const handleConfirmBuy = () => {
    setAnimateIcon(true); 
    setShowConfirmation(false);
  };

  const handleCancelBuy = () => {
    setShowConfirmation(false);
  };

  return (
    <View style={styles.container}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={showConfirmation}
        onRequestClose={() => setShowConfirmation(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to buy this file?
            </Text>
            <Button title="Confirm" onPress={handleConfirmBuy} />
            <Button title="Cancel" onPress={handleCancelBuy} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
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
  additionalInfoContainer: {
    marginTop: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default MarketTab;
