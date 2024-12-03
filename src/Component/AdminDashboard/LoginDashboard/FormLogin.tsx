import Logogulf from "@/component/AdminDashboard/Logo/Logogulf";

export default function FormLogin() {
  return (
    <div className="flex flex-col items-center w-full h-full  ">
      <div className="flex flex-col items-center w-[600px] h-full ">
        <div className="w-full h-[53px] flex items-center justify-center ">
          <Logogulf />
        </div>
        <div className="w-full h-[53px] flex items-center justify-end mt-[112px] ">
          <p className="text-[16px] text-[#404040] ">
            به پنل مدیریت سفری به قله خوش آمدید{" "}
          </p>
        </div>
        <div className="h-[300px] w-full flex flex-col items-center mt-[140px] ">
          <input
            type="text"
            className="w-full h-[60px] bg-[#F3F3F3] text-right outline-none pr-[20px] "
            placeholder=": شماره تماس "
          />
          <input
            type="text"
            className="w-full h-[60px] bg-[#F3F3F3] text-right outline-none pr-[20px] mt-[20px] "
            placeholder=":  رمز عبور "
          />
          <button className="w-full h-[48px] bg-[#194BF0] rounded-[10px] mt-[70px] text-center text-white ">
            ورود به پنل
          </button>
        </div>
      </div>
    </div>
  );
}
