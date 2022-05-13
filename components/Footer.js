import styles from "./Footer.module.css";
import Image from "next/image";
import space2 from "../images/space-2.jpg";
import { DiGithubBadge } from "react-icons/di";
import { FiTwitter } from "react-icons/fi";
import { SiGmail, SiLua } from "react-icons/si";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.cont}>
        <div className={styles.text}>
          <h1>about us</h1>
          <p>
            <span className={styles.purple}>spacin</span> is built for users who
            like to know about space, we get our information from trusted&nbsp;
            <a className={styles.a} href="https://www.nasa.gov/">
              sources
            </a>
            , so if you like space, sign in.
          </p>
        </div>
        <Image
          placeholder="blur"
          className={styles.img}
          src={space2}
          width={400}
          height={350}
        />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="https://github.com/yahyaabh">
            <a target="_blank" className={styles.link}>
              <DiGithubBadge className={styles.icon} />
              &nbsp; GITHUB
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/Yahya_abh">
            <a target="_blank" className={styles.link}>
              <FiTwitter />
              &nbsp; TWITTER
            </a>
          </Link>
        </li>
        <li>
          <Link href="mailto:yehia.abu.alhassan.01@gmail.com">
            <a target="_blank" className={styles.link}>
              <SiGmail />
              &nbsp; EMAIL
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
