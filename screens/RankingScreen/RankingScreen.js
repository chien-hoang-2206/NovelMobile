// RankingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import factories from '../../redux/app/factory';
import RecentUpdatesList from '../../components/RecentUpdatesList/RecentUpdatesList';

const RankingScreen = ({ route, navigation }) => {
  const [selectedInterval, setSelectedInterval] = useState('day');

  const [newNovels, setNewNovels] = useState([]);
  console.log("🚀 ~ file: RankingScreen.js:11 ~ RankingScreen ~ newNovels:", newNovels)
  useEffect(() => {
    async function fetchData() {
      const responseRecomendList = await factories.getNovelListHome();
      const newNovelList = responseRecomendList?.novelList
      setNewNovels(newNovelList);
    }
    fetchData();
  }, []);

  const handleNovelPress = (novelId) => {
    // Navigate to the novel details screen or perform any other action
    console.log('Pressed on novel with ID:', novelId);
  };
  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };
  const renderNovelItem = ({ item }) => (
    <TouchableOpacity
      style={styles.novelItem}
      onPress={() => handleNovelPress(item.id)}
    >
      <Text style={styles.novelTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleIntervalChange('day')}>
                <Text style={selectedInterval === 'day' ? styles.selectedButton : styles.button}>NGÀY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIntervalChange('week')}>
                <Text style={selectedInterval === 'week' ? styles.selectedButton : styles.button}>TUẦN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIntervalChange('month')}>
                <Text style={selectedInterval === 'month' ? styles.selectedButton : styles.button}>THÁNG</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIntervalChange('all')}>
                <Text style={selectedInterval === 'all' ? styles.selectedButton : styles.button}>TỔNG</Text>
            </TouchableOpacity>
      </View>
      <RecentUpdatesList
        data={newNovels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNovelItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  novelItem: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 10,
  },
  novelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00A7EB',
    backgroundColor: '#E5F7FF',
    borderRadius: 15,
  },
  selectedButton: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    backgroundColor: '#05AFFF',
    borderRadius: 15,
  },
});

export default RankingScreen;
