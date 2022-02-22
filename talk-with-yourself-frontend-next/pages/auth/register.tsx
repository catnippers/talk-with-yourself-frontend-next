import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const Register = () => {
  const router = useRouter();

  const handleModalAccepted = () => {
    router.push('/auth/login');
  };

  return (
    <Layout title="Register">
      <RegisterForm />
    </Layout>
  );
};

export default Register;
