import React from 'react';
//import { Button } from 'antd';
import * as S from './style';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function SocialMedia(props) {
  return (
    <S.Div>
      <S.Line />
      <S.StyledButton>
        <FcGoogle size={22} />
      </S.StyledButton>
      <S.StyledButton>
        <FaTwitter size={22} style={{ color: '#55ACEE' }} />
      </S.StyledButton>
      <S.StyledButton>
        <FaLinkedinIn size={22} style={{ color: '#0E76A8' }} />
      </S.StyledButton>
      <S.StyledButton>
        <FaGithub size={22} />
      </S.StyledButton>
    </S.Div>
  );
}

export default SocialMedia;
