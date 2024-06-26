import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>spacin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8428536362397509"
     crossorigin="anonymous"></script>
      </Head>

      <Header />

      <Content />

      <Footer />
    </div>
  );
}
//this is the first page that the user sees.
// contains th components HEADER ; CONTENT ; FOOTER.
