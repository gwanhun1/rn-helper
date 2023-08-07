import React, { useRef, useEffect } from 'react';
import { Image, Animated, View, Dimensions } from 'react-native';
import { styled } from 'styled-components';

const StyledAnimatedImage = styled(Animated.Image)`
  height: 180px;
  margin: 30px 0;
`;

const How = () => {
  const imageSource = require('../../../assets/how.png');

  const imageWidth = 3700;
  const screenWidth = Dimensions.get('window').width;

  const scrollX = useRef(new Animated.Value(-imageWidth + screenWidth)).current; // 시작 값을 수정

  useEffect(() => {
    const animation = Animated.timing(scrollX, {
      toValue: 0, // 이미지가 끝까지 이동하도록 설정
      duration: 20000, // 12초간 애니메이션 진행
      useNativeDriver: false,
    });

    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -imageWidth + screenWidth, // 이미지 처음으로 이동
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

export default How;