import Image from "next/image";
import space from "../images/space.jpg";
import styles from "./Content.module.css";
import Link from "next/link";
function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>
          This is <span className={styles.purple}>spacin</span>
        </h1>
        <p>
          welcome to <span className={styles.purple}>spacin</span>, with our
          simple website ,you can discover amazing things which we get from
          nasa's official database and we display it in form of pictures and
          text.
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
