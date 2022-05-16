import Image from "next/image";
import space from "../images/space.jpg";
import styles from "./Content.module.css";
import Link from "next/link";
function content() {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>
          This is <span className={styles.purple}>spacin</span>
        </h1>
        <p>
          welcome to <span className={styles.purple}>spacin</span>, here you can
          find everything you need to know about space, sign in to our website
          to know everything about this magical world.
          <br></br>
          <br></br>
          <span className={styles.go}>
            <Link href="/main" passHref>
              <a className={styles.link}>GO TO SPACIN</a>
            </Link>
          </span>
        </p>
      </div>

      <div>
        <Image
          placeholder="blur"
          className={styles.img}
          src={space}
          width={400}
          height={350}
        />
      </div>
    </div>
  );
}

export default Content;
