// HomeScreen.styles.js
import styled from 'styled-components/native';

export const HomeStyle = {
  Container: styled.SafeAreaView`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;
    overflow: scroll;
  `,

  CarouselContainer: styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,

  TopNovelContainer: styled.View`
    flex: 2;
    padding: 0px 20px;
  `,

  H1: styled.Text`
    font-size: 30px;
    font-weight: 700;
  `,
  Normal: styled.Text`
    font-size: 18px;
    font-weight: 700;
  `,
};
