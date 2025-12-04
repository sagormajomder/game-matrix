// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner({ games }) {
  return (
    <section className="">
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="flex w-full justify-center overflow-hidden">
              <img
                className="h-62.5 w-full object-cover sm:h-auto sm:w-auto"
                src={game.coverPhoto}
                alt={game.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
