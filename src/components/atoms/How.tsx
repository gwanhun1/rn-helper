import React, { useRef, useEffect } from 'react';
import { Image, Animated, View, Dimensions } from 'react-native';
import { styled } from 'styled-components';

const StyledAnimatedImage = styled(Animated.Image)`
  height: 180px;
  margin: 30px 0px;
`;

const How = () => {
  const imageSource = require('../../../assets/how.png');

  // Prefetch the image when the component mounts
  useEffect(() => {
    Image.prefetch(imageSource);
  }, []);

  const imageWidth = 3700;
  const screenWidth = Dimensions.get('window').width;

  const scrollX = useRef(new Animated.Value(-imageWidth + screenWidth)).current;

  useEffect(() => {
    const animation = Animated.timing(scrollX, {
      toValue: 0,
      duration: 20000,
      useNativeDriver: false,
    });

    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -imageWidth + screenWidth,
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
      <StyledAnimatedImage
        source={imageSource}
        style={{
          width: imageWidth,
          transform: [{ translateX: scrollX }],
        }}
      />
    </View>
  );
};

export default How;
