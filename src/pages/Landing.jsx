import styled from "styled-components";
import img1 from "../assets/images/img1.svg";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Main>
      <LandingImg src={img1} />
      <LandingHeader>Get Started Today</LandingHeader>
      <GetStartedBtn to='/registration'>Get Started</GetStartedBtn>
    </Main>
  );
};

export default Landing;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("/stars.svg");
`;

const LandingImg = styled.img``;

const LandingHeader = styled.h1`
  margin: 52px 0 52px;
  color: #4980c0;
  text-align: center;
  //font-family: Rowdies;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GetStartedBtn = styled(Link)`
  width: 395px;
  height: 79px;
  background-color: #4980c0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  text-align: center;
  //font-family: Montserrat;
  //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
