// NovelInfo.styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 5,
    minHeight: '100vh',
    marginTop: -30,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'column',
    gap: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imageInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '10%',
  },
  novelInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  topNovelContainer: {
    flex: 2,
    padding: 0,
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: '700',
  },
  normal: {
    fontSize: 18,
    fontWeight: '700',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  numberGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    padding: 20,
  },

  numberInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 25,
  },
  numberTitle: {

  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 15,

  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  author: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  intro: {
    // Add your intro styles here
  },
  tabNovel: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    minHeight: 60,
    padding: 20,
  },
  buttonAdd: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#00A7EB',
    backgroundColor: '#E5F7FF',
    borderRadius: 5,
    width: 50
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00A7EB',
    backgroundColor: '#E5F7FF',
    borderRadius: 15,
  },
  selectedButton: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    backgroundColor: '#05AFFF',
    borderRadius: 15,
  },
});
