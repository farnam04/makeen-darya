import Image from "@/assent/Imge/Product/ProductDetail/Chador1.svg";
import Image2 from "@/assent/Imge/Product/ProductDetail/Chador2.svg";
import Image3 from "@/assent/Imge/Product/ProductDetail/Chador4.svg";
import Image4 from "@/assent/Imge/Product/ProductDetail/Chador5.svg";

const ProductDetailData = () => {
  return {
    ProductDetail: [
      {
        productTitle: "چادر دو نفره موبی گاردن مدل NX23561020",
        brand: "VIVID",
        model: "Light Riding",
        rate: "3.6",
        price: "9,449,000 ",

         discription:"  STRIKER Vivid 7sv دارای 7 صفحه نمایش، روشن و قابل خواندن حتی در نورخورشید می باشدکه ماهی ها و ساختار را میتوانید باجزئیات فوق العاده نشان د.",
         TechnicalSpecifications:"ابعاد فیزیکی: 5.8*14.0*23.5 سانتی متر",
        images: [Image, Image2, Image3, Image4],
      },

      {
        id: 1,
        UserName: "محمد خراسانی",
        comment:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای  شرایط....... ",
        dateComment: "1402.11.15",
        Like: "250",
        disLike: "50",
      },
      {
        id: 2,
        UserName: "محمد خراسانی",
        comment:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای  شرایط....... ",
        dateComment: "1402.11.15",
        Like: "250",
        disLike: "50",
      },
    ],
  };
};

export default ProductDetailData;
