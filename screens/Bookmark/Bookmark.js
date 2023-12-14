import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import ItemBookmark from "../../components/ItemBookmark/ItemBookmark";
import { useAuth } from "../../context/AuthContext";
import factories from "../../redux/app/factory";
import { HomeStyle } from "../HomeScreen/HomeScreenStyle";

function Bookmark() {
  const [newNovels, setNewNovels] = useState([]);
  const { user } = useAuth();
  const idUser = user?._id;
  const [param, setParam] = useState("");

  const debouncedSetParam = debounce((searchKey) => {
    setParam(searchKey);
  }, 500);

  const onChangeValue = (value) => {
    debouncedSetParam(value);
  };

  async function fetchData() {
    const response = await factories.getBookmarks(idUser, param);
    const newNovelList = response.bookmarkList;
    setNewNovels(newNovelList);
  }
  useEffect(() => {
    fetchData();
  }, [param]);
  const novelInfo = newNovels.map((item) => item.novelInfo);
  return (
    <ScrollView>
      <HomeStyle.Container>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Tìm kiếm..."
            onChangeText={(value) => onChangeValue(value)}
          />
        </View>
        <HomeStyle.TopNovelContainer>
          <ItemBookmark data={novelInfo} reload={fetchData} />
        </HomeStyle.TopNovelContainer>
      </HomeStyle.Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    alignItems: "center",
  },
  searchBar: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
});

export default Bookmark;
