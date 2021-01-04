import React from 'react';
import * as S from '../signUpAfter/style';
import { Row, Col, Image } from 'antd';
import logo from '../../assets/images/logo.png';
import superscene from '../../assets/images/superscene.png';

export default function LeftComponent(props) {
  return (
    <Col xs={24} md={12} lg={12}>
      <S.Container>
        <Row justify="start">
          <Col xs={4} style={{ backgroundColor: 'white' }}>
            <Image width={318} height={91} src={logo}></Image>
          </Col>
        </Row>
        <Row>
          <S.Text>
            <S.Span>“</S.Span>
            <S.P>
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </S.P>
            <S.H>Hideo Kojima</S.H>
            <S.Image src={superscene} />
          </S.Text>
        </Row>
      </S.Container>
    </Col>
  );
}
