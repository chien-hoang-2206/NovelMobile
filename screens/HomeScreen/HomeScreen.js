// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { HomeStyle } from './HomeScreenStyle';
import CarouselHome from '../../components/Carousel/Carousel';
import CarouselTopNovel from '../../components/FlatTopNovel/CarouselTopNovel';
import { ScrollView } from 'react-native';
import factories from '../../redux/app/factory';
import FlatListPopular from '../../components/FlatListPopular/FlatListPopular';
import RecentUpdatesList from '../../components/RecentUpdatesList/RecentUpdatesList';

function HomeScreen({ navigation }) {
  const [newNovels, setNewNovels] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const responseRecomendList = await factories.getNovelListHome();
      const newNovelList = responseRecomendList?.novelList
      setNewNovels(newNovelList);
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <HomeStyle.Container>
        <HomeStyle.CarouselContainer>
          <CarouselHome data={newNovels}/>
        </HomeStyle.CarouselContainer>

        <HomeStyle.TopNovelContainer>
          <HomeStyle.H1>First The Top Series</HomeStyle.H1>
          <HomeStyle.Normal>Top truyện trong tuần</HomeStyle.Normal>
          <CarouselTopNovel data={newNovels}/>
        </HomeStyle.TopNovelContainer>

        <HomeStyle.TopNovelContainer>
          <HomeStyle.H1>Popular This Week</HomeStyle.H1>
          <FlatListPopular data={newNovels}/>
        </HomeStyle.TopNovelContainer>

        <HomeStyle.TopNovelContainer>
          <HomeStyle.H1>Most Comment</HomeStyle.H1>
          <FlatListPopular data={newNovels}/>
        </HomeStyle.TopNovelContainer>
        
        <HomeStyle.TopNovelContainer>
          <HomeStyle.H1>Most Recently Updated</HomeStyle.H1>
          <RecentUpdatesList data={newNovels}/>
        </HomeStyle.TopNovelContainer>
      </HomeStyle.Container>
    </ScrollView>
  );
}

export default HomeScreen;
