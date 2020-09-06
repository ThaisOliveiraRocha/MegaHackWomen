import React from "react";
import { View, Button, Text, ImageBackground, StyleSheet } from "react-native";
import CardPost from "../CardPost";

export const PostList = ({ navigation, postList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{postList.title}</Text>
      {postList.posts.map((post, index) => (
        <View style={styles.postContainer}>
          <CardPost cardPost={post} key={index} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopWidth: 2,
    borderColor: "#CCCCCC",
    marginHorizontal: 16,
  },
  postContainer: {
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333333",
    marginTop: 8,
  },
});

export default PostList;
