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
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  setAnimateIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setFile: React.Dispatch<React.SetStateAction<MarketFile[]>>;
  setActiveHash: React.Dispatch<React.SetStateAction<string>>;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  MyFile: MarketFile[];
};

const MarketTab = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<MarketFile[]>(marketData);
  const [selectedFile, setSelectedFile] = useState<MarketFile | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showAlreadyBrought, setShowAlreadyBrought] = useState<boolean>(false);
  const {setAnimateIcon, setFile, setActiveHash, setActiveTab, MyFile} = props;

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
    const tempHash = file.fileHash;
    const tempHashList = MyFile.map(x => x.fileHash);

    if (tempHashList.includes(tempHash)) {
      setShowAlreadyBrought(true);
    } else {
      setSelectedFile(file);
      setShowConfirmation(true);
    }
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

  const handleConfirmBuy = (view : boolean) => {
    MyFile.push(selectedFile);
    setFile(MyFile)
    setAnimateIcon(true);
    setShowConfirmation(false);

    if(view){
      setActiveHash(selectedFile.fileHash);
      setActiveTab("Viewer");
    }
  };

  const handleCancelBuy = () => {
    setShowConfirmation(false);
  };

  const handleAlreadyBroughtModal = () => {
    setShowAlreadyBrought(false);
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
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowConfirmation(false)}
            >
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <Button title="View" onPress={() => handleConfirmBuy(true)} />
              <Button title="Download" onPress={() => handleConfirmBuy(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showAlreadyBrought}
        onRequestClose={() => setShowAlreadyBrought(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>File already brought</Text>
            <Button title="Cancel" onPress={handleAlreadyBroughtModal} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width as per your requirement
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width:25,
    height:25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MarketTab;
