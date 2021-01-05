import styled from 'styled-components';
import { Input, Col, Button, Form } from 'antd';
// import '~antd/dist/antd.css';
// import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 113.7px 3px 40.9px;
  text-align: center;
  height: 400px;
  /* position: absolute; */
`;
export const RigthDiv = styled.div`
  height: 625px;
  padding: 50px 130px 0px 100px;
  @media (max-width: 959px) {
    padding: 80px 80px 0px 60px;
  }
`;

export const Text = styled.div`
  position: relative;
  width: 100%;
`;
export const P = styled.p`
  max-width: 428px;
  max-height: 100px;
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  font-family: Inter;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  text-align: start;
  color: #696f79;
`;
export const Span = styled(P)`
  @import url('https://fonts.googleapis.com/css2?family=Gayathri:wght@700&display=swap');
  font-family: Gayathri;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  color: #bababa;
  margin: 60px 0px -10px 0px;
`;
export const H = styled(P)`
  font-style: normal;
  font-weight: 500;
  height: 30px;
  margin-top: 43.6px;
  position: relative;
  @media (max-width: 656px) {
    margin-top: 83.6px;
  }
`;
export const Image = styled.img`
  max-width: 200px;
  max-height: 280px;
  float: right;
  position: absolute;
  /* top: 200px; */
  top: 55%;
  left: 70%;
  @media (max-width: 959px) {
    max-width: 170px;
    max-height: 250px;
    top: 60%;
    left: 60%;
  }
  @media (max-width: 656px) {
    max-width: 170px;
    max-height: 250px;
    top: 80%;
    left: 60%;
  }
`;
export const Cl = styled(Col)`
  bottom: 0px;
  left: 30%;
`;

export const Head = styled.p`
  width: 100%;
  top: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 0px;
  color: #000000;
  float: unset;
`;
export const TextLeft = styled(Head)`
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #8692a6;
  margin-bottom: 35px;
`;
export const Div = styled.div`
  margin-bottom: -10px;
`;
export const StyledButton = styled(Button)`
  width: 44px;
  height: 44px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin: 5px;
  padding: 10px;
  position: relative;
  display: inline-block;
  top: -34px;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #f5f5f5;
  text-align: center;
  position: relative;
`;

export const Hr = styled(Line)`
  &::after {
    color: #bababa;
    background: #fff;
    content: 'Or';
    padding: 0 24px;
    position: relative;
    top: -13px;
  }
`;
export const FormItem = styled(Form.Item)`
  margin-top: -15px;
`;
export const InputEmail = styled(Input)`
  height: 40px;
  color: #8692a6;
  border-radius: 6px;
  margin-top: -9px;
`;
export const InputPassword = styled(Input.Password)`
  height: 40px;
  color: #8692a6;
  border-radius: 6px;
  margin-top: -9px;
`;
export const ButtonForm = styled(Button)`
  height: 40px;
  border-radius: 6px;
  background: #1565d8;
  margin: 5px 0px -25px 0px;
`;
export const RegisterBtn = styled(Button)`
  padding: 0px;
`;
