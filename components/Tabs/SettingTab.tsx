import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const SettingTab = () => {
  const [generatedKey, setGeneratedKey] = useState<string|null>(null);

  const handleGenerateKey = () => {
    const newKey = Math.random().toString(36).substring(2, 10);
    setGeneratedKey(newKey);
  };

  return (
    <View style={styles.container}>
      <Text>Current Key</Text>
      <View style={styles.keyContainer}>
        <Text>{generatedKey ? generatedKey : 'No Key Generated'}</Text>
      </View>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleGenerateKey}
      >
        <Text style={styles.actionText}>Generate Key</Text>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    fontWeight: 'bold',
  },
  keyContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 10,
  },
});

export default SettingTab;
