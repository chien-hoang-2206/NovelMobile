import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Item = ({ title, illustration, type, id }) => {
  const navigation = useNavigation();
  const navigateToNovelInfo = id => {
    navigation.navigate('NovelInfo', { id });
  };
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToNovelInfo(id)}>
      <Image source={{ uri: illustration }} style={styles.image} />
      <LinearGradient
        colors={['rgb(112, 170, 244)', 'rgba(0,0,0,0.1)']}
        style={styles.gradient}
      />
      <Text style={styles.typeText}>{type}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
};

const CarouselTopNovel = ({ data = [] }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} illustration={item.coverLink} id={item?._id} type={item?.types[0]} />
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
    zIndex: 4,
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
