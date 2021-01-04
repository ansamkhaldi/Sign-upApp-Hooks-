import React from 'react';
import * as S from './style';
import { Row, Col } from 'antd';
import logo from '../../assets/images/SmalLogo.png';
import Dot from '../../assets/images/Dot.png';
import Vector1 from '../../assets/images/Vector1.png';
import Vector from '../../assets/images/Vector.png';

export default function LiftComponent(props) {
  return (
    <Col xs={24} md={10} lg={10}>
      <S.BackgroundDiv>
        <Row>
          <img src={logo} alt="logo" />
        </Row>
        <S.DivDot>
          <S.ImgDot src={Dot} alt="Dot" />
        </S.DivDot>
        <Row>
          <S.Text>
            <S.Span>“</S.Span>
            <S.P>
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </S.P>
            <S.H>Hideo Kojima</S.H>
          </S.Text>
        </Row>
        <S.DivDot1>
          <S.ImgVector1 src={Vector1} alt="Vector1" />
        </S.DivDot1>
        <Row>
          <S.ImgVector src={Vector} alt="Vector" />
        </Row>
      </S.BackgroundDiv>
    </Col>
  );
}
