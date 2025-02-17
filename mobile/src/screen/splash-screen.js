import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'; // Optional, if using FastImage for better image performance

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Directly use require for the image path */}
        <FastImage
          source={require('../../common/assets/images/logo.png')}  // Correct static require path
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 50,  // Adjust the position as needed
    alignItems: 'center', // Centers the logo horizontally
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150, // Adjust the size as needed
    height: 150, // Adjust the size as needed
  },
});

export default SplashScreen;
