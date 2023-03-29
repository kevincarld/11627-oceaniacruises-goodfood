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
    });

    return () => {
      slider2.destroy();
    };
  }, [])

  return (
    <Box bg='#F6F1E8' p={{base: '8px 0 45px', d: '105px 0 105px'}}>
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

    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

