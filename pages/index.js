import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Intro } from "../components/Intro";
import { WrapperExpand } from "../components/WrapperExpand";
import WvNavButton from "@wevisdemo/ui/components/nav-button";
import WvNavbar from "@wevisdemo/ui/components/navbar";
import { Seemore_1, Seemore_2 } from "../components/Matter/Part2/Seemore";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const router = useRouter();

  const select_route = (path) => {
    router.push(path, undefined, { shallow: false });
  };
  return (
    <div className={styles.container} id="content">
      <Seemore_1 />
      <Seemore_2 />
      <Pagination />
      <main className={styles.main} id="main">
        <div className="sticky top-0 left-0 z-50 w-screen ">
          <WvNavbar title="Initiative Law" dark={true}>
            <WvNavButton dark={true} active={router.pathname === "/"}>
              <div onClick={() => select_route("/")}>หน้าหลัก</div>
            </WvNavButton>
            <WvNavButton dark={true} active={router.pathname === "/about"}>
              <div onClick={() => select_route("/about")}>เกี่ยวกับโครงการ</div>
            </WvNavButton>
          </WvNavbar>
        </div>
        <Intro />
        <WrapperExpand />
        <div id="cursor" className="fixed left-[50%] z-50 top-[50%] translate-y-[-50%] pointer-events-none ">
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
