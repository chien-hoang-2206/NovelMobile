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
  commentItem: {
    backgroundColor: '#ecf0f1',
  },
  buttonAdd: {
    height: 50,
    backgroundColor: '#fff'
  }
});
