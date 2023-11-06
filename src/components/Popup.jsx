import styled from "styled-components";
import Close from "../svg/Close";
import { useNavigate } from "react-router-dom";

const Popup = (props) => {
  const navigate = useNavigate();
  return (
    <PopupContainer onClick={() => props.setClose(false)}>
      <PopupBox>
        <Close onClick={() => props.setClose(false)} />
        <LogoutBtn
          onClick={() => {
            localStorage.removeItem("name");
            localStorage.removeItem("avatar");
            navigate("/");
          }}
        >
          Log out
        </LogoutBtn>
      </PopupBox>
    </PopupContainer>
  );
};

export default Popup;

const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

const PopupBox = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
`;

const LogoutBtn = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  color: red;
`;
