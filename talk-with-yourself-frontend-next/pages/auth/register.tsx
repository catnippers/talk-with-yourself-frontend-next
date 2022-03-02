import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout';
import { Modal } from '../../components/Modal/Modal';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const Register = () => {
  const router = useRouter();

  const handleModalAccepted = () => {
    router.push('/auth/register');
  };

  return (
    <Layout title="Register">
      <Modal onAccept={handleModalAccepted} />
      <RegisterForm />
    </Layout>
  );
};

export default Register;
