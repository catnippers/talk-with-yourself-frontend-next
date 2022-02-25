import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { inputValidation } from '../../lib/utils/consts';
import type { UserLoginData } from '../../../types';
import styles from './LoginForm.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { UserAPI } from '../../lib/api/user';
import { getLoginStatus } from '../../store/mainSlice';

export const LoginForm = () => {
  const { handleSubmit, errors, register, reset } = useForm({
    reValidateMode: 'onBlur',
  });

  const isLogin = useSelector(getLoginStatus);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      router.push('/');
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch(UserAPI.isLogin());
  }, []);

  const handleFormSubmit = async (data: UserLoginData) => {
    reset();
    dispatch(UserAPI.login(data));
  };

  return (
    <main className={styles.login}>
      <h1 className={styles.h1}>Sign In</h1>

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

        <Button text="Sign in" type="submit" />
        <div className={styles.text}>
          You don’t have an account yet? <a href="#">Create an account.</a>
        </div>
      </form>
    </main>
  );
};
