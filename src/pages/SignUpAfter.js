import React from 'react';
import { Row } from 'antd';
import LeftComponent from '../component/signUpAfter/LeftComponent';
import RightComponent from '../component/signUpAfter/RightComponent';

export default function SignUp(props) {
  return (
    <div>
      <Row style={{ minHeight: '570px' }}>
        <LeftComponent />
        <RightComponent />
      </Row>
    </div>
  );
}
