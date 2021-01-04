import React, { useEffect } from 'react';
import { useState } from 'react';
import * as yup from 'yup';
import * as S from './style';
import { FcGoogle } from 'react-icons/fc';

let signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'at least 8 chars')
    .matches(/[a-z]/, 'at least one lowercase char')
    .matches(/[A-Z]/, 'at least one uppercase char')
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      'at least 1 number or special char (@,!,#, etc).'
    )
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'passwords do not match'),
});

const initErrors = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpBeforeValidation(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState(initErrors);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = async (ansam) => {
    try {
      await signupSchema.validate(ansam, { abortEarly: false });

      setErrors(initErrors);
    } catch (err) {
      const newErrors = err.inner.reduce((acc, curr) => {
        console.log(acc);
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      console.dir(err.inner);
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    const ansam = { email, password, confirmPassword };
    if (submitted) {
      validateForm(ansam);
    }
  }, [submitted, email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // validateForm(ansam).then((ansam) => {
    //   console.log(ansam);
    //   //axios.post(url,ansam)
    // });
  };
  const settersObj = {
    email: setEmail,
    password: setPassword,
    confirmPassword: setConfirmPassword,
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    settersObj[name](value);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <form autoComplete="none" onSubmit={handleSubmit}>
      {/* Email */}
      <label htmlFor="email" className={`label ${errors.email && 'error'}`}>
        <S.Label>Email address*</S.Label>
        <S.InputR
          onChange={handleChange}
          value={email}
          type="email"
          placeholder="Enter email address"
          name="email"
          id="email"
          className={`field ${errors.email && 'error'}`}
        />
        {errors.email && (
          <S.DivError className="error">{errors.email}</S.DivError>
        )}
      </label>

      {/* Password */}
      <label
        htmlFor="password"
        className={`label ${errors.password && 'error'}`}
      >
        <S.Label>Create Password*</S.Label>
        <S.InputR
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          className={`field ${errors.password && 'error'}`}
        />
        {errors.password && (
          <>
            <S.DivError className="error">{errors.password}</S.DivError>
          </>
        )}
      </label>

      {/*Repeat Password */}
      <label
        htmlFor="confirmPassword"
        className={`label ${errors.confirmPassword && 'error'}`}
      >
        <S.Label>Repeat password*</S.Label>
        <S.InputR
          onChange={handleChange}
          value={confirmPassword}
          type="password"
          placeholder="Repeat Password"
          name="confirmPassword"
          id="confirmPassword"
          className={`field ${errors.confirmPassword && 'error'}`}
        />
        {errors.confirmPassword && (
          <S.DivError className="error">{errors.confirmPassword}</S.DivError>
        )}
      </label>

      <S.InputCheck onChange={onChange}>
        I agree to terms & conditions
      </S.InputCheck>

      <S.Buttonform type="primary" htmlType="submit" block>
        Register Account
      </S.Buttonform>

      <S.Hr />

      <S.Buttonlogin type="primary" htmlType="submit" block>
        <S.IconSpan>
          <FcGoogle size="20" />
        </S.IconSpan>
        <S.Log>Login</S.Log>
      </S.Buttonlogin>
    </form>
  );
}
