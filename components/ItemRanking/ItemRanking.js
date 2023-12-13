import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';


const ItemRanking = ({ data = [], rank }) => {
  const review = 4.8
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.coverLink }} style={styles.image} />
        <View style={styles.squareContainer}>
          <Text style={styles.squareText}>{item.top}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
          <>
          <View style={styles.ratingContainer}>
            <Text style={styles.infoStar}>{item.averageRating ? item.averageRating : 5}</Text>
            <StarRating 
              rating={1} 
              color='#ffd700'
              starSize={16}
              maxStars={1}
              starStyle={{padding: 0}}
            />
          </View>
            <Text style={styles.info}>Lượt đọc: {item.readCount}</Text>
          </>
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
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  squareContainer: {
    backgroundColor: 'orange', // Màu sắc của ô vuông
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 10
  },
  squareText: {
    color: 'white',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 5,
    color: '#666',
  },
  infoStar: {
    marginLeft: 5,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ItemRanking;
