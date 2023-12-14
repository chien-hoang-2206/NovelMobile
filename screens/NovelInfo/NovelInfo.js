// NovelInfo.js
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ImageBackground, View, Image } from 'react-native';
import { styles } from './NovelInfoStyle';
import factories from '../../redux/app/factory';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

function NovelInfo({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const [novelInfo, setNovelInfo] = useState(null);
  console.log("🚀 ~ file: NovelInfo.js:12 ~ NovelInfo ~ novelInfo:", novelInfo)

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await factories.getNovelInfo(id);
        const newNovel = resp?.novelInfo[0];
        setNovelInfo(newNovel);
      } catch (error) {
        console.error('Error fetching novel info:', error);
      }
    }
    fetchData();
  }, [id]);

  if (!novelInfo) {
    return null;
  }

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: novelInfo?.coverLink ?? '' }}
        style={styles.backgroundImage}
        blurRadius={6}
      >
        <View style={styles.imageInfo}>
          {novelInfo && (
            <Image source={{ uri: novelInfo?.coverLink ?? '' }} style={styles.image} />
          )}
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
          </View>
        </View>
      </ImageBackground>
      {/* Bottom section with novel details */}
      <View style={styles.container}>
        <View  style={styles.numberGroup} >
          <View  style={styles.numberInfo} >
            <Text style={styles.number}>{'5'}</Text>
            <Text style={styles.numberTitle}>{'Đánh giá'}</Text>
          </View>
          <View  style={styles.numberInfo} >
            <Text style={styles.number}>{'20K'}</Text>
            <Text style={styles.numberTitle}>{'Lượt đọc'}</Text>
          </View>
          <View  style={styles.numberInfo} >
            <Text style={styles.number}>{'20K'}</Text>
            <Text style={styles.numberTitle}>{'Bình luận'}</Text>
          </View>
        </View>
        <Text style={styles.intro}>{novelInfo.intro}</Text>
      </View>
    </ScrollView>
  );
}

export default NovelInfo;
