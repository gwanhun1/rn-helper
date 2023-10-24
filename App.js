import { RecoilRoot } from "recoil";
import { StatusBar } from "expo-status-bar";
import { MyTabs } from "./Router";

export default function App() {
  return (
    <RecoilRoot>
      <MyTabs />
    </RecoilRoot>
  );
}
