import React from 'react';
import * as S from './style';
import { Row, Col } from 'antd';
import { IoIosArrowBack } from 'react-icons/io';
import SignUpBeforeValidation from './SignUpBeforeValidation';
import { Link } from 'react-router-dom';

// const BrowserHistory = require('react-router/lib/BrowserHistory').default;
export default function SignUpBefore(props) {
  return (
    <Col xs={24} md={14} lg={14}>
      <S.RigthDiv>
        <Row>
          {/* <Link to="/Register"> */}
          <Link to="/login">
            <IoIosArrowBack size="20" />
          </Link>
          <S.H5>Back</S.H5>
        </Row>
        <S.DivRegister>
          <S.Title>Register Individual Account!</S.Title>
          <S.SpanReg>
            For the purpose of gamers regulation, your details are required.
          </S.SpanReg>
          <Row>
            <SignUpBeforeValidation />
          </Row>
        </S.DivRegister>
      </S.RigthDiv>
    </Col>
  );
}
