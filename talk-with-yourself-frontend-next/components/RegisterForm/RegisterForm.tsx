import { useForm } from 'react-hook-form';
import { BiX } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserAPI } from '../../lib/api/user';
import { inputValidation } from '../../lib/utils/consts';
import type { UserRegisterData } from '../../../types/index';
import styles from './RegisterForm.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const RegisterForm = () => {
  const { handleSubmit, errors, register, reset } = useForm({
    reValidateMode: 'onBlur',
  });

  const dispatch = useDispatch();

  const handleFormSubmit = (data: UserRegisterData) => {
    reset();
    dispatch(UserAPI.register(data));
  };

  return (
    <main className={styles.login}>
      <h1 className={styles.h1}>Sign Up</h1>

      {/* {Object.keys(errors).length > 0 && !isAlertOpen ? (
        <div className={styles.alert}>
          <p>Incorrect username or password</p>
          <button onClick={handleClose}>
            <BiX />
          </button>
        </div>
      ) : null} */}

      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          name="email"
          placeholder="Username or email address"
          error={errors.email?.message}
          inputRef={register(inputValidation.email)}
        />

        <Input
          name="password"
          placeholder="Password"
          type="password"
          error={errors.password?.message}
          inputRef={register(inputValidation.password)}
        />

        <Button text="Sign Up" type="submit" />
      </form>
    </main>
  );
};
