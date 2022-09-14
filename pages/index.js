import styles from "../styles/Home.module.css";

import { Intro } from "../components/Intro";
import { WrapperExpand } from "../components/WrapperExpand";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Intro />
        <WrapperExpand />
        <div id="cursor" className="fixed left-[50%] top-[50%] translate-y-[-50%] pointer-events-none ">
          <div id="cursor-circle">
            <div className="cursor-circle">
              <div className="cursor-circle-hover-link"></div>
            </div>
          </div>
          <div id="cursor-small">
            <div className=" cursor-circle-zoom"></div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
