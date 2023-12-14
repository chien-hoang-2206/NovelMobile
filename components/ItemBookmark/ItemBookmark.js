import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import factories from "../../redux/app/factory";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ItemBookmark = ({ data = [] }) => {
  const { user } = useAuth();
  const [status, setStatus] = useState(true);
  const navigation = useNavigation();

  const onDeleteBookmark = async (item) => {
    const response = await factories.deleteBookmarks(user?._id, item._id);
    if (!response.error) {
      alert("Unmarked the novel");
    } else {
      alert("Marked the novel");
      setStatus(!status);
    }
  };

  const onPostBookmark = async (item) => {
    console.log("item: ", item);
    // const response = await factories.postBookmark(user?._id, item._id);
    // if (!response.error) {
    //   alert("Unmark the novel");
    // } else {
    //   alert("Mark the novel");
    //   setStatus(!status);
    // }
  };

  const navigateToNovelInfo = (item) => {
    const id = item._id;
    navigation.navigate("NovelInfo", { id });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.coverLink }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} onPress={() => navigateToNovelInfo(item)}>
          {item.title}
        </Text>
        <Text style={styles.chapterInfo}>
          Chapter {item.lastChapterNumber ?? 800}:
        </Text>
        <Text style={styles.chapterInfo}>
          {item.lastChapterName ?? "Ta Có Một Thân Bị Động Kỹ"}
        </Text>
      </View>
      {status ? (
        <Ionicons
          name="ios-bookmark-sharp"
          size={24}
          color="black"
          onPress={() => onDeleteBookmark(item)}
        />
      ) : (
        <Ionicons
          name="ios-bookmark-outline"
          size={24}
          color="black"
          onPress={() => onPostBookmark(item)}
        />
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chapterInfo: {
    marginTop: 5,
    color: "#666",
  },
});

export default ItemBookmark;
