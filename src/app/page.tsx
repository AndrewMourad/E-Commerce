import FeaturedProducts from "./_component/FeaturedProducts/FeaturedProducts";
import Slider from "./_component/Slider/Slider";
import img1 from "../../src/assets/images/banner-4.jpeg";
import img2 from "../../src/assets/images/blog-img-1.jpeg";
import img3 from "../../src/assets/images/blog-img-2.jpeg";
// import ShopCategory from "./_component/ShopCategory/ShopCategory";
import dynamic from "next/dynamic";
const ShopCategory = dynamic(
  () => import("./_component/ShopCategory/ShopCategory"),
  {
    loading: () => <div className="">Loading...</div>,
  },
);

export default function Home() {
  return (
    <>
      <Slider
        spaceBetween={0}
        slidesPerView={1}
        pageList={[img1.src, img2.src, img3.src]}
      />
      <div className="container mx-auto xl:max-w-7xl">
        <ShopCategory />
        <FeaturedProducts />
      </div>
    </>
  );
}
