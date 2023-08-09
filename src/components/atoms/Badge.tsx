import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { Flex } from '@react-native-material/core';
import { styled } from 'styled-components';

const BadgeBorder = styled(Flex)<{ color?: string }>`
  border: 1px solid ${(props) => props.color || '#50b196'};
  padding: 3px 5px;
  margin: 3px;
  border-radius: 40%;
`;

const BadgeText = styled(Text)<{ color?: string; fontSize?: number }>`
  color: ${(props) => props.color || '#50b196'};
  font-size: ${(props) => props.fontSize || 16};
`;

const Badge = ({ color, fontSize, children }: BadgeProps) => {
  return (
    <BadgeBorder justify="center" items="center" color={color}>
      <BadgeText fontSize={fontSize} color={color}>
        {children}
      </BadgeText>
    </BadgeBorder>
  );
};

export default Badge;

type BadgeProps = {
  color?: string;
  fontSize?: number;
  children: ReactNode;
};
