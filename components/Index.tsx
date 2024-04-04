import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ViewerTab from './Tabs/ViewerTab';
import StatsTab from './Tabs/StatsTab';
import SettingTab from './Tabs/SettingTab';
import MarketTab from './Tabs/MarketTab/MarketTab';
import TransactionTab from './Tabs/TransactionTab';
import {Feather, Ionicons, AntDesign, FontAwesome6} from '@expo/vector-icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MarketFile} from 'components/api/types';
import AnimatedIcon from './AnimatedIcon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Market');
  // mock data for now
  const [File, setFile] = useState<MarketFile[]>([]);
  const [ActiveHash, setActiveHash] = useState<string>();
  const [animateIcon, setAnimateIcon] = useState(false);

  const renderScreen = () => {
    switch (activeTab) {
      case 'Viewer':
        return <ViewerTab videoHash={ActiveHash} />;
      case 'Market':
        return (
          <MarketTab
            setAnimateIcon={setAnimateIcon}
            setFile={setFile}
            setActiveHash={setActiveHash}
            MyFile={File}
            setActiveTab={setActiveTab}
          />
        );
      case 'Stats':
        return <StatsTab />;
      case 'Setting':
        return <SettingTab />;
      case 'Transaction':
        return <TransactionTab setFile={setFile} MyFile={File} />;
      default:
        return null;
    }
  };

  const renderAnimatedIcon = () => {
    if (animateIcon) {
      return <AnimatedIcon onAnimationComplete={() => setAnimateIcon(false)} />;
    }
    return null;
  };

  const insets = useSafeAreaInsets();
  const paddingWithInsets = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View style={[styles.container, paddingWithInsets]}>
      <View style={styles.topBar}>
        <View style={styles.topBarItem}>
          <Text style={[styles.heading, styles.leftItem]}>{activeTab}</Text>
        </View>
        <View style={styles.topBarItem}>
          <Text style={[styles.heading, styles.centerItem]}>Bal: 0</Text>
        </View>
        <View style={styles.topBarItem}>
          <TouchableOpacity style={styles.rightItem}>
            <TouchableOpacity
              onPress={() => setActiveTab('Setting')}
              style={styles.tab}
            >
              <Ionicons name="settings" size={24} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => setActiveTab('Transaction')}
          style={styles.tab}
        >
          <AntDesign name="file1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Market')}
          style={styles.tab}
        >
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Stats')}
          style={styles.tab}
        >
          <Feather name="bar-chart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Transaction')}
          style={styles.tab}
        >
          <FontAwesome6 name="money-bill-transfer" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {renderAnimatedIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
    width: '100%',
  },
  topBarItem: {
    flex: 1,
  },
  rightItem: {
    alignSelf: 'flex-end',
  },
  centerItem: {
    alignSelf: 'center',
  },
  leftItem: {
    alignSelf: 'flex-start',
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
