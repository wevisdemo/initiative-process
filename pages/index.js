import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Intro } from "../components/Intro";
import { WrapperExpand } from "../components/WrapperExpand";
import WvNavButton from "@wevisdemo/ui/components/nav-button";
import WvNavbar from "@wevisdemo/ui/components/navbar";
import { Seemore_1, Seemore_2 } from "../components/Matter/Part2/Seemore";
import { Pagination } from "../components/Pagination";
import Image from "next/image";

import PlausibleProvider from "next-plausible";
const Home = () => {
  const router = useRouter();

  const select_route = (path) => {
    router.push(path, undefined, { shallow: false });
  };
  const closeWarning = () => {
    document.getElementById("warning").style.display = "none";
  };

  return (
    <PlausibleProvider
      domain="initiativelaw.wevis.info"
      customDomain="https://analytics.punchup.world/js/plausible.js"
      selfHosted={true}
    >
      <div className={styles.container} id="content">
        <div className="fixed inset-0 bg-black z-[99] flex items-center justify-center" id="loading">
          <svg
            aria-hidden="true"
            className=" w-[62px] h-[62px]  text-black animate-spin dark:text-black fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
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
          <div className="sticky z-50 w-screen top-[72px] " id="warning">
            <div className="mx-auto text-center text-black relative bg-white w-max b7 py-2 px-10 rounded-[10px]">
              <div
                className=" absolute  top-0 right-0  w-[15px] h-[15px] m-2 cursor-pointer "
                onClick={() => closeWarning()}
              >
                <Image src="/images/close_black.svg" layout="fill" objectFit="contain" />
              </div>
              แจ้งเตือน : การเคลื่อนไหวของลูกบอลอาจไม่เสถียรใน <br className=" lg:hidden" /> โหมดพลังงานต่ำ (low power
              mode)
            </div>
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
    </PlausibleProvider>
  );
};
export default Home;
