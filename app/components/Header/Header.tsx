import Image from "next/image";
import Link from "next/link";

import Container from "@/app/components/Container/Container";

import logo from '@/public/images/logo.svg'

import styles from './Header.module.css'

function Header() {
return(
<header className={styles.Header}>
   <Container>
      <div className={styles.HeaderBlock}>
         <div className={styles.HeaderLogo}>
            <Image alt='logo' src={logo} className={styles.Logo}/>
         </div>
         <div className={styles.HeaderMenu}>
            <nav className={styles.HeaderNav}>
               <ul className={styles.NavItems}>
                  <li className={styles.NavItem}>
                     <Link className={styles.NavLink} href='##'>Home</Link>
                  </li>
                  <li className={styles.NavItem}>
                     <Link className={styles.NavLink} href='##'>Explore</Link>
                  </li>
                  <li className={styles.NavItem}>
                     <Link className={styles.NavLink} href='##'>About</Link>
                  </li>
               </ul>
            </nav>
            <div className={styles.HeaderSignin}>
               <button className={styles.SigninButton}>Sign In</button>
            </div>
            <div className={styles.HeaderBurger}></div>
         </div>
      </div>

   </Container>
</header>
)}
export default Header;