export const StepAdjust = () => {
  return (
    <div className="w-[280px] md:w-[400px]  mx-auto">
      <div className="relative md:w-[60px] w-[40px] h-[40px] md:h-[60px]  mb-5">
        <img src={require("assets/images/question.svg")} alt="image" />
      </div>
      <div className="font-bold b2">
        <p>การเข้าชื่อเสนอกฎหมาย </p>
        <p>ควรปรับหรือทำอะไรได้บ้าง?</p>
      </div>
      <p className="my-4 b4">
        ลองปรับเอาเทคโนโลยีมาช่วยขั้นตอนจุกจิกของเอกสาร เอสโตเนียเป็นประเทศที่มีระบบ e-participation initiative
        เกี่ยวกับการเสนอกฎหมายของประชาชนโดยตรง แถมยังได้อันดับที่ 1 ของ e-participation index ของ{" "}
        <span className="underline cursor-pointer ">
          <a
            href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            UN E-Government Survey 2020
          </a>
        </span>{" "}
        ด้วย
      </p>
      <p className="font-bold b4">ลองมาเทียบดูกับของไทยกัน</p>
    </div>
  );
};
