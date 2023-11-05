import Header from './components/Header/Header';
import TopSection from './components/TopSection/TopSection';
import Footer from './components/Footer/Footer';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.Wrapper}>
      <Header/>
      <main className={styles.Main}>
        <TopSection/>
      </main>
      <Footer/>
    </div>
  )
}
