import React from 'react';
import { Row } from 'antd';

import LiftComponent from '../component/signUpBefore/LiftComponent';
import RightComponent from '../component/signUpBefore/RightComponent';

export default function SignUpBefore(props) {
  return (
    <div>
      <Row>
        <LiftComponent />
        <RightComponent />
      </Row>
    </div>
  );
}
