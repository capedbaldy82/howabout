import { NextPage } from 'next';
import Banner from '../components/home/banner';
import NewRelease from '../components/home/newRelease';

const Home: NextPage = () => {
  return (
    <section>
      <Banner />
      <NewRelease />
    </section>
  );
};

export default Home;
