import { AuthChecker } from '../components/AuthChecker/AuthChecker';
import { Layout } from '../components/Layout/Layout';

const Home = () => {
  return (
    <AuthChecker>
      <Layout title="Entries List">
        <div>hej</div>
      </Layout>
    </AuthChecker>
  );
};

export default Home;
