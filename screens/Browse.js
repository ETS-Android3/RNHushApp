import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Browse = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Browse</Text>
      </View>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});
