import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styled } from "styled-components";
import AllCenter from "../../atoms/AllCenter";
import { useRecoilState } from "recoil";
import { PostContent } from "../../../recoil/Atom";

const LoadingText = styled(Text)`
  color: #4abd9d;
  font-size: 50px;
  font-weight: bold;
`;
const Four = () => {
  const [textStep, setTextStep] = useState<number>(0);
  const TextArea = [
    "조언자\n 구하는 중 😌",
    "컨셉\n 잡는 중 😂",
    "수수료\n 내는 중 🥺",
    "조합하는 중 😍",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextStep((prev) => prev + 1);
      if (textStep === 3) {
        setTextStep(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [textStep]);
  const [content, setContent] = useRecoilState(PostContent);

  if (content.content.length < 0) {
    setTextStep(0);
  }

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <AllCenter>
        <LoadingText>{TextArea[textStep]}</LoadingText>
      </AllCenter>
    </View>
  );
};

export default Four;
