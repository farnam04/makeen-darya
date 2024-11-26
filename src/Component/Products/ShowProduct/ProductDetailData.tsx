import Image from '@/assent/Imge/Product/ProductDetail/Chador1.svg'
import Image2 from '@/assent/Imge/Product/ProductDetail/Chador2.svg'
import Image3 from '@/assent/Imge/Product/ProductDetail/Chador4.svg'
import Image4 from '@/assent/Imge/Product/ProductDetail/Chador5.svg'

const ProductDetailData = () => {
    return {
      ProductDetail: [
        {
          productTitle: "چادر دو نفره موبی گاردن مدل NX23561020",
          productDetail:
            "مناسب برای 2-3 نفره و چهار فصله کاربردی و قابل استفاده در مسافرت و کپینگ",
          price: "9,449,000",
          description:
            "چادر کمپینگ دو نفره ضد آب موبی گاردن مدل Light Riding UL2 EXO NX23561020 در زمره چادرهای سه فصله کمپینگ قرار دارد. سبک و کم حجم بودن آن موجب شده تا این چادر گزینه مناسبی برای حمل با کوله پشتی در زمان کمپ در هوای معمولی باشد",
          OuterMaterial: "نایلون 20D 400T PU3000MM",
          TentFloorMaterial: "نایلون 20D 400T PU4000MM",
          weight: "حدود 1.7 کیلوگرم",

          images :[
            Image,
            Image2,
            Image3,
            Image4,
          ],
          
         

        

          
        },

        {
            id: 1,
            UserName: 'محمد خراسانی' , 
            comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای  شرایط....... ',
            dateComment:'1402.11.15',
            Like: '250',
            disLike:'50'
  
        },
        {
            id: 2,
            UserName: 'محمد خراسانی' , 
            comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای  شرایط....... ',
            dateComment:'1402.11.15',
            Like: '250',
            disLike:'50'
  
        }
      ],
    };
  };
  
  export default ProductDetailData;
  