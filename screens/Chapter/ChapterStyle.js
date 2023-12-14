// NovelInfo.styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageInfo: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: 5,
  },
  chapterContent: {
    textAlign: 'justify'
  },
  commentSection: {
    marginTop: 20,
    paddingVertical: 50,
  },
  titleCmt: {
    fontSize: 30
  },
  commentItem: {
    backgroundColor: '#ecf0f1',
  },
  buttonAdd: {
    height: 50,
    backgroundColor: '#fff'
  },
  review: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20
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
    height: 120,
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
    fontSize: 18,
    fontWeight: 'bold',
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
