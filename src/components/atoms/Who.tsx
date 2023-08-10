import React, { useRef, useEffect } from 'react';
import { Image, Animated, View, Dimensions } from 'react-native';
import { styled } from 'styled-components';

const StyledAnimatedImage = styled(Animated.Image)`
  height: 180px;
  margin: 30px 0px;
`;

const Who = () => {
  const imageSource = require('../../../assets/who.png');

  const imageWidth = 4150;
  const screenWidth = Dimensions.get('window').width;

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(scrollX, {
      toValue: -imageWidth + screenWidth, // 이미지가 끝까지 이동하도록 설정
      duration: 12000, // 5초간 애니메이션 진행
      useNativeDriver: false,
    });

    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: 0, // 이미지 처음으로 이동
          duration: 0, // 0초 동안 바로 이동
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

export default Who;
