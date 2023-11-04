import styles from './Container.module.css'

function Container({children}:{children:React.ReactNode}) {
return(
<div className={styles.Container}>
   {children}
</div>
)}
export default Container;