import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


// const data = [
//     { title: `Hoa Sơn Tái Khởi`, illustration: 'https://placekitten.com/200/300' },
//     { title: 'Item 2', illustration: 'https://placekitten.com/200/301' },
//     { title: 'Item 3', illustration: 'https://placekitten.com/200/302' },
//     { title: 'Item 4', illustration: 'https://placekitten.com/200/303' },
// ];

const CustomCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const navigation = useNavigation();
  const navigateToNovelInfo = (id) => {
    navigation.navigate('NovelInfo', { id });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToNovelInfo(item?._id)}>
      <Image source={{ uri: item.coverLink }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data ?? []}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 60}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data?.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: screenWidth - 60,
    height: 400,
    borderRadius: 8,
    marginTop: 40,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: 'white',
  },
  paginationContainer: {
    // position: 'absolute',
    // bottom: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  inactiveDotStyle: {
    // Define styles for inactive dots here
  },
});

export default CustomCarousel;
