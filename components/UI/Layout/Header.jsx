import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../../assets/ecomap-logo.png";

const ImageWrapper = styled.a`
  width: 16.7%;
  height: 100px;
  background-color: #072f53;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButtonWrapper = styled.ul`
  display: flex;
  width: 83.3%;
  height: 100px;
  border-collapse: collapse;
`;

const NavButton = styled.li`
  width: 15%;
  height: 100px;
  background-color: #121533;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  color: white;
  font-weight: 700;
  border-left: 1px solid #072f53;
  cursor: pointer;
  &:hover {
    background-color: #15c0b5;
    color: #072f53;
  }
`;

const DropdownWrapper = styled.div`
  width: 40%;
`;

const SelectWrapper = styled.select`
  width: 100%;
  height: 100px;
  background-color: #072f53;
  font-size: 20px;
  color: white;
  font-weight: 700;
  border-color: #072f53;

  &:focus {
    box-sizing: border-box;
    outline: 0;
    border: 0.4px solid #15c0b5;
  }
`;

export default function Header() {
  return (
    // <nav className="bg-white max-w-screen-xl border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div className="w-full flex flex-wrap justify-between items-center mx-auto">
      <ImageWrapper href="./dashboard" className="flex items-center">
        <Image src={Logo} alt="Ecomap Logo" priority />
      </ImageWrapper>
      <NavButtonWrapper>
        <Link href="./dashboard">
          <NavButton>대시보드</NavButton>
        </Link>
        <Link href="./market-setting">
          <NavButton>매장설정</NavButton>
        </Link>
        <Link href="./service-setting">
          <NavButton>서비스 설정</NavButton>
        </Link>
        <Link href="./payback">
          <NavButton>정산</NavButton>
        </Link>
        <DropdownWrapper>
          <SelectWrapper>
            <option>스타벅스 1호점</option>
            <option>스타벅스 2호점</option>
            <option>스타벅스 3호점</option>
            <option>스타벅스 4호점</option>
          </SelectWrapper>
        </DropdownWrapper>
      </NavButtonWrapper>
    </div>
  );
  {
    /* </nav> */
  }
}
