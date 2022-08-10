import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Intro } from "../components/Intro";
import { WrapperExpand } from "../components/WrapperExpand";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>initiative-process</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Intro /> */}
        <WrapperExpand />

        {/* <div className="w-full h-screen bg-white" /> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span style={{ position: "relative", width: "100px", height: "20px" }}>
            <Image src="/images/vercel.svg" alt="Vercel Logo" layout="fill" objectFit="contain" />
          </span>
        </a>
      </footer> */}
    </div>
  );
};
export default Home;
