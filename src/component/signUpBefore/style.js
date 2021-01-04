import styled from 'styled-components';
import image from '../../assets/images/image.png';
import { Row, Button, Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';

export const BackgroundDiv = styled.div`
  background: rgba(30, 103, 209) url(${image}) repeat center;
  height: 625px;
  background-size: 63vh;
  background-size: 80% 625px;
  position: relative;
  padding: 40px 80px;
`;
export const DivDot = styled(Row)`
  height: 47px;
  display: block;
  padding: 5% 25% 0% 65%;
`;
export const ImgDot = styled.img`
  height: 40px;
  text-align: right;
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
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  text-align: start;
  color: #ffffff;
`;
export const Span = styled(P)`
  @import url('https://fonts.googleapis.com/css2?family=Gayathri:wght@700&display=swap');
  font-family: Gayathri;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  color: #00daf7;
  margin: 60px 0px -10px 0px;
`;
export const H = styled(P)`
  font-style: normal;
  font-weight: normal;
  height: 20px;
  margin-top: 73.6px;
  position: relative;
`;
export const DivDot1 = styled(DivDot)`
  padding: 0% 0% 0% 90%;
`;
export const ImgVector1 = styled.img`
  height: 20px;
`;
export const ImgVector = styled(ImgDot)`
  height: 70px;
  margin: 15% 90% 0% -5%;
`;

export const RigthDiv = styled.div`
  height: 625px;
  padding: 50px 130px 20px 100px;
  @media (max-width: 880px) {
    padding: 50px 80px 20px 60px;
  }
`;
export const H5 = styled.h5`
  color: #8692a6;
  font-family: Inter;
  font-style: normal;
  padding: 1px 0px 0px 5px;
`;
export const DivRegister = styled(Row)`
  margin: 20px 60px 0px 50px;
  @media (max-width: 1200px) {
    margin: 20px 20px 0px 45px;
  }
  @media (max-width: 880px) {
    margin: 20px 20px 0px 40px;
  }
`;
export const Title = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  margin-bottom: 0px;
  text-align: start;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 880px) {
    font-size: 18px;
  }
`;
export const SpanReg = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #8692a6;
  text-align: start;
  line-height: 20px;
  padding: 10px 110px 10px 0px;
  border-bottom: 1px solid #f5f5f5;
  @media (max-width: 1200px) {
    font-size: 14px;
    padding: 10px 45px 10px 0px;
  }
  @media (max-width: 880px) {
    font-size: 14px;
    padding: 10px 15px 10px 0px;
  }
`;

export const Label = styled.span`
  float: left;
  padding: 4px 0px;
  color: #696f79;
`;
export const InputCheck = styled(Checkbox)`
  height: 45px;
  float: left;
  padding-top: 11px;
`;
export const InputR = styled(Input)`
  height: 45px;
  border-radius: 6px;
  border: 1px solid #8692a6;
  color: #8692a6;
`;
export const Buttonform = styled(Button)`
  height: 45px;
  border-radius: 6px;
  background: #1565d8;
  margin: -4px 0px 4px 0px;
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
    padding: 0px 24px;
    position: relative;
    top: -13px;
  }
`;
export const Buttonlogin = styled(Buttonform)`
  background: #fff;
  color: #000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  border: none;
  margin-top: 5px;
  margin-bottom: 0px;
  padding: 0px 0px;
  text-align: center;
  &:hover {
    background: #fff;
    color: #000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  }
  span {
    height: 100%;
    width: 5%;
    text-align: start;
  }
`;
export const IconSpan = styled.span`
  margin-left: -40%;
  padding-top: 10px;
  margin-right: 33%;
`;
export const Log = styled.span`
  margin-top: 5px;
`;
export const DivError = styled.div`
  font-size: 10px;
  color: red;
`;
