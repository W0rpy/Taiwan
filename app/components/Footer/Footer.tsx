import Image from "next/image";

import decor from '@/public/images/decor_footer.svg';

import styles from './Footer.module.css';


function Footer() {
return(
<footer className={styles.Footer}>
   <Image className={styles.FooterImage} src={decor} alt='Decor'/>
</footer>
)}
export default Footer;