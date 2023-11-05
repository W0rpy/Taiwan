import Image from 'next/image';

import Container from '../Container/Container';

import monument from '@/public/images/monument.png';
import bridge from '@/public/images/bridge.png';
import tree from '@/public/images/tree.png';
import tower from '@/public/images/tower.png';

import styles from './TopSection.module.css'


function TopSection() {
return(
<div className={styles.TopSection}>
   <Container>
      <div className={styles.TopBlock}>
         <div className={styles.TopContent}>
            <h1 className={styles.TopTitle}>Discover your next place to travel in Taiwan</h1>
            <p className={styles.TopSubtitle}>Since 2020, weve guided more than 100.000 people to enjoy their best <span>Taiwan Experience</span></p>
            <button className={styles.TopButton}>Lets Explore</button>
         </div>
         <div className={styles.TopImages}>
            <Image src={monument} className={styles.Monument} alt='monument'/>
            <Image src={bridge} className={styles.Bridge} alt='bridge'/>
            <Image src={tree} className={styles.Tree} alt='tree'/>
            <Image src={tower} className={styles.Tower} alt='tower'/>
         </div>
      </div>
   </Container>
</div>
)}
export default TopSection;