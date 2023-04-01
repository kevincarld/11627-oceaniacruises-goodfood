import React from 'react'
import { Box,  Flex, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
// swiper
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";


export default function Slider1() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const slider1Ref = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(0)

  // initialize sliders
  React.useEffect(() => {
    // Slider 1 options (cover)
    const slider1 = new Swiper(slider1Ref.current, {
      modules: [Pagination, Autoplay, Navigation],
      slidesPerView: 1,
      speed: 1300,
      spaceBetween: 20,
      centeredSlides: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (_, className) {
          return '<span class="' + className + ' slider1-bullet"></span>'
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
      on: {
        slideChange: function(slide) {
          setActiveSlide(slide.activeIndex)
        }
      },
      breakpoints: {
        1280: {
          slidesPerView: 1.5,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, [])

  return (
  <Box bg='#FAF8F3' p={{base: '37px 0 77px', d: '127px 0 61px'}}>
    <Box  ref={slider1Ref} className="swiper-container slider1"  overflow='hidden'>
      <Box className="swiper-wrapper">
        {
          [1,2,3,4,5].map((num,index) => (
            <SwiperSlide key={num} className='swiper-slide' >
              <Img dimension="892x540" fit='cover' minH={{base: '508px'}} h='full' w='full'  src={`./images/slider-${num}.jpg`} />
            </SwiperSlide>
          ))
        }
      </Box>
    </Box>

    <Box className="arrow-holder" mt={{base: '30px'}}
      sx={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxW: {base: '50%', md: '384px'},
        mx: 'auto',
        'svg': {
          '&:hover': {
            cursor: 'pointer'
          }
        },
      }}
    >
      <Box pos="relative" zIndex={100} ref={navigationPrevRef} className="slider-container btn-prev">
        <svg id="ARROW_Back" width="34" height="34" viewBox="0 0 34 34">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_1633" data-name="Rectangle 1633" width="11.272" height="20.709" fill="#c3a873"/>
            </clipPath>
          </defs>
          <g id="Rectangle_1629" data-name="Rectangle 1629" fill="none" stroke="#c3a873" strokeWidth="2">
            <rect width="34" height="34" stroke="none"/>
            <rect x="1" y="1" width="32" height="32" fill="none"/>
          </g>
          <g id="arrow1" transform="translate(10.728 7)">
            <g id="Group_6016" data-name="Group 6016" clip-path="url(#clip-path)">
              <path id="Path_2301" data-name="Path 2301" d="M.281,9.693,9.713.261a.893.893,0,0,1,1.448.271l.02.044a1.064,1.064,0,0,1-.218,1.179h0L2.547,10.172a.245.245,0,0,0,0,.364l8.417,8.417a1.064,1.064,0,0,1,.218,1.179l-.02.044a.893.893,0,0,1-1.448.271L.281,11.015a.916.916,0,0,1,0-1.322" transform="translate(0.001 0)" fill="#c3a873"/>
            </g>
          </g>
        </svg>
      </Box>


      <Box
        className="swiper-pagination"
        sx={{
          pos:'relative!important',
          bottom: 'unset!important',
          top: 'unset!important',
          display: 'flex!important',
          gap: '6px',
          justifyContent: 'center',
          alignItems: 'center',

          '.slider1-bullet': {
            margin: '0!important',
            borderRadius: '0!important',
            w: '4px!important',
            h: '14px!important',
            bg: 'primary',
            opacity: '1!important',
            transition: 'transform 1300ms ease-out',

            '&.swiper-pagination-bullet-active': {
              transform: 'translateY(-7px)'
            }
          }
        }}
      />

      <Box pos="relative" zIndex={100} ref={navigationNextRef} className="slider-container btn-next">
        <svg width="34" height="34" viewBox="0 0 34 34">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_1633" data-name="Rectangle 1633" width="11.272" height="20.709" fill="#c3a873"/>
            </clipPath>
          </defs>
          <g id="ARROW_Forward" data-name="ARROW Forward" transform="translate(-156 -11503)">
            <g id="Rectangle_1629" data-name="Rectangle 1629" transform="translate(156 11503)" fill="none" stroke="#c3a873" strokeWidth="2">
              <rect width="34" height="34" stroke="none"/>
              <rect x="1" y="1" width="32" height="32" fill="none"/>
            </g>
            <g id="arrow1" transform="translate(168 11510)">
              <g id="Group_6016" data-name="Group 6016" transform="translate(0 0)" clip-path="url(#clip-path)">
                <path id="Path_2301" data-name="Path 2301" d="M10.99,9.693,1.558.261A.893.893,0,0,0,.11.532L.09.576A1.064,1.064,0,0,0,.308,1.756h0l8.417,8.416a.245.245,0,0,1,0,.364L.308,18.953A1.064,1.064,0,0,0,.09,20.132l.02.044a.893.893,0,0,0,1.448.271l9.432-9.432a.916.916,0,0,0,0-1.322" transform="translate(0 0)" fill="#c3a873"/>
              </g>
            </g>
          </g>
        </svg>
      </Box>
    </Box>

    <Text
      fontFamily={'heading'}
      textAlign={'center'}
      fontSize={{base: '13px'}}
      lineHeight={{base: '16px'}}
      fontStyle={'italic'}
      color={'darkprimary'}
      mt={{base: '20px'}}
    >
      Swipe to see more photos of Oceania Cruises
    </Text>
  </Box>

  )
}
