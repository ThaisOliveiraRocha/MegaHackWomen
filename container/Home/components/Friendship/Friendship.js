import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import CardFriend from "../CardFriend";

export const Friendship = ({ navigation, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>{content.title}</Text>
      </View>
      <ScrollView horizontal>
        {content.friendship.map((friend, index) => (
          <View style={styles.card} key={index}>
            <CardFriend navigation={navigation} friend={friend} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 10,
    height: 320,
  },
  card: {
    width: 140,
    height: 260,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginLeft: 8,
  },
  titleContent: {
    marginVertical: 8,
  },
});

export default Friendship;
