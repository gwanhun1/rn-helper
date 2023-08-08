import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const ListItemContainer = styled(View)`
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  elevation: 5; /* This will apply the shadow on Android */
  shadow-color: #000; /* This will apply the shadow on iOS */
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  width: 100%;
`;

const ListItem = ({ children }: ListItemProps) => {
  return <ListItemContainer>{children}</ListItemContainer>;
};

export default ListItem;

type ListItemProps = {
  children: ReactNode;
};
