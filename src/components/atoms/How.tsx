import React, { useRef, useEffect } from 'react';
import { Animated, View, Dimensions } from 'react-native';
import { styled } from 'styled-components';
import HowImg from '../../../assets/how.svg';

const StyledAnimatedImage = styled(Animated.Image)`
  height: 180px;
  margin: 30px 0px;
`;

const How = () => {
  const imageWidth = 3350;
  const screenWidth = Dimensions.get('window').width;

  const scrollX = useRef(new Animated.Value(-imageWidth + screenWidth)).current; // Set the initial value to start from the left end of the image

  useEffect(() => {
    const animation = Animated.timing(scrollX, {
      toValue: 0, // Animate to the right to reveal the entire image
      duration: 10000,
      useNativeDriver: false,
    });

    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -imageWidth + screenWidth, // Return to the initial position (left end)
          duration: 0,
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
      >
        <HowImg />
      </Animated.View>
    </View>
  );
};

export default How;
