import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const [name, setName] = useState("");
  const [avatarDataURL, setAvatarDataURL] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setAvatarDataURL(localStorage.getItem("avatar") || "");
    console.log(localStorage.getItem("avatar"));
  }, []);

  return (
    <HeaderContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "120px",
        }}
      >
        <Form>Form</Form>
        <Box>
          <ApiLink to="/api">API</ApiLink>
          {/*this div is for border line between api button and user name */}
          <div
            style={{
              width: "1px",
              height: "120px",
              backgroundColor: "#EBEBEB",
            }}
          ></div>
          <UserContainer>
            <UserName>{name}</UserName>
            <UserImg src={avatarDataURL} onClick={() => props.setClose(true)} />
          </UserContainer>
        </Box>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  color: #fff;
  padding: 0 62px;
  border-bottom: 1px solid #ebebeb;
  font-family: Montserrat, sans-serif;
`;

const Form = styled.p`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const ApiLink = styled(Link)`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-right: 53px;
  text-decoration: none;
  //border-right: 1px solid #ebebeb;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
  padding-left: 53px;
`;

const UserName = styled.p`
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;
