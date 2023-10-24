import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const CardContainer = styled(View)`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  elevation: 5; /* This will apply the shadow on Android */
  shadow-color: #000; /* This will apply the shadow on iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  width: 100%;
`;

const Card = ({ children }: CardProps) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

type CardProps = {
  children: ReactNode;
};
