import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import styles from "./page.module.css";

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <div className={styles.content}>
      <Image
        className={styles.image}
        src="/harry01.png"
        alt="Next.js logo"
        width={250}
        height={300}
        priority
      />
      <div className={styles.description}>
        <h2>{t('title')}</h2>
        <p>{t('summary')}</p>
      </div>
    </div>

  );
}