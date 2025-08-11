import Link from "next/link";
import CategoryItems from "./CategoryItems";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";
import ProductSlider from "../utils/ProductSlider";
const Category = async () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    nextArrow: <NextArrow customStyle="absolute -top-10 md:-top-16 right-0" />,
    prevArrow: <PrevArrow customStyle="absolute -top-10 md:-top-16 right-16" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const res = await fetch("https://api.escuelajs.co/api/v1/categories",{
    method: "GET"
  })
  const data = await res.json()
  console.log(data);
 
  return (
    <section className="pt-14 pb-11">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-7 items-center md:items-end">
          <h2 className="sectn_heading">Featured Categories</h2>
          <ul className="flex flex-wrap text-base font-light text-primary gap-2 md:gap-7">
            <li>
              <Link href="/" className="hover:text-brand">
                Cake & Milk
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand">
                Coffes & Teas
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand">
                {" "}
                Pet Foods
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand">
                Vegetables
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-11">
          <ProductSlider slideSetting={settings}>
            {
              data.map((item)=>(
                <CategoryItems key={item.id} category={item}/>
              ))
            }
          </ProductSlider>
        </div>
      </div>
    </section>
  );
};

export default Category;