import { useRouter } from "next/router";
import React from "react";
import WvContainer from "@wevisdemo/ui/components/container";
import WvParagraphGroup from "@wevisdemo/ui/components/paragraph-group";
import WvButtonGroup from "@wevisdemo/ui/components/button-group";
import WvButton from "@wevisdemo/ui/components/button";
import WvSharer from "@wevisdemo/ui/components/sharer";
import WvFooter from "@wevisdemo/ui/components/footer";
import WvNavbar from "@wevisdemo/ui/components/navbar";
import WvNavButton from "@wevisdemo/ui/components/nav-button";
import PlausibleProvider from "next-plausible";

const About = () => {
  const router = useRouter();

  const select_route = (path) => {
    router.push(path, undefined, { shallow: false });
  };

  return (
    <PlausibleProvider
      domain="wevis.info/initiativelaw"
      customDomain="https://analytics.punchup.world/js/plausible.js"
      selfHosted={true}
    >
      <div className="relative h-full overflow-y-auto text-black bg-white ">
        <div className="sticky top-0 z-50 w-full ">
          <WvNavbar title="Initiative Law" dark={true}>
            <WvNavButton dark={true} active={router.pathname === "/"}>
              <div onClick={() => select_route("/")}>หน้าหลัก</div>
            </WvNavButton>
            <WvNavButton dark={true} active={router.pathname === "/about"}>
              <div onClick={() => select_route("/about")}>เกี่ยวกับโครงการ</div>
            </WvNavButton>
          </WvNavbar>
        </div>
        <WvContainer heading="เกี่ยวกับโครงการ">
          <WvParagraphGroup heading="เป้าหมาย">
            <div>
              ตั้งแต่รัฐธรรมนูญปี 2540 เปิดโอกาสให้ประชาชนสามารถลงชื่อเสนอกฎหมายได้ และผ่านมา 20 กว่าปี
              จนถึงรัฐธรรมนูญปี 2560 หลายคนตั้งคำถามว่าการลงชื่อแต่ละครั้ง
              สุดท้ายแล้วกฎหมายที่ลงชื่อไปแต่เส้นทางกฎหมายของประชาชนในการเสนอกฎหมายแต่ละฉบับไปสิ้นสุดที่ตรงไหน
              <br />
              <br />
              ทางทีม{" "}
              <a
                href="https://wevis.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline "
              >
                WeVis
              </a>{" "}
              จึงพยายามรวบรวมข้อมูลตั้งรัฐธรรมนูญปี 2540 ถึงรัฐธรรมนูญปี 2560
              ที่ผ่านมามีร่างกฎหมายที่ประชาชนเสนอไปทั้งหมดกี่ฉบับ และเส้นทางกระบวนการของกฎหมายเป็นอย่างไร สุดท้ายแล้ว
              กว่าจะผ่านแต่ละเส้นทางมาได้ ร่างกฎหมายตกอยู่ที่กระบวนการไหนบ้าง สุดท้ายสามารถปรับอะไรกับเส้นทางนี้ได้
              <br />
              <br />
              ขอชวนทุกคนมาร่วมสำรวจเส้นทางของกฎหมายประชาชนไปพร้อมๆกัน
            </div>
          </WvParagraphGroup>

          <WvParagraphGroup heading="ที่มาของข้อมูล">
            <div>
              ข้อมูลจากกลุ่มงานเข้าชื่อเสนอกฎหมาย สำนักการประชุม สำนักเลขาธิการสภาผู้แทนราษฎร (ข้อมูล ณ วันที่ 28 มีนาคม
              2565) และข้อมูลสรุปภาพรวมการเข้าชื่อเสนอกฎหมายตามรัฐธรรมนูญ 2560 (ข้อมูล ณ วันที่ 16 มิถุนายน 2565)
            </div>

            <ul className="ml-10 list-disc ">
              <li>
                <a
                  href="https://drive.google.com/file/d/1qC-Ce-RnlgPgi27FVJywrc-_8wZQjBYo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black b5 hover:underline"
                >
                  สำนักงานเลขาธิการสภา.pdf
                </a>
              </li>
              <li>
                <a
                  href="https://web.parliament.go.th/assets/portals/5/fileups/8/files/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black b5 hover:underline"
                >
                  คุณสมบัติและจำนวนของผู้มีสิทธิเข้าชื่อเสนอกฎหมาย.pdf
                </a>
              </li>
              <li>
                <a
                  href="https://web.parliament.go.th/assets/portals/5/fileups/8/files/%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%20%E0%B8%9E_%E0%B8%A8_%202564.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black b5 hover:underline"
                >
                  แผนงานการเข้าชื่อเสนอกฎหมาย พ.ศ 2564
                </a>
              </li>
              <li>
                <a
                  href="https://web.parliament.go.th/view/5/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2/TH-TH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black b5 hover:underline"
                >
                  การเข้าเสนอชื่อกฎหมาย สำนักงานเลขาธิการสภาผู้แทนราษฎร
                </a>
              </li>
              <li>
                <a
                  href="https://tropico-project.eu/download/d5-1-comparative-case-studies/?wpdmdl=1155&refresh=60377162846821614246242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black b5 hover:underline"
                >
                  TROPICO Comparative case studies on e-participation
                </a>
              </li>
              <li>
                <a
                  href="https://web.parliament.go.th/assets/portals/5/fileups/8/files/%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%98%E0%B8%99_60%20160665.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black b5 hover:underline"
                >
                  สรุปภาพรวมการเข้าชื่อเสนอกฎหมายตามรธน.60
                </a>
              </li>
            </ul>
          </WvParagraphGroup>

          <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข
            Creative Commons Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
            แต่ห้ามนำไปใช้เพื่อการค้า และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
            <br />
            <br />
            หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
            หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@punchup.world
          </WvParagraphGroup>

          <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
            <WvParagraphGroup small heading="เขียนโปรแกรม">
              <a
                href="https://github.com/MEEP00H"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black b5 hover:underline"
              >
                โสภณ จำปาซ่อนกลิ่น
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="ออกแบบ">
              <a
                href="https://pearwawa.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black b5 hover:underline"
              >
                มนสิชา ศรีสวนแตง
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="สืบค้นและรวบรวมข้อมูล">
              <a
                href="https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black b5 hover:underline"
              >
                ศุภิสรา อิศรานุกูล
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="บรรณาธิการ">
              <a
                href="https://www.linkedin.com/in/thanisara-r/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black b5 hover:underline"
              >
                ธนิสรา เรืองเดช
              </a>
            </WvParagraphGroup>

            <WvParagraphGroup small heading="ประสานงานและจัดการอื่นๆ">
              <a
                href="https://punchup.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline "
              >
                Punch Up
              </a>{" "}
              และ{" "}
              <a
                href="https://wevis.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline "
              >
                WeVis
              </a>{" "}
              ในโปรเจกต์ Initiative law สำรวจเส้นทางกฎหมายของประชาชน ยังได้รับการสนับสนุนทุนในการดำเนินงานจาก{" "}
              <a
                href="https://www.ned.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline "
              >
                National Endowment for Democracy (NED)
              </a>{" "}
              ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup
              เพื่อดำเนินโครงการ
            </WvParagraphGroup>
          </WvParagraphGroup>

          <WvButtonGroup center>
            <a
              href="https://docs.google.com/spreadsheets/d/1PkmwnObEItVRlxXR-eDBkm72OLnmKLcUSczWRHcW7iI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WvButton>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_314_173)">
                    <path
                      d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <line x1="10.667" y1="0.5" x2="10.667" y2="13" stroke="currentColor" strokeWidth="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_314_173">
                      <rect width="20.8333" height="20" fill="white" transform="translate(0.0834961 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <div>ดาวน์โหลดข้อมูล</div>
              </WvButton>
            </a>

            <a href="https://airtable.com/shryu4errnlj1LWsM" target="_blank" rel="noopener noreferrer">
              <WvButton>
                <img
                  alt="image"
                  width="26"
                  src="data:image/png;base64,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"
                />
                <span>Feedback</span>
              </WvButton>
            </a>
          </WvButtonGroup>

          <WvSharer center url="wevis.info/initiativelaw " />
        </WvContainer>
        <WvFooter />
      </div>
    </PlausibleProvider>
  );
};

export default About;
