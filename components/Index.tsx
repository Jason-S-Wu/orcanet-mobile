import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ViewerTab from './Tabs/ViewerTab';
import SearchTab from './Tabs/SearchTab';
import StatsTab from './Tabs/StatsTab';
import SettingTab from './Tabs/SettingTab';
import {Feather, FontAwesome, Ionicons} from '@expo/vector-icons';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Viewer');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Viewer':
        return <ViewerTab />;
      case 'Search':
        return <SearchTab />;
      case 'Stats':
        return <StatsTab />;
      // Market Tab
      case 'Setting':
        return <SettingTab />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.topBarButton}>
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => setActiveTab('Viewer')}
          style={styles.tab}
        >
          <FontAwesome name="play" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Search')}
          style={styles.tab}
        >
          <Feather name="file" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Stats')}
          style={styles.tab}
        >
          <Feather name="bar-chart" size={24} color="black" />
        </TouchableOpacity>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingTop: 10,
    width: '100%',
  },
  topBarButton: {
    padding: 30,
    marginTop: 40,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
    width: '100%',
  },
  tab: {
    padding: 20,
    paddingHorizontal: 30,
  },
});

export default Index;
