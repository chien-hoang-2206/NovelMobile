// SearchResultsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import factories from '../../redux/app/factory';
import RecentUpdatesList from '../../components/RecentUpdatesList/RecentUpdatesList';

const SearchResultsScreen = ({ route, navigation }) => {
  const [searchResults, setSearchResults] = useState([]);

  const [newNovels, setNewNovels] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const responseRecomendList = await factories.getNovelListHome();
      const newNovelList = responseRecomendList?.novelList
      setNewNovels(newNovelList);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const responseSearchResults = await factories.searchNovels(searchTerm);
  //     const results = responseSearchResults?.searchResults;
  //     setSearchResults(results);
  //   }
  //   fetchData();
  // }, [searchTerm]);

  const handleNovelPress = (novelId) => {
    // Navigate to the novel details screen or perform any other action
    console.log('Pressed on novel with ID:', novelId);
  };

  const renderNovelItem = ({ item }) => (
    <TouchableOpacity
      style={styles.novelItem}
      onPress={() => handleNovelPress(item.id)}
    >
      <Text style={styles.novelTitle}>{item.title}</Text>
      {/* Add more details or customize the display as needed */}
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {searchResults.length === 0 ? (
        <Text>No results found for "</Text>
      ) : (
        <RecentUpdatesList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNovelItem}
        />
      )}
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
});

export default SearchResultsScreen;
