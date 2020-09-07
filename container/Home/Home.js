import React from "react";
import {
  View,
  Button,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Friendship from "./components/Friendship";
import PostList from "./components/PostList";
import WritePost from "./components/WritePost";
import content from "./mock/content";

export const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.writePost}>
          <WritePost navigation={navigation} />
        </View>
        <View style={styles.friendship}>
          <Friendship
            navigation={navigation}
            content={content.friendshipList}
          />
        </View>
        <View>
          <PostList postList={content.postList} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  friendship: {
    marginBottom: 8,
  },
  writePost: {
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    height: 56,
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default Home;
