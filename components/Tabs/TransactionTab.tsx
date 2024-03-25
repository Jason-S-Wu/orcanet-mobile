import {MarketFile} from 'components/api/types';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';

const transactions = [
  {id: 1, date: '2022-01-01', amount: 50, description: 'Groceries'},
  {id: 2, date: '2022-01-05', amount: 25, description: 'Restaurant'},
  {id: 3, date: '2022-01-10', amount: 100, description: 'Clothing'},
];

type Props = {
  setFile: React.Dispatch<React.SetStateAction<MarketFile[]>>;
  MyFile: MarketFile[];
};

const TransactionPage = (props: Props) => {
  const [transactionHistory, setTransactionHistory] = useState(transactions);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const {setFile, MyFile} = props;

  const renderTransactionItem = ({item}) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text style={styles.transactionDescription}>{item.description}</Text>
    </View>
  );

  const handleViewDetails = (file: MarketFile) => {
    setExpandedItem(file.fileHash === expandedItem ? null : file.fileHash);
  };

  const handleDeleteFile = (file: MarketFile) => {
    const newList = MyFile.filter(item => item.fileHash !== file.fileHash);
    setFile(newList);
  };

  const renderFileItem = ({item}: ListRenderItemInfo<MarketFile>) => (
    <TouchableOpacity style={styles.item}>
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
          onPress={() => handleViewDetails(item)}
        >
          <Text style={styles.actionText}>
            {expandedItem === item.fileHash ? 'Hide Details' : 'View Details'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleDeleteFile(item)}
        >
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction History</Text>
      <FlatList
        data={transactionHistory}
        renderItem={renderTransactionItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.heading}>My File</Text>
      <FlatList
        data={MyFile}
        renderItem={renderFileItem}
        keyExtractor={item => item.fileHash.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transactionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transactionAmount: {
    fontSize: 16,
  },
  transactionDescription: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
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
  actionButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    fontWeight: 'bold',
  },
  additionalInfoContainer: {
    marginTop: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default TransactionPage;
