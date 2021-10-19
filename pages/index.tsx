import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <h1 className={styles['title-homepage']}>Welcome Page</h1>
    <Footer />
    </>
  )
}

export default Home
