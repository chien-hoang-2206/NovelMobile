import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const data = [
  { title: `Hoa Sơn Tái Khởi`, illustration: 'https://placekitten.com/200/300' },
  { title: 'Item 2', illustration: 'https://placekitten.com/200/301' },
  { title: 'Item 3', illustration: 'https://placekitten.com/200/302' },
  { title: 'Item 4', illustration: 'https://placekitten.com/200/303' },
];

const Item = ({ title, illustration , type }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: illustration }} style={styles.image} />
    <LinearGradient
      colors={['rgb(112, 170, 244)', 'rgba(0,0,0,0.1)']}
      style={styles.gradient}
    />
    <Text style={styles.typeText}>{type}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CarouselTopNovel = ({data = []}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} illustration={item.coverLink} type ={item?.types[0]} />
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={screenWidth * 0.8} // Adjust the snapToInterval to match the itemWidth
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth * 0.8,
    height: 380,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: 260,
    width: '54%',
    marginHorizontal: '23%',
    borderRadius: 10,
    marginTop: '16%',
    zIndex:4,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  typeText: {
    position: 'absolute',
    textAlign: 'center',
    top: 10,
    left: 0,
    right: 0,
    color: '#fff',
    fontWeight: '900',
    fontSize: 20,
  },
  title: {
    position: 'absolute',
    bottom: 3,
    left: 0,
    right: 0,
    padding: 10,
    textAlign: 'center',
    color: '#636971',
    fontWeight: '900',
    fontSize: 24,
  },
});

export default CarouselTopNovel;
