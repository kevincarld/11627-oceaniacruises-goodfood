import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import BrightCoveVideo from 'components/util/BrightCoveVideo'
// swiper
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider2() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const slider2Ref = React.useRef(null);

  // initialize sliders
  React.useEffect(() => {
    const slider2 = new Swiper(slider2Ref.current, {
      modules: [Pagination, Autoplay, Navigation],
      slidesPerView: 1,
      speed: 1300,
      spaceBetween: 39,
      breakpoints: {
        1280: {
          slidesPerView: 1.5,
        },
      },
      navigation:{
        enabled: true,
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      },
      onBeforeInit:(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      },
    });

    return () => {
      slider2.destroy();
    };
  }, [])

  return (
    <Box bg='#F6F1E8' p={{base: '8px 0 45px', d: '105px 0 105px'}}>
      <Box pos='relative'>
        <Box pl={{d: '100px', wide: '290px'}} ref={slider2Ref} className="swiper-container slider2"  overflow='hidden'>
          <Box className="swiper-wrapper">
            <SwiperSlide className='swiper-slide' >
              {/* <BrightCoveVideo
                script={'https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js'}
                dataPlayer={'WkAEp4m5G'}
                dataVideoId={'6323356171112'}
              /> */}
              <Img dimension="1336x751" fit='cover' h='full' w='full'  mock='slider-1' />
            </SwiperSlide>

            <SwiperSlide className='swiper-slide' >
              <Img dimension="1336x751" fit='cover' h='full' w='full'  mock='slider-1' />
            </SwiperSlide>

            <SwiperSlide className='swiper-slide' >
              <Img dimension="1336x751" fit='cover' h='full' w='full' mock='slider-3' />
            </SwiperSlide>

            <SwiperSlide className='swiper-slide' >
              <Img dimension="1336x751" fit='cover' h='full' w='full' mock='slider-4'  />
            </SwiperSlide>

            <SwiperSlide className='swiper-slide' >
              <Img dimension="1336x751" fit='cover' h='full' w='full' mock='slider-5' />
            </SwiperSlide>
          </Box>
        </Box>

        <Box className="arrow-holder"
          zIndex={100}
          w='full'
          sx={{
            pos: {lg: 'absolute'},
            top: {lg: '50%'},
            px: {lg: '50px', wide: '150px'},
            transform: {lg: 'translateY(-50%)'},
            display:'flex',
            justifyContent: {base: 'center', lg: 'space-between'},
            alignItems: 'center',
            mx: 'auto',
            gap: {base: '34px',  md: '80px', lg: 0},
            mt: {base: '24px', lg:0},
            '.swiper-button-disabled': {
              opacity: .6,
            },
            'svg': {
              '&:hover': {
                cursor: 'pointer'
              }
            },
          }}
        >
          <Box pos="relative" zIndex={100} ref={navigationPrevRef} className="btn-prev">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <defs>
                <clipPath id="clip-path">
                  <rect id="mask" width="34" height="34" transform="translate(156 11503)" fill="none" stroke="#006bb7" stroke-width="2"/>
                </clipPath>
                <clipPath id="clip-path-2">
                  <rect id="Rectangle_1633" data-name="Rectangle 1633" width="11.272" height="20.709" fill="#006bb7"/>
                </clipPath>
                <clipPath id="clip-path-3">
                  <rect id="Rectangle_1633-2" data-name="Rectangle 1633" width="7.145" height="13.125" fill="#006bb7"/>
                </clipPath>
              </defs>
              <g id="ARROW_BACK" data-name="ARROW BACK" transform="translate(34 34) rotate(180)">
                <g id="ARROW_FORWARD" data-name="ARROW FORWARD" transform="translate(-156 -11503)" clip-path="url(#clip-path)">
                  <g id="Rectangle_1629" data-name="Rectangle 1629" transform="translate(156 11503)" fill="none" stroke="#006bb7" stroke-width="2">
                    <rect width="34" height="34" stroke="none"/>
                    <rect x="1" y="1" width="32" height="32" fill="none"/>
                  </g>
                  <g id="arrow1" transform="translate(168 11510)">
                    <g id="Group_6016" data-name="Group 6016" transform="translate(0 0)" clip-path="url(#clip-path-2)">
                      <path id="Path_2301" data-name="Path 2301" d="M10.99,9.693,1.558.261A.893.893,0,0,0,.11.532L.09.576A1.064,1.064,0,0,0,.308,1.756h0l8.417,8.416a.245.245,0,0,1,0,.364L.308,18.953A1.064,1.064,0,0,0,.09,20.132l.02.044a.893.893,0,0,0,1.448.271l9.432-9.432a.916.916,0,0,0,0-1.322" transform="translate(0 0)" fill="#006bb7"/>
                    </g>
                  </g>
                  <g id="arrow2" transform="translate(127.064 11513.792)">
                    <g id="Group_6016-2" data-name="Group 6016" transform="translate(0 0)" clip-path="url(#clip-path-3)">
                      <path id="Path_2301-2" data-name="Path 2301" d="M6.966,6.144.988.166A.566.566,0,0,0,.07.337L.057.365A.674.674,0,0,0,.2,1.113h0L5.53,6.447a.155.155,0,0,1,0,.231L.2,12.012a.674.674,0,0,0-.138.747l.012.028a.566.566,0,0,0,.918.171L6.966,6.981a.581.581,0,0,0,0-.838" transform="translate(0 0)" fill="#006bb7"/>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

          </Box>

          <Box pos="relative" zIndex={100} ref={navigationNextRef} className="btn-next">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <defs>
                <clipPath id="clip-path">
                  <rect id="mask" width="34" height="34" transform="translate(156 11503)" fill="none" stroke="#006bb7" stroke-width="2"/>
                </clipPath>
                <clipPath id="clip-path-2">
                  <rect id="Rectangle_1633" data-name="Rectangle 1633" width="11.272" height="20.709" fill="#006bb7"/>
                </clipPath>
                <clipPath id="clip-path-3">
                  <rect id="Rectangle_1633-2" data-name="Rectangle 1633" width="7.145" height="13.125" fill="#006bb7"/>
                </clipPath>
              </defs>
              <g id="ARROW_FORWARD" data-name="ARROW FORWARD" transform="translate(-156 -11503)" clip-path="url(#clip-path)">
                <g id="Rectangle_1629" data-name="Rectangle 1629" transform="translate(156 11503)" fill="none" stroke="#006bb7" stroke-width="2">
                  <rect width="34" height="34" stroke="none"/>
                  <rect x="1" y="1" width="32" height="32" fill="none"/>
                </g>
                <g id="arrow1" transform="translate(168 11510)">
                  <g id="Group_6016" data-name="Group 6016" transform="translate(0 0)" clip-path="url(#clip-path-2)">
                    <path id="Path_2301" data-name="Path 2301" d="M10.99,9.693,1.558.261A.893.893,0,0,0,.11.532L.09.576A1.064,1.064,0,0,0,.308,1.756h0l8.417,8.416a.245.245,0,0,1,0,.364L.308,18.953A1.064,1.064,0,0,0,.09,20.132l.02.044a.893.893,0,0,0,1.448.271l9.432-9.432a.916.916,0,0,0,0-1.322" transform="translate(0 0)" fill="#006bb7"/>
                  </g>
                </g>
                <g id="arrow2" transform="translate(127.064 11513.792)">
                  <g id="Group_6016-2" data-name="Group 6016" transform="translate(0 0)" clip-path="url(#clip-path-3)">
                    <path id="Path_2301-2" data-name="Path 2301" d="M6.966,6.144.988.166A.566.566,0,0,0,.07.337L.057.365A.674.674,0,0,0,.2,1.113h0L5.53,6.447a.155.155,0,0,1,0,.231L.2,12.012a.674.674,0,0,0-.138.747l.012.028a.566.566,0,0,0,.918.171L6.966,6.981a.581.581,0,0,0,0-.838" transform="translate(0 0)" fill="#006bb7"/>
                  </g>
                </g>
              </g>
            </svg>
          </Box>
        </Box>
      </Box>


    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

