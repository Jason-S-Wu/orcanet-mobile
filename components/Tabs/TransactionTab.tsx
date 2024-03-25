import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
// import QRCode from 'react-native-qrcode-svg';

const TransactionPage = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      amount: '100',
      recipient: 'Recipient A',
      description: 'Transaction 1',
    },
    {
      id: '2',
      amount: '200',
      recipient: 'Recipient B',
      description: 'Transaction 2',
    },
    {
      id: '3',
      amount: '300',
      recipient: 'Recipient C',
      description: 'Transaction 3',
    },
  ]);

  const handleTransaction = () => {
    // Perform transaction logic here
    const newTransaction = {
      id: String(transactions.length + 1),
      amount,
      recipient,
      description,
    };
    setTransactions([...transactions, newTransaction]);
    // Reset form fields after transaction
    setAmount('');
    setRecipient('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction Page</Text>
      {/* <View style={styles.qrCodeContainer}>
        <QRCode value="Your QR Code Data" size={200} />
      </View> */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Recipient"
          value={recipient}
          onChangeText={text => setRecipient(text)}
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleTransaction}>
          <Text style={styles.buttonText}>Execute Transaction</Text>
        </TouchableOpacity>
      </View>
      {/* Transaction List */}
      <View style={styles.transactionList}>
        <Text style={styles.heading}>Transaction History</Text>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.transactionItem}>
              <Text>Amount: {item.amount}</Text>
              <Text>Recipient: {item.recipient}</Text>
              <Text>Description: {item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCodeContainer: {
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 100,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionList: {
    flex: 1,
    width: '100%',
  },
  transactionItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default TransactionPage;
