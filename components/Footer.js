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
            <span className={styles.purple}>this site</span> is built with next
            js , and we give credits to nasa for providing us with the
            data&nbsp;
            <a className={styles.a} href="https://www.nasa.gov/">
              here
            </a>
            , and if you like our work check the section below for our
            information.
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
      <div className={styles.linkcont}>
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
    </div>
  );
}

export default Footer;
