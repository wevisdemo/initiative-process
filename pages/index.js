import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Intro } from "../components/Intro";
import { WrapperExpand } from "../components/WrapperExpand";
import WvNavButton from "@wevisdemo/ui/components/nav-button";
import WvNavbar from "@wevisdemo/ui/components/navbar";

const Home = () => {
  const router = useRouter();

  const select_route = (path) => {
    router.push(path, undefined, { shallow: false });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="sticky top-0 z-50 w-full ">
          <WvNavbar title="Initiative Law" dark={true}>
            <WvNavButton dark={true} active={router.pathname === "/"}>
              <div onClick={() => select_route("/")}>หน้าหลัก</div>
            </WvNavButton>
            <WvNavButton dark={true} active={router.pathname === "/About"}>
              <div onClick={() => select_route("/About")}>เกี่ยวกับโครงการ</div>
            </WvNavButton>
          </WvNavbar>
        </div>
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
