"use client"
import styles from "./notfound.module.css";

const NotFoundPage = () => {
 return (
   <div className={styles.notfound}>
    <div className={styles.text}>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.des}>This page could not be found</p>
    </div>
   </div>
 )
};

export default NotFoundPage;
