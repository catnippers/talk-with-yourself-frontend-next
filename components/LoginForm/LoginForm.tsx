import { useForm } from 'react-hook-form';
import { BiX } from 'react-icons/bi';
import { useState } from 'react';
import { inputValidation } from '../../lib/utils/consts';
import type { UserLoginData } from '../../types';
import styles from './LoginForm.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const LoginForm = () => {
  const [isAlertOpen, setIsAlertOpen] = useState<any>(null);

  const { handleSubmit, errors, register } = useForm({
    reValidateMode: 'onBlur',
  });

  const handleClose = () => setIsAlertOpen(!isAlertOpen);

  const handleFormSubmit = async (data: UserLoginData) => {
    console.log(data);
  };

  return (
    <main className={styles.login}>
      <h1 className={styles.h1}>Sign In</h1>

      {Object.keys(errors).length > 0 && !isAlertOpen ? (
        <div className={styles.alert}>
          <p>Incorrect username or password</p>
          <button onClick={handleClose}>
            <BiX />
          </button>
        </div>
      ) : null}

      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          name="email"
          placeholder="Username or email address"
          inputRef={register(inputValidation.email)}
        />

        <Input
          name="password"
          placeholder="Password"
          type="password"
          inputRef={register(inputValidation.password)}
        />

        <Button text="Sign in" type="submit" />
        <div className={styles.text}>
          You don’t have an account yet? <a href="#">Create an account.</a>
        </div>
      </form>
    </main>
  );
};
