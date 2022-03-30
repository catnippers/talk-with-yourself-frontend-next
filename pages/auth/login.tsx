import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
  }, []);

  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  );
};

export default Login;
