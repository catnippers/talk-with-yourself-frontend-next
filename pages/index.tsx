<<<<<<< HEAD
import { AuthChecker } from '../components/AuthChecker/AuthChecker';
import { Layout } from '../components/Layout/Layout';

const Home = () => {
  return (
    <AuthChecker>
      <Layout>hej</Layout>
    </AuthChecker>
  );
=======
import Button from '@mui/material/Button';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <Button variant="contained">Hello, world!</Button>;
>>>>>>> main
};

export default Home;
