import { View as ViewDefault, Text } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';

const View = styled(ViewDefault)<{ height?: number }>`
  height: ${(props) => (props.height ? `${props.height}px` : '50px')};
`;

const Blank = ({ height }: BlankProps) => {
  return <View height={height} />;
};

export default Blank;

type BlankProps = {
  height?: number;
};
