import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Item = ({ title, illustration, index ,id}) =>{
  const navigation = useNavigation();
  const navigateToNovelInfo = () => {
    navigation.navigate('NovelInfo', { id });
  };
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={navigateToNovelInfo}>
      <Image source={{ uri: illustration }} style={styles.image} />
      <View style={styles.rankContainer}>
        <Text style={styles.rankText}>{index + 1}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const FlatListPopular = ({ data = [] }) => {
  const renderItem = ({ item, index }) => (
    <Item title={item.title} id={item._id} illustration={item.coverLink}  index={index} />
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={screenWidth * 0.8}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth * 0.3,
    height: 250,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    position: 'relative',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: '70%', // Reduce the height of the image to 70%
    width: '100%',
    borderRadius: 8,
  },
  rankContainer: {
    position: 'absolute',
    bottom: 90,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 20,
    padding: 8,
    zIndex: 5,
  },
  rankText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  typeText: {
    position: 'absolute',
    textAlign: 'center',
    top: '20%', // Place the type text at 20% from the top
    left: 0,
    right: 0,
    color: '#fff',
    fontWeight: '900',
    fontSize: 20,
    zIndex: 3,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingBottom: 10,
    textAlign: 'left',
    color: '#636971',
    fontWeight: '900',
    fontSize: 13,
  },
});

export default FlatListPopular;
