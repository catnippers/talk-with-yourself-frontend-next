import { useForm, SubmitHandler } from 'react-hook-form';
import { inputValidation } from '../../lib/utils/consts';
import styles from './LoginForm.module.scss';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

const handleChange = (e: any) => {
  console.log(e.target.value);
};

export const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    reValidateMode: 'onBlur',
  });

  return (
    <main className={styles.login}>
      <h1>Sign In</h1>
      <form className={styles.form}>
        <Input
          type="email"
          placeholder="Username or email address"
          {...register('email')}
          onChange={handleChange}
          error={errors.email?.message}
        />
        <Input
          type="email"
          placeholder="Password"
          {...register('email')}
          onChange={handleChange}
          error={errors.email?.message}
        />
        <Button text="Sign in" type="submit" />
      </form>
    </main>
  );
};
