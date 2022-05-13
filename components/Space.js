import styles from "./Space.module.css";
import Image from "next/image";
import { lazy } from "react/cjs/react.production.min";
import { useState } from "react/cjs/react.development";
import { useUser } from "@auth0/nextjs-auth0";
function Space({ image, mars }) {
  const { user, isLoading, error } = useUser();
  return (
    <div>
      {user ? (
        <div>
          <div className={styles.ofday}>
            <p>{image.explanation}</p>
            <Image
              className={styles.img}
              src={image.url}
              width={600}
              height={500}
            />
          </div>
          <div method="get" className={styles.form}>
            <p>
              this section contains random photos taken from nasa rovers
              (curiosity) on mars
            </p>
            <div className={styles.mars}>
              {mars.map((e) => (
                <img className={styles.img1} src={e} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <a href="/api/auth/login" className={styles.a}>
          <h1>please log in first to access this page</h1>
          <li className={styles.item}>login</li>
        </a>
      )}
    </div>
  );
}

export default Space;
