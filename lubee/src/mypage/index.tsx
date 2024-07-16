import styled from "styled-components";
import MypageFooter from "./components/MypageFooter";
import { SettingIc, EditIc, PlayIc, HoneyYellowIc } from "@assets/index";
import HoneyBox from "./components/HoneyBox";
import Banner from "./components/Banner";

export default function index() {
  return (
    <Wrapper>
      <HoneyBox count={25} />
      <Banner />
      <MypageFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
