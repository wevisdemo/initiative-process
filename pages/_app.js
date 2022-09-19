import "../styles/globals.css";
import "../styles/font.css";
import "../styles/pointer.scss";
import "@wevisdemo/ui/styles/typography.css";
import "@wevisdemo/ui/styles/components.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const title = "Initiative law เส้นทางของกฎหมายประชาชนสุดท้ายจบที่ไหน";
  const description = "ร่วมสำรวจข้อมูลการลงชื่อเสนอกฎหมายของประชาชนต้องผ่านกระบวนขั้นตอนวกวน และไม่รู้ว่าจะจบที่ตรงไหน";
  const web_url = "https://initiative-process.vercel.app/";
  const og_image = "og_image";
  return (
    <div id="html">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />

        <meta property="og:image" content={web_url + og_image} />

        <meta property="og:url" content={web_url + og_image} />

        <meta name="twitter:title" content={title} />

        <meta name="twitter:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:image:src" content={web_url + og_image} />

        <meta property="twitter:url" content={web_url + og_image} />
        <link rel="stylesheet" href="https://design-systems.wevis.info/typography.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
