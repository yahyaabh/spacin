import styles from "./Header.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
function Header() {
  const { user, isLoading, error } = useUser();
  return (
    <div className={styles.navbar}>
      <p className={styles.logo}>
        spac<span className={styles.light}>in</span>
      </p>
      <ul className={styles.links}>
        {user ? (
          <a href="/api/auth/logout" className={styles.a}>
            <li className={styles.item}>log out</li>
          </a>
        ) : (
          <a href="/api/auth/login" className={styles.a}>
            <li className={styles.item}>log in</li>
          </a>
        )}

        <Link href="https://yahyaabh.github.io/portfolio/">
          <a target="_blank" className={styles.a}>
            <li className={styles.item}>about me</li>
          </a>
        </Link>
      </ul>
    </div>
  );
}

export default header;
