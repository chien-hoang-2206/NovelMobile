// NovelInfo.js
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ImageBackground, View, Image } from 'react-native';
import { styles } from './NovelInfoStyle';
import factories from '../../redux/app/factory';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TabItem from '../../components/TabItem/TabItem';
import { useAuth } from "../../context/AuthContext";

function NovelInfo({ navigation }) {
  const route = useRoute();
  const [novelInfo, setNovelInfo] = useState();
  const { id } = route.params;
  const [chapterList, setChapterList] = useState(null);
  const [reviewList, setReviewList] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState('info');
  const { user } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await factories.getNovelInfo(id);
        const newNovel = resp?.novelInfo[0];
        setNovelInfo(newNovel);
        setNovelInfo(newNovel);
        setReviewList(resp?.reviewList);
        setChapterList(resp?.chapterList);
      } catch (error) {
      }
    }
    fetchData();
  }, [id]);

  function formatReadCount(readCount) {
    if (readCount >= 1000000) {
      return `${(readCount / 1000000).toFixed(1)} tr`;
    } else if (readCount >= 1000) {
      return `${(readCount / 1000).toFixed(1)} k`;
    } else {
      return readCount?.toString();
    }
  }

  async function handleAdddBookmark() {

    try {
      const data = { accountId: user?._id, novelId: id };
      const resp = await factories.addBookmark(data)
    } catch (error) {
    }
  }
  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };
  return (
    <ScrollView>
      {novelInfo && (
        <ImageBackground
          source={{ uri: novelInfo?.coverLink ?? '' }}
          style={styles.backgroundImage}
          blurRadius={6}
        >
          <View style={styles.imageInfo}>
            <Image source={{ uri: novelInfo?.coverLink ?? '' }} style={styles.image} />
            <View style={styles.novelInfo}>
              <Text style={styles.title}>{`${novelInfo?.title}`}</Text>
              <Text style={styles.author}>{`Tác giả: ${novelInfo?.author}`}</Text>
              <Text style={styles.author}>
                {novelInfo?.types?.map((item, index) => (
                  <React.Fragment key={index}>
                    {(index !== 0) && ', '}
                    <Text>{item}</Text>
                  </React.Fragment>
                ))}
              </Text>
              <TouchableOpacity style={styles.buttonAdd} onPress={() => { handleAdddBookmark() }}>
                <Text>
                  Lưu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}

      {/* Bottom section with novel details */}
      <View style={styles.container}>
        <View style={styles.numberGroup} >
          <View style={styles.numberInfo} >
            <Text style={styles.number}>{novelInfo?.averageRating}</Text>
            <Text style={styles.numberTitle}>{'Đánh giá'}</Text>
          </View>
          <View style={styles.numberInfo} >
            <Text style={styles.number}>{formatReadCount(novelInfo?.readCount)}</Text>
            <Text style={styles.numberTitle}>{'Lượt đọc'}</Text>
          </View>
          <View style={styles.numberInfo} >
            <Text style={styles.number}>{novelInfo?.totalReviews}</Text>
            <Text style={styles.numberTitle}>{'Bình luận'}</Text>
          </View>
        </View>

      </View>
      <View style={styles.tabNovel} >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleIntervalChange('info')}>
            <Text style={selectedInterval === 'info' ? styles.selectedButton : styles.button}>Chi tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIntervalChange('chapter')}>
            <Text style={selectedInterval === 'chapter' ? styles.selectedButton : styles.button}>Chương</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIntervalChange('review')}>
            <Text style={selectedInterval === 'review' ? styles.selectedButton : styles.button}>Bình luận</Text>
          </TouchableOpacity>
        </View>
        <TabItem
          tab={selectedInterval}
          intro={novelInfo?.intro}
          chapterList={chapterList ?? []}
          reviewList={reviewList ?? []}
        />
      </View>
    </ScrollView>
  );
}

export default NovelInfo;
