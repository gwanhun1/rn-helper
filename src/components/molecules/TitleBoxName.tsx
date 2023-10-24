import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Flex } from '@react-native-material/core';
import Center from '../atoms/Center';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: '900',
    color: '#232D3D',
  },
  name: {
    marginTop: 30,
    fontSize: 15,
    color: '#232D3D',
    opacity: 0.9,
  },
  subTitle: {
    fontSize: 10,
    color: '#232D3D',
    opacity: 0.9,
  },
  textBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

const TitleBoxName = ({ title, subTitle, color, size }: TitleBoxProps) => {
  const [user] = useRecoilState(isUser);
  return (
    <>
      <Flex justify="between" items="center" direction="row" w={'80%'}>
        {color ? (
          <>
            <Text style={[styles.title, { color, fontSize: size ? size : 30 }]}>
              {title}
            </Text>

            <View style={styles.textBox}>
              <Text style={[styles.name, { color }]}>
                {user.username && `${user.username}님,`}
              </Text>
              <Text style={[styles.subTitle, { color }]}>{subTitle}</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </>
        )}
      </Flex>
    </>
  );
};

export default TitleBoxName;

type TitleBoxProps = {
  title: string;
  subTitle?: string;
  color?: string;
  size?: number;
};
