// NovelInfo.js
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ImageBackground, View, Image } from 'react-native';
import { styles } from './ChapterStyle';
import factories from '../../redux/app/factory';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TabItem from '../../components/TabItem/TabItem';

function Chapter({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const [chapter, setChapter] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await factories.getNovelChapterInfo(id);
        setChapter(resp?.chapter);
      } catch (error) {
      }
    }
    fetchData();
  }, [id]);

  function navigateToPrevChapter() {

  }
  function navigateToNextChapter() {

  }
  return (
    <ScrollView style={styles.container}>
      {/* Tiêu đề chapter */}
      <View style={styles.imageInfo}>
        <Text style={styles.title} >{chapter?.title}</Text>
      </View>

      {/* Button next và prev chapter */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToPrevChapter}>
          <Text style={styles.button}>Chương trước</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToNextChapter}>
          <Text style={styles.button}>Chương sau</Text>
        </TouchableOpacity>
      </View>
      {/* Nội dung chapter */}
      <Text style={styles.chapterContent}>{chapter?.content}</Text>
      {/* Phần bình luận */}
      <View style={styles.commentSection}>
        {/* Hiển thị danh sách bình luận */}
        {chapter?.comments?.map((comment, index) => (
          <View key={index} style={styles.commentItem}>
            <Text>{comment}</Text>
          </View>
        ))}
        {/* Nút để thêm bình luận */}
        <TouchableOpacity>
          <Text style={styles.button}>Add Comment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Chapter;
