import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./TeamSection.css"; // You can move the styles there or use styled-components

const teamMembers1 = [
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg",
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET5.jpg",
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg",
];

const teamMembers2 = [
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET5.jpg",
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg",
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
];

const TeamSection = () => {
  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-12 wk-mobile-12">
          <p className="text-blk heading-text">Meet our dream team</p>
          <p className="text-blk sub-heading-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim risus sit nullam aliquam. Mattis.
          </p>
        </div>

        <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12">
          <p className="text-blk team-name">Management Team</p>
          <div className="responsive-container-block">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-nexts",
                prevEl: ".swiper-button-prevs",
              }}
              loop={true}
              breakpoints={{
                100: { slidesPerView: 1.2, spaceBetween: 40 },
                340: { slidesPerView: 1.5, spaceBetween: 40 },
                500: { slidesPerView: 1.5, spaceBetween: 20 },
                630: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="team-1-swiper"
            >
              {teamMembers1.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="responsive-cell-block wk-desk-4 wk-ipadp-6 wk-tab-6 wk-mobile-12">
                    <img className="team-member-image" src={src} alt="Team Member" />
                    <p className="text-blk name">Gustavo Workman</p>
                    <p className="text-blk position">CEO</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="btn">
              <div className="swiper-button-nexts">
                <img className="arrow-right-1" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Next" />
              </div>
              <div className="swiper-button-prevs">
                <img className="arrow-left-1" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Prev" />
              </div>
            </div>
          </div>

          <p className="text-blk team-name">Engineering Team</p>
          <div className="responsive-container-block">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-nexts2",
                prevEl: ".swiper-button-prevs2",
              }}
              loop={true}
              breakpoints={{
                100: { slidesPerView: 1.2, spaceBetween: 40 },
                340: { slidesPerView: 1.5, spaceBetween: 40 },
                500: { slidesPerView: 1.5, spaceBetween: 20 },
                630: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="team-2-swiper"
            >
              {teamMembers2.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="responsive-cell-block wk-desk-4 wk-ipadp-6 wk-tab-6 wk-mobile-12">
                    <img className="team-member-image" src={src} alt="Team Member" />
                    <p className="text-blk name">Gustavo Workman</p>
                    <p className="text-blk position">CEO</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="btn">
              <div className="swiper-button-nexts2">
                <img className="arrow-right-2" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Next" />
              </div>
              <div className="swiper-button-prevs2">
                <img className="arrow-left-2" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
