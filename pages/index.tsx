import type { NextPage } from 'next';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Page</h1>
    </Layout>
  )
}

export default Home
