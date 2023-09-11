import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../atoms/Card';
import { FontAwesome } from '@expo/vector-icons';
import Badge from '../atoms/Badge';
import { Flex } from '@react-native-material/core';
import { styled } from 'styled-components';
import Center from '../atoms/Center';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';

const IDInput = styled(TextInput)`
  width: 230px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #fff;
  padding-left: 10px;
`;

const PWInput = styled(TextInput)`
  height: 30px;
  width: 230px;
  padding: 0px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding-left: 10px;
  background-color: #fff;
`;

const InfoTextName = styled(Text)`
  margin: 15px;
  font-size: 20px;
  font-weight: 700;
`;

const TextBox = styled(View)`
  display: flex;
  width: 100%;
`;

const FlexBox = styled(View)`
  display: flex;
  flex-direction: row;
`;

const UsernameBox = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const IdPw = styled(Text)`
  width: 100%;
  margin-left: 20px;
  margin-top: 10px;
  color: gray;
`;

const IdPwBox = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 15px;
`;

const PwCircle = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
`;

const InfoForm = ({ modify }: InfoFormProps) => {
  const [user, setUser] = useRecoilState<any>(isUser);
  const [formData, setFormData] = useState({
    id: user.email,
    password: '비밀번호123123',
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData({ id: user.email, password: '123123' });
  }, [user]);

  return (
    <FlexBox>
      <FontAwesome name="user-circle" size={120} color="gray" />
      <TextBox>
        <UsernameBox>
          <InfoTextName>정관훈</InfoTextName>
          <Badge color="gray" fontSize={8}>
            일반회원
          </Badge>
        </UsernameBox>
        {modify ? (
          <>
            <IdPwBox>
              <IDInput
                value={formData.id}
                onChangeText={(value) => handleChange('id', value)}
              />
            </IdPwBox>
            <IdPwBox>
              <PWInput
                value={formData.password}
                onChangeText={(value) => handleChange('password', value)}
              />
            </IdPwBox>
          </>
        ) : (
          <>
            <IdPw>{formData.id}</IdPw>

            <IdPw>
              {formData.password.split('').map((char, index) => (
                <PwCircle key={index} />
              ))}
            </IdPw>
          </>
        )}
      </TextBox>
    </FlexBox>
  );
};

export default InfoForm;

type InfoFormProps = {
  modify: boolean;
};
