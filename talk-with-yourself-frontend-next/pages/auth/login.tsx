import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Modal } from '../../components/Modal/Modal';

const Login = () => {
  return (
    <Layout title="Login">
      <Modal />
      <LoginForm />
    </Layout>
  );
};

export default Login;
