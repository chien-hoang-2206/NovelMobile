import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../context/AuthContext';


const TabItem = ({ chapterList, intro, tab, reviewList }) => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const navigateToNovelChapter = (id) => {
    navigation.navigate('Chapter', { id });
  };
  return (
    <View>
      {tab === 'info' && <Text style={styles.intro}>{intro ?? ''}</Text>}
      {tab === 'chapter' && chapterList?.map((item, index) =>
        <TouchableOpacity key={index} onPress={() => navigateToNovelChapter(item?._id)}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Chương {index + 1}</Text>
            <Text style={styles.chapter}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      {tab === 'review' && reviewList?.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <View style={styles.review}>
              <Image style={styles.avatar} source={{ uri: item?.accountInfo?.avatarLink }} />
              <View style={styles.reviewInfo}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.title}> {item?.accountInfo?.name}</Text>
                  <Text style={styles.chapter}>
                    {(
                      (item.tinhCachNhanVat / 10 +
                        item.noiDungCotTruyen / 10 +
                        item.boCucTheGioi / 10) /
                      3 * 5
                    ).toFixed(1)}
                    <AntDesign name="star" size={22} color="yellow" />
                  </Text>
                </View>
                <Text style={styles.contentReview}>{item?.content}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
      )}
    </View >
  );
};

const styles = StyleSheet.create({
  review: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  avatar: {
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  reviewInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  intro: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  image: {
    width: 80,
    height: 80,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    marginLeft: 10,
    justifyContent: 'start',
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between'
  },
  chapter: {
    fontSize: 18,
  },
  contentReview: {
    fontSize: 17,
    marginLeft: 5,
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

export default TabItem;
