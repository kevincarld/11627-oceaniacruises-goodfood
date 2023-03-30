import React from 'react'
import {Flex, IconButton, Box, Text, Button, Link, Image, Grid, GridItem, Stack, } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import { Popover, PopoverTrigger, PopoverContent, useDisclosure, Portal, } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function DesktopClickers({desktopScale, controllers}) {
  const { dubro,corfu,argo,messina,sorrento,rome,zadar,venice } = controllers

  const popAnimation = {
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: .4,
        ease: [0.4, 0, 1, 1],
      },
    },
    enter: {
      x:0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  // for left to right
  const popAnimationAlt = {
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: .4,
        ease: [0.4, 0, 1, 1],
      },
    },
    enter: {
      x:0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }


  return (
    <Box
      sx={{
        pos: 'absolute',
        display: {base:'none', d: 'flex'},
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom: {d: '14.5%'},
        left: {d: '-70px'},
        right: 0,
        transform: {d: `scale(${desktopScale})`, hd: 'none'},
        transformOrigin: 'bottom center',
        'svg:not(#clip)' : {
          w: '100%',
          '#desktop-clickers': {
            '>g': {
              '@media(hover:hover)': {
                '&:hover': {
                  cursor: 'pointer',
                }
              }
            }
          }
        }
      }}
    >
      <svg id='clip' style={{width: 0}}>
        <clipPath id="symbol">
          <rect id="Rectangle_1614" data-name="Rectangle 1614" width="327.834" height="126.54" fill="#f6f1e8"/>
        </clipPath>
      </svg>
      <svg  width="618" height="617.789" viewBox="0 0 618 617.789">
        <g id="Group_6958" data-name="Group 6958" transform="translate(-611 -12327)">
          <Box as='g' id='location-lines'>
            <path id="Path_2690" data-name="Path 2690" d="M702.676,12345.809s34.094,63.77,132.176,94.348" transform="translate(40.711 -0.086)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
            <path id="Path_2691" data-name="Path 2691" d="M695.563,12334.387s45.852,87.434,123.008,106.324" transform="translate(180 110)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
            <path id="Path_2692" data-name="Path 2692" d="M678.587,12375.754s76.509,114.572,171.958,119.686" transform="matrix(0.839, 0.545, -0.545, 0.839, 7172.813, 1802.473)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
            <path id="Path_2693" data-name="Path 2693" d="M678.587,12375.754s19.182,54.139,70.044,70.191" transform="matrix(0.839, 0.545, -0.545, 0.839, 7251.208, 1996.504)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
            <path id="Path_2694" data-name="Path 2694" d="M678.587,12491.369s79.689-81.611,215.278-115.615" transform="matrix(0.839, 0.545, -0.545, 0.839, 7091.176, 1976.272)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
            <path id="Path_2695" data-name="Path 2695" d="M695.563,12334.387s-5.227,88.531,38,153.945" transform="translate(123.438 333.668)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
            <path id="Path_2696" data-name="Path 2696" d="M696.027,12334.387s17.79,89.23,127.139,106" transform="translate(-4.365 221.613)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
          </Box>

          <g id='desktop-clickers' >
            {/* venice */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={venice.isOpen}
              onOpen={venice.onOpen}
              onClose={venice.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="venice" transform="translate(-182 78)" onClick={venice.Open}>
                  <circle id="white_circle-7" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-7" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-7" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={venice.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='venice'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Venice</Text>
                        <PreLine px='20px' {...texts.cardContent}>
                          {`Where better for a grand finale than
                          Venice, packed with architectural
                          beauty and cultural treasures.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* zadar */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={zadar.isOpen}
              onOpen={zadar.onOpen}
              onClose={zadar.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="zadar" transform="translate(-55 172)" onClick={zadar.Open}>
                  <circle id="white_circle-8" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-8" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-8" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={zadar.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='zadar'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>zadar</Text>
                        <PreLine px='20px' {...texts.cardContent}>
                          {`Peninsula-hugging old town Zadar
                           in Croatia fronts a sparkling Adriatic Sea,
                           scattered with pine-scented
                           islands.`}
                        </PreLine>
                      </Stack>
                    </CardBody>

                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* dubro */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={dubro.isOpen}
              onOpen={dubro.onOpen}
              onClose={dubro.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="dubro" transform="translate(70 281)" onClick={dubro.onOpen}>
                  <circle id="white_circle" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={dubro.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='dubro'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Dubrovnik</Text>
                        <PreLine px='20px' {...texts.cardContent}>
                          {`Marvellous walled city Dubrovnik is
                           a charming clutter of belltowers,
                           churches, monasteries and flag-
                           stoned squares.`}
                        </PreLine>
                      </Stack>
                    </CardBody>

                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* corfu */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={corfu.isOpen}
              onOpen={corfu.onOpen}
              onClose={corfu.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="corfu" transform="translate(149 477)" onClick={corfu.onOpen}>
                  <circle id="white_circle-2" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-2" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-2" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={corfu.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='corfu'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Corfu</Text>
                        <Text px='20px' {...texts.cardContent}>
                          <span style={{display:'block', paddingLeft: '120px'}}>Corfu provides a splendid</span>
                          <span style={{display:'block', paddingLeft: '70px'}}>old town and Venetian fortress,</span>
                          <span style={{display:'block', }}>and has a rugged interior draped in</span>
                          <span>olive groves.</span>
                        </Text>
                      </Stack>
                    </CardBody>

                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* argo */}
            <Popover
              placement='left-end'
              gutter={30}
              isOpen={argo.isOpen}
              onOpen={argo.onOpen}
              onClose={argo.onClose}
              isLazy
              lazyBehavior='keepMounted'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="argo" transform="translate(168 573)" onClick={argo.onOpen}>
                  <circle id="white_circle-3" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-3" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-3" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='50px' background='none' border='none' motionProps={{ variants: popAnimationAlt }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={argo.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='argo'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Argostoli</Text>
                        <Text px='20px' {...texts.cardContent}>
                          <span style={{display:'block', paddingLeft: '130px'}}>Argostoli is the gateway to </span>
                          <span style={{display:'block', paddingLeft: '80px'}}>Cephalonia, a verdant Greek</span>
                          <span style={{display:'block', }}>island that blends cultural</span>
                          <span>influences from Venice, Italy and</span>
                          <span>britain.</span>
                        </Text>

                      </Stack>
                    </CardBody>
                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* messina */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={messina.isOpen}
              onOpen={messina.onOpen}
              onClose={messina.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="messina" transform="translate(-74 554)" onClick={messina.onOpen}>
                  <circle id="white_circle-4" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-4" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-4" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={messina.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='messina'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Messina</Text>
                        <PreLine px='20px' {...texts.cardContent}>
                          {`From time-worn Messina in Sicily,
                           explore celebrity haunt Taormina
                           with its stunning Greek theatre and
                           Mt Etna views.`}
                        </PreLine>
                      </Stack>
                    </CardBody>

                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* sorrento */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={sorrento.isOpen}
              onOpen={sorrento.onOpen}
              onClose={sorrento.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="sorrento" transform="translate(-112 394)" onClick={sorrento.onOpen}>
                  <circle id="white_circle-5" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-5" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-5" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={sorrento.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='sorrento'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Sorrento</Text>
                        <PreLine px='20px' {...texts.cardContent}>
                          {`Sorrento on the Amalfi Coast
                          features plunging cliffs, turquoise
                          water and towns in pastel shades.`}
                        </PreLine>
                      </Stack>
                    </CardBody>

                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>

            {/* rome */}
            <Popover
              placement='right-start'
              gutter={30}
              isOpen={rome.isOpen}
              onOpen={rome.onOpen}
              onClose={rome.onClose}
              isLazy
              lazyBehavior='keepMounted'
              top='-40px'
              closeOnBlur={false}
              flip={false}
            >
              <PopoverTrigger>
                <g id="rome" transform="translate(-240 288)" onClick={rome.onOpen}>
                  <circle id="white_circle-6" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-6" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-6" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </PopoverTrigger>
              <Portal>
                <PopoverContent pos='relative' w='auto' top='-50px' background='none' border='none' motionProps={{ variants: popAnimation }}>
                  <Flex justifyContent='flex-end' pos='relative' right='-36px'>
                    <IconButton onClick={rome.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                        <g id="X" transform="translate(-1645 -12035)">
                          <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                          <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                          <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                        </g>
                      </svg>
                    </IconButton>
                  </Flex>

                  <Card pos='relative' minW='551px' boxShadow={'xl'} borderRadius='2xl' p="20px 16px 80px">
                    <CardBody p='0'>
                      <Img
                        dimension='516x337'
                        mx='auto'
                        mock='rome'
                        borderRadius='lg'
                      />
                      <Stack mt='40px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='136px' lineHeight='100px' color='primary'>Rome</Text>
                        <PreLine px='20px' {...texts.cardContent}>
                          {`Rome’s stunning must-sees such as
                          the Colosseum and Sistine Chapel
                           compete for your time with stylish
                            shops and café terraces.`}
                        </PreLine>
                      </Stack>
                    </CardBody>

                    <Box maxW='300px' pos='absolute' bottom='-30px' right='-10px' sx={{ 'svg': {w:'full'} }}>
                      <svg  width="327.834" height="126.54" viewBox="0 0 327.834 126.54">
                        <g id="Group_6015" data-name="Group 6015" clip-path="url(#symbol)">
                          <path id="Path_2300" data-name="Path 2300" d="M108.54,25.044A29.082,29.082,0,0,0,96.189,37.8c26.306,6.243,49.236,20.088,64.73,29.3l3.277,1.967c2.263,1.349,4.944,2.842,7.779,4.441a94.142,94.142,0,0,0,9.779-5.668c4.111-2.741,9.315-6.366,15.325-10.566q1.644-1.141,3.328-2.321c-44.113-31.559-67.774-43.51-91.868-29.91m-14.686,26.6c1.218,12.224,10.655,23.945,22.951,28.513,14.471,5.373,30.942,3.016,45.141-2.28-1.289-.8-2.549-1.573-3.747-2.284l-1.079-.639C141.47,65.637,119.559,52.1,93.854,46.26a27.884,27.884,0,0,0,0,5.381m166.328-3.068c8.746,1.028,15.481-.618,19.478-4.763a14.081,14.081,0,0,0,3.832-11.269c-.532-3.451-3.181-6.712-7.084-8.73-3.857-2-12.225-4.4-24.923,1.954-4.884,2.44-10.55,5.761-16.555,9.534a38.94,38.94,0,0,0,25.252,13.273m-35.112-26.5c2.52,4.01,5.328,7.368,7.99,10.909,6.2-3.9,12.059-7.335,17.1-9.86,13.87-6.933,23.252-4.188,27.6-1.934,4.737,2.45,7.969,6.527,8.641,10.909a17.144,17.144,0,0,1-4.624,13.764c-3.251,3.367-9.7,7.085-21.944,5.642-9.991-1.175-19.787-6.751-27.524-14.555-6.615,4.221-13.57,8.913-20.328,13.57.693.5,1.377.981,2.085,1.488,48.952,35.134,86.789,32.131,102.515,11.569,11.968-15.647,8.36-30.684,5.144-38.256-4.978-11.721-15.5-21.339-24.482-22.38a1.475,1.475,0,1,1,.338-2.931c9.952,1.146,21.5,11.535,26.86,24.161,3.468,8.16,7.361,24.368-5.516,41.2C302.367,87.037,258.525,97.1,208.167,60.537c-1.768-1.282-3.5-2.529-5.207-3.76-1.418.986-2.822,1.963-4.187,2.919-6.034,4.213-11.239,7.847-15.381,10.6a94.288,94.288,0,0,1-8.379,4.953c2.745,1.578,5.558,3.244,8.215,4.979,23.763,15.464,53.812,34.126,80.063,38.061,19.171,2.876,32.8-2.721,40.033-8.532,8.408-6.768,13.3-14.928,14.28-24.432a1.478,1.478,0,0,1,2.94.3c-1.062,10.27-7.077,20.73-16.091,27.977a60.31,60.31,0,0,1-43.784,12.558c-27.731-3.138-60.78-23.725-84.781-39.351-3.777-2.458-7.4-4.805-10.811-6.971-15.231,6.058-33.382,8.993-49.3,3.08-13.311-4.94-23.53-17.686-24.863-30.984a35.928,35.928,0,0,1-.068-6.323,104.313,104.313,0,0,0-38.213-.825C8.037,52.352,3.1,75.447,3.584,90.023c.325,9.865,6.932,20.118,16.441,25.524,11.154,6.34,24.813,5.693,38.463-1.832a1.476,1.476,0,0,1,1.426,2.585c-14.585,8.036-29.272,8.68-41.348,1.814C8.037,112.129.884,101.728.14,90.726-1.831,61.852,17.2,42.822,51.326,36.256a104.6,104.6,0,0,1,41.355.77,30.906,30.906,0,0,1,13.109-15.862C133.442,4.046,156.937,11.529,209.427,48.7c6.9-4.763,14.026-9.58,20.823-13.933a110.482,110.482,0,0,1-9.377-13.434c-1.183-1.908-.654-7.28,4.2.744" transform="translate(0 0)" fill="#f6f1e8"/>
                        </g>
                      </svg>
                    </Box>
                  </Card>
                </PopoverContent>
              </Portal>
            </Popover>


          </g>

          <Box as='g' id='location-texts'>
            <text id="VENICE-2" data-name="VENICE" transform="translate(677 12350)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-32.949" y="0">VENICE</tspan></text>
            <text id="ZADAR-2" data-name="ZADAR" transform="translate(937 12439)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-29.916" y="0">ZADAR</tspan></text>
            <text id="DUBROVNIK" transform="translate(1092 12546)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-53.847" y="0">DUBROVNIK</tspan></text>
            <text id="CORFU-2" data-name="CORFU" transform="translate(1146 12749)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-30.78" y="0">CORFU</tspan></text>
            <text id="ARGOSTOLI" transform="translate(1178 12873)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-50.193" y="0">ARGOSTOLI</tspan></text>
            <text id="MESSINA-2" data-name="MESSINA" transform="translate(876 12873)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-37.962" y="0">MESSINA</tspan></text>
            <text id="ROME-2" data-name="ROME" transform="translate(638 12588)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-26.1" y="0">ROME</tspan></text>
            <text id="SORRENTO_CAPRI" data-name="SORRENTO/CAPRI" transform="translate(672 12686)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-48.276" y="13">SORRENTO</tspan><tspan x="-28.602" y="35">/CAPRI</tspan></text>
          </Box>
        </g>
      </svg>

    </Box>
  )
}

// font styles
const texts = {
  cardContent: {
    fontFamily: 'heading',
    textTransform: 'uppercase',
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: {base: '0.7px'},
  }
}

