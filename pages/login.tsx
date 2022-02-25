import { Layout } from '../components/Layout/Layout';
import { LoginForm } from '../views/LoginForm/LoginForm';

const Login = () => {
  return (
    <Layout headerTitle="TALK WITH YOURSELF" title="Login" description="Self-therapy Journal">
import { LoginForm } from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  );
};

export default Login;
