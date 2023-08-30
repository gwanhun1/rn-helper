import React, { useRef, useEffect } from 'react';
import { Animated, View, Dimensions } from 'react-native';
import { styled } from 'styled-components';
import WhoImg from '../../../assets/who.svg'; // Change the image source to the PNG file


const WhoSe = () => {
  const imageWidth = 2600;
  const screenWidth = Dimensions.get('window').width;

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(scrollX, {
      toValue: -imageWidth + screenWidth, // Set the image to go all the way
      duration: 6000, // animation for 5 seconds
      useNativeDriver: false,
    });

    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: 0, // go to the beginning of the image
          duration: 0, // go straight for 0 seconds
          useNativeDriver: false,
        }),
        animation,
      ]).start(loopAnimation);
    };

    loopAnimation();

    return () => animation.stop();
  }, []);

  return (
    <View style={{ width: screenWidth, overflow: 'hidden' }}>
      <Animated.View
        style={{
          width: imageWidth,
          transform: [{ translateX: scrollX }],
        }}
      ><WhoImg/>
      </Animated.View>
    </View>
  );
};

export default WhoSe;
