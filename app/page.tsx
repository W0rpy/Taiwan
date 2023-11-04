import Header from './components/Header/Header'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
     Main
    </main>
    </>
  )
}
