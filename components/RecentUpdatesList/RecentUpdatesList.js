import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const RecentUpdatesList = ({ data =[] }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.coverLink }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.chapterInfo}>
          Chapter {item.lastChapterNumber ?? 800}:
        </Text>
        <Text style={styles.chapterInfo}>
          {item.lastChapterName ?? 'Ta Có Một Thân Bị Động Kỹ'}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chapterInfo: {
    marginTop: 5,
    color: '#666',
  },
});

export default RecentUpdatesList;
