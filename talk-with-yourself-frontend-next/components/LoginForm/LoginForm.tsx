import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { inputValidation } from '../../lib/utils/consts';
import type { UserLoginData } from '../../../types';
import styles from './LoginForm.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { UserAPI } from '../../lib/api/user';

export const LoginForm = () => {
  const { handleSubmit, errors, register, reset } = useForm({
    reValidateMode: 'onBlur',
  });

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserAPI.isLogin());
  }, [dispatch, router]);

  const handleFormSubmit = async (data: UserLoginData) => {
    reset();
    dispatch(UserAPI.login(data));
    router.push('/');
  };

  return (
    <main className={styles.login}>
      <h1 className={styles.h1}>Sign In</h1>

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
      </form>
      <section className={styles.info}>
        <span>You don"t have account yet? </span>
        <Link href="/auth/register">
          <a>Create an account.</a>
        </Link>
      </section>
    </main>
  );
};
