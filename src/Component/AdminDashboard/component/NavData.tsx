import Dash from "@/assent/Imge/LoginPanelAdmin/Menulogo.svg";
import Users from "@/assent/Imge/LoginPanelAdmin/Users.svg";
import Orders from "@/assent/Imge/LoginPanelAdmin/Orders.svg";
import Static from "@/assent/Imge/LoginPanelAdmin/Static.svg";
import Category from "@/assent/Imge/LoginPanelAdmin/Category.svg";
import Brands from "@/assent/Imge/LoginPanelAdmin/Brands.svg";
import Products from "@/assent/Imge/LoginPanelAdmin/Product.svg";
import Bloge from "@/assent/Imge/LoginPanelAdmin/Blog.svg";
import Discount from "@/assent/Imge/LoginPanelAdmin/Discount.svg";
import Comment from "@/assent/Imge/LoginPanelAdmin/Comments.svg";

export const NavData = [
  {
    name: "داشبورد",
    href: "/admindashboard/dashboard",
    img: Dash,
    onpathimg: "",
  },
  {
    name: "کاربران",
    href: "/admindashboard/user",
    img: Users,
    onpathimg: "",
  },
  {
    name: "سفارشات",
    href: "/admindashboard/orders",
    img: Orders,
    onpathimg: "",
  },
  {
    name: "آمار فروش",
    href: "/admindashboard/static",
    img: Static,
    onpathimg: "",
  },
  {
    name: " دسته بندی ها ",
    href: "/admindashboard/orders",
    img: Category,
    onpathimg: "",
  },
  {
    name: " برند ها ",
    href: "/admindashboard/orders",
    img: Brands,
    onpathimg: "",
  },
  {
    name: " محصولات ",
    href: "/admindashboard/orders",
    img:Products ,
    onpathimg: "",
  },
  {
    name: " بلاگ ",
    href: "/admindashboard/orders",
    img:Bloge ,
    onpathimg: "",
  },
  {
    name: " کد تخفیف ",
    href: "/admindashboard/orders",
    img: Discount ,
    onpathimg: "",
  },
  {
    name: " نظرات ",
    href: "/admindashboard/orders",
    img:Comment ,
    onpathimg: "",
  },
  
];
