import React from 'react';
import * as S from './style';
import SignUpValidation from './SignUpValidation';
import { Col } from 'antd';
import SocialMedia from './SocialMedia';

export default function RightComponent(props) {
  return (
    <Col xs={24} md={12} lg={12}>
      <S.RigthDiv>
        <S.Head>Join the game!</S.Head>
        <S.TextLeft>Go inside the best gamers social network!</S.TextLeft>
        <SocialMedia />
        <S.Hr></S.Hr>
        <SignUpValidation />
      </S.RigthDiv>
    </Col>
  );
}
