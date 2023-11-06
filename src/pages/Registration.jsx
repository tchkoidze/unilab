import styled from "styled-components";
import camera from "../assets/images/camera.png";
import camera1 from "../assets/images/camera1.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const avatar = data.avatar[0];

    const reader = new FileReader();

    reader.onload = function (event) {
      const avatarDataURL = event.target.result;

      // Save the avatar image to local storage
      localStorage.setItem("avatar", avatarDataURL);
    };

    reader.readAsDataURL(avatar);

    // Save the name to local storage
    localStorage.setItem("name", data.name);

    navigate("/form");
  };

  return (
    <>
      <Main>
        <RegistrationBox>
          <RegistrationHeader>Get Started</RegistrationHeader>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <PhotoInputBox>
              <Label>add a photo</Label>
              <ImgLabel htmlFor="avatar">
                <ImgUpload src={camera1} />
              </ImgLabel>
              <InputImg
                id="avatar"
                type="file"
                {...register("avatar", { required: true })}
              />
            </PhotoInputBox>
            <InputBox>
              <Label htmlFor="name">fill in you name</Label>
              <InputName
                id="name"
                type="text"
                placeholder="your name"
                {...register("name", { required: true })}
              />
            </InputBox>
            <BtnBox>
              <SigninBtn type="submit">Sign in</SigninBtn>
            </BtnBox>
          </Form>
        </RegistrationBox>
      </Main>
    </>
  );
};

export default Registration;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RegistrationBox = styled.div`
  width: 794px;
  height: 894px;
  border-radius: 25px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegistrationHeader = styled.h1`
  color: #000;
  text-align: center;
  //font-family: Montserrat;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 72px;
`;

const Form = styled.form``;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoInputBox = styled(InputBox)`
  margin-top: 72px;
  margin-bottom: 11px;
`;

const Imgheader = styled.h3``;
const ImgLabel = styled.label`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e6ebff;
  margin-top: 45px;
`;

const InputImg = styled.input`
  visibility: hidden;
`;

const ImgUpload = styled.img`
  //display: block;
`;
const Label = styled.label`
  //color: #000;
  //text-align: center;
  //font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const InputName = styled.input`
  color: #a5a5a5;

  //font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #e6ebff;
  padding: 28px 29px 29px 29px;
  outline: none;
  border: none;
  margin-top: 43px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 47px;
`;
const SigninBtn = styled.button`
  width: 395px;
  height: 74.138px;
  border-radius: 50px;
  background: #4980c0;
  color: #fff;

  //text-align: center;
  //font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;
