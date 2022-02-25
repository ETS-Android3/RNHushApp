import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

import {data} from './data';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home</Text>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          horizontal
          contentContainerStyle={[
            styles.scrollContentContainer,
            {paddingBottom: tabBarHeight},
          ]}>
          {data.map(item => (
            <View key={item.id} style={styles.imageContainer}>
              <Image
                style={styles.imageCard}
                source={{uri: item.image_url}}
                resizeMode="cover"
              />
              <Text style={styles.imageTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    margin: 10,
  },
  imageCard: {
    borderRadius: 14,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  imageTitle: {
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },
});

export default Home;
