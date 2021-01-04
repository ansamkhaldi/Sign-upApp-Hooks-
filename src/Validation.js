import React, { useEffect } from 'react';
import { useState } from 'react';
import * as yup from 'yup';

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

export default function Validation(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState(initErrors);
  const [submitted, setSubmitted] = useState(false);

  const data = { email, password, confirmPassword };

  const validateForm = async (data) => {
    try {
      await signupSchema.validate(data, { abortEarly: false });
      //   .then((data) => {
      setErrors(initErrors);
      return data;
      //   })
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
    const data = { email, password, confirmPassword };
    if (submitted) {
      validateForm(data);
    }
  }, [email, password, confirmPassword, submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    validateForm(data).then((data) => {
      console.log(data);
      //axios.post(url,data)
    });
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

  return (
    <form autoComplete="none" onSubmit={handleSubmit}>
      <h1 className="title">Register form</h1>

      {/* Email */}
      <label htmlFor="email" className={`label ${errors.email && 'error'}`}>
        Email
        <input
          onChange={handleChange}
          value={email}
          type="email"
          placeholder="Enter your Email"
          name="email"
          id="email"
          className={`field ${errors.email && 'error'}`}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </label>

      {/* Password */}
      <label
        htmlFor="password"
        className={`label ${errors.password && 'error'}`}
      >
        Password
        <input
          onChange={handleChange}
          value={password}
          type="password"
          placeholder="Enter Your Password"
          name="password"
          id="password"
          className={`field ${errors.password && 'error'}`}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </label>

      {/*Repeat Password */}
      <label
        htmlFor="confirmPassword"
        className={`label ${errors.confirmPassword && 'error'}`}
      >
        Confirm Password
        <input
          onChange={handleChange}
          value={confirmPassword}
          type="password"
          placeholder="Re-Enter Your Password"
          name="confirmPassword"
          id="confirmPassword"
          className={`field ${errors.confirmPassword && 'error'}`}
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </label>

      <button type="submit" className="registerbtn">
        Register
      </button>
    </form>
  );
}
