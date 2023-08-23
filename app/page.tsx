"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import "swiper/css";

import 'swiper/css/effect-fade';
export default function Home() {
  return (
    <div className="">
      <section className="mx-auto text-center py-20 max-w-5xl ">
        <h1 className="mx-auto font-extrabold text-5xl w-3/4  leading-tight pb-5">
          Giải pháp trung gian đáng tin cậy cho giao dịch
        </h1>
        <p className="mx-auto w-3/4">
          Nền tảng giao dịch trung gian đáng tin cậy. Chúng tôi đảm bảo an toàn
          và tin cậy trong mỗi giao dịch, giữ tiền đối với người mua và thanh
          toán cho người bán sau khi giao dịch hoàn thành.
        </p>
        <div className="p-10 bg-[#F5F5F7] w-full  my-7 rounded-3xl flex gap-2">
          <input
            type="text"
            placeholder="Bạn muốn giao dịch gì ?"
            className="p-4 outline-none rounded-lg flex-1"
          />
          <div className="p-3 flex items-center gap-3 bg-[#343C57] text-white rounded-md">
            <button className="flex w-full font-medium">Giao dịch ngay</button>
            <svg
              className="!me-2"
              width={11}
              height={14}
              viewBox="0 0 47 62"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27.95 0L0 38.213H18.633V61.141L46.583 22.928H27.95V0Z" />
            </svg>
          </div>
        </div>
      </section>
      <section className="mx-5">
        <Swiper
          modules={[EffectFade]} effect="cube"
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="">
              <Image
                src="/images/v6sP-test.png"
                width={300}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <h3 className="mb-3 font-bold">Advanced Dashboard</h3>
            <p className="text-[14px]">
              Track Skyrocat usage and see how much content you've created since
              you joined. It helps you keep tabs on your productivity!
            </p>
          </div>
          </SwiperSlide>
        </Swiper>
        {/* modifi ok #3 */}
      </section>
    </div>
  );
}
