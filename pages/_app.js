import "styles/globals.css";
import "styles/font.css";
import "styles/pointer.scss";
import "@wevisdemo/ui/styles/typography.css";
import "@wevisdemo/ui/styles/components.css";
import MetaHead from "../components/MetaHead";
import SafeHydrate from "../components/SafeHydrate";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaHead />
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </>
  );
}

export default MyApp;
