"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "../Styles/Header.module.css";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className={styles.section}>
      <div className={styles.container}>
        <Link href="/" className={pathname === "/" ? styles.active : ''}>UA</Link>
        <Link href="/ru" className={pathname === "/ru" ? styles.active : ''}>RU</Link>
        <Link href="/en" className={pathname === "/en" ? styles.active : ''}>EN</Link>
      </div>
    </header>
  );
};

export { Header };
