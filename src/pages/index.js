import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getProducts } from '../../lib/shopify';

export async function getStaticProps() {
  try {
    const products = await getProducts();
    return {
      props: { products },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: { products: [] },
      revalidate: 10, 
    };
  }
}

export default function Home({products}) {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between lg:flex-row">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 w-full">
        <div className="flex justify-center lg:justify-start relative w-full h-full lg:w-auto">
          <img src="/images/left-image.png" className="hidden lg:block w-full lg:w-auto" />
          <img src="/images/mobile-top.png" className="block lg:hidden w-full lg:w-auto shadow-custom-dark rounded-12px" />
          <div className="absolute left-5p bottom-6p inset-0 flex flex-col items-center justify-end lg:justify-center text-white lg:hidden p-4">
          <h2 className="text-4xl font-bold mb-4 text-center lg:block hidden">
              Everyday tops, we have something to suit every occasion.
            </h2>
            <h2 className="text-2xl font-bold mb-4 text-start lg:hidden block">
              Everyday tops, we have something to suit every occasion.
            </h2>
            <p className="mb-8 text-base font-thin text-center lg:block hidden">
              At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
            </p>
            <a href="#" className="text-sm underline font-black lg:mt-5 mt-2   self-start lg:self-center">
              Shop All Everyday Items
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center lg:items-start relative bottom-4 w-10/12 mx-auto lg:static lg:bottom-auto lg:w-auto lg:mx-0">
          <div className="hidden lg:flex flex-col items-center lg:items-start mt-1 xl:mt-10 2xl:mt-0">
            <h2 className="w-full lg:w-4/5 2xl:w-full text-4xl font-bold mb-4 text-center lg:text-left">
              Everyday items, we have something to suit every occasion.
            </h2>
            <p className="mb-8 w-full lg:w-4/5 2xl:w-full text-lg lg:text-xl font-thin text-center lg:text-left">
              At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
            </p>
            <a href="#" className="text-sm underline font-black mt-5 self-center lg:self-start">
              Shop All Everyday Items
            </a>
          </div>
          
          <Swiper
            className="w-full"
            modules={[Navigation, Pagination]}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.6,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 2.6,
                spaceBetween: 10,
              },
              1920: {
                slidesPerView: 2.6,
                spaceBetween: 10,
              },
            }}
          >
            {products.map((product) => (
            <SwiperSlide key={product.id} className="rounded-xl">
              <div className="product">
                <img className="w-full rounded-xl" src={product.imageSrc} alt={product.imageAlt} />
                <div className="flex flex-col items-start mt-2 gap-1 text-start">
                  <p className="text-sm lg:text-base">{product.title}</p>
                  <p className="text-sm lg:text-base">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
