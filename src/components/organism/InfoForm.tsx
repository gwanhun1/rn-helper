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
import { get, getDatabase, ref } from 'firebase/database';
import app from '../../../firebaseConfig';
import { UserInfo } from '../pages/UserContents';

const IDInput = styled(TextInput)`
  width: 70%;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #fff;
  padding-left: 10px;
`;

const UserInput = styled(TextInput)`
  height: 45px;
  width: 50%;
  font-size: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #fff;
  padding-left: 10px;
  margin-left: 15px;
`;

const PWInput = styled(TextInput)`
  height: 30px;
  width: 70%;
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
  margin-left: 20px;
  margin-top: 10px;
  color: gray;
`;

const IdPwBox = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

const PwCircle = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
`;

const NoneUsername = styled(Text)`
  font-size: 12px;
  color: gray;
`;

const InfoForm = ({ modify, formData, setFormData }: InfoFormProps) => {
  const [user, setUser] = useRecoilState<any>(isUser);
  console.log(user);
  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const db = getDatabase(app);
  const dataRef = ref(db, 'users');
  useEffect(() => {
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setFormData({
            username: userData.username,
            id: userData.id,
            password: userData.password,
            grade: userData.grade,
          });
        } else {
          console.log('No data available at the "users" location');
        }
      })
      .catch((error) => {
        console.error('Error getting data from the database', error);
      });
  }, [user]);

  return (
    <FlexBox>
      <FontAwesome name="user-circle" size={120} color="gray" />
      <TextBox>
        <UsernameBox>
          {modify ? (
            <UserInput
              value={formData.username}
              onChangeText={(value) => handleChange('username', value)}
            />
          ) : (
            <>
              {formData.username ? (
                <InfoTextName>{formData.username}</InfoTextName>
              ) : (
                <NoneUsername>닉네임을 입력해주세요.</NoneUsername>
              )}
            </>
          )}
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
  formData: UserInfo;
  setFormData: any;
};
