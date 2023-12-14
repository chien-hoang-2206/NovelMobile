// RankingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import factories from '../../redux/app/factory';
import ItemRanking from '../../components/ItemRanking/ItemRanking';

const RankingScreen = ({ route, navigation }) => {
  const [selectedInterval, setSelectedInterval] = useState('view');

  const [newNovels, setNewNovels] = useState([]);
  useEffect(() => {
    async function fetchData(fetchFunction) {
      try {
        const response = await fetchFunction();
        setNewNovels(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (selectedInterval === 'view') {
      fetchData(factories.getListReadCount);
    } else if (selectedInterval === 'rate') {
      fetchData(factories.getListRateCount);
    }
  }, [selectedInterval]);

  const navigateToNovelInfo = (id) => {
  };
  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };
  const renderNovelItem = ({ item }) => (
    <TouchableOpacity
      style={styles.novelItem}
      onPress={() => navigateToNovelInfo(item.id)}
    >
      <Text style={styles.novelTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleIntervalChange('view')}>
          <Text style={selectedInterval === 'view' ? styles.selectedButton : styles.button}>LƯỢT XEM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIntervalChange('rate')}>
          <Text style={selectedInterval === 'rate' ? styles.selectedButton : styles.button}>ĐÁNH GIÁ</Text>
        </TouchableOpacity>
      </View>
      <ItemRanking
        data={newNovels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNovelItem}
        rank={selectedInterval}
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
