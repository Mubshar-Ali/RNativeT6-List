import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Main = ({ data }) => {
  return (
    <View style={styles.mainbox}>
      <View>
        <Image style={styles.img} source={{ uri: data.uri }} />
      </View>
      <View style={styles.box2}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.bio}>{data.bio}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 5,
  },
  mainbox: {
    borderColor: 'black',
    borderRadius: 40,
    shadowColor: 'red',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    borderColor: 'green',
    marginLeft: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 15,
  },
});
export default Main;
