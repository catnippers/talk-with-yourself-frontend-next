import { AuthChecker } from '../components/AuthChecker/AuthChecker';
import { Layout } from '../components/Layout/Layout';

const Home = () => {
  return (
    <AuthChecker>
      <Layout>hej</Layout>
    </AuthChecker>
  );
};

export default Home;
