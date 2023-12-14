// NovelInfo.js
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ImageBackground, View, Image } from 'react-native';
import { styles } from './ChapterStyle';
import factories from '../../redux/app/factory';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../context/AuthContext';
function Chapter({ navigation }) {
  const route = useRoute();
  const { user } = useAuth();
  const { id } = route.params;
  const [chapter, setChapter] = useState();
  const [preIDchap, setPreIDchap] = useState();
  const [content, setContent] = useState();
  const [commentList, setcommentList] = useState();
  const [nextIDchap, setNextIDchap] = useState();
  async function fetchData() {
    try {
      const resp = await factories.getNovelChapterInfo(id);
      setChapter(resp?.chapter);
      setPreIDchap(resp?.prev?._id)
      setNextIDchap(resp?.next?._id)
      setcommentList(resp?.commentList);
    } catch (error) {
    }
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  async function handleAddComment() {
    try {
      const data = {
        content: content,
        chapterId: id,
        accountId: user?._id
      }
      const resp = await factories.addComment(data)
      if (resp?._id) {
        fetchData();
      }
    } catch (errow) {

    }
  }
  function navigateToPrevChapter() {
    navigation.navigate("Chapter", { id: preIDchap });
  }
  function navigateToNextChapter() {
    navigation.navigate("Chapter", { id: nextIDchap });
  }



  console.log("🚀 ~ file: Chapter.js:88 ~ Chapter ~ user:", user)
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
        <View>
          <Text style={styles.titleCmt}>Danh sách bình luận</Text>
        </View>
        {commentList?.map(item =>
          <View style={styles.review}>
            <Image style={styles.avatar} source={{ uri: user?.avatarLink }} />
            <View style={styles.reviewInfo}>
              <View style={styles.reviewHeader}>
                <Text style={styles.title}> {item?.postedBy?.name}</Text>
              </View>
              <Text style={styles.contentReview}>{item?.content}</Text>
            </View>
          </View>)
        }
        <View>
          {/* Nút để thêm bình luận */}
          <TextInput style={styles.buttonAdd} placeholder="Nhập bình luận mới"
            onChangeText={(text) => setContent(text)}
          ></TextInput>
          <TouchableOpacity onPress={handleAddComment}>
            <Text style={styles.button}>Thêm bình luận</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
}

export default Chapter;
