import UserAcount from "@/assent/Imge/UserDashboard/useracount.svg";
import Orders from "@/assent/Imge/UserDashboard/receipt.svg";
import Location from "@/assent/Imge/UserDashboard/location.svg";
import DefultIcon from "@/assent/Imge/UserDashboard/defultUser.svg";

const NavbarData = () => {
  return {
    UserName: [
      {
        id: 1,
        name: "مرتضی فراهانی",
        number: "09195444612",
        src: DefultIcon,
      
      },
    ],
    Navbar: [
      {
        id: 1,
        name: "حساب کاربری",
        src: UserAcount,
          Link: '/userdashboard/useracount'
      },

      {
        id: 2,
        name: "سفارش ها",
        src: Orders,
          Link: '/userdashboard/order'
      },

      {
        id: 3,
        name: "آدرس‌ ها",
        src: Location,
         Link: '/userdashboard/addres'
      },
    ],
  };
};

export default NavbarData;
