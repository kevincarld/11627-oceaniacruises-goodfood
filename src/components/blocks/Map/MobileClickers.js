import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Stack, Heading,IconButton  } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const BlurredOverlay = () => <ModalOverlay backdropFilter='blur(3px)' bg='rgba(255,255,255,.2)' />

export default function MobileClickers({ scale }) {
  const dubro = useDisclosure()
  const corfu = useDisclosure()
  const argo = useDisclosure()
  const messina = useDisclosure()
  const sorrento = useDisclosure()
  const rome = useDisclosure()
  const zadar = useDisclosure()
  const venice = useDisclosure()

  return (
    <Box
      sx={{
        pos: 'absolute',
        bottom: {base: 0, sm: '5%'},
        left: 0,
        right: 0,
        display: {base:'flex', d: 'none'},
        justifyContent: 'center',
        alignItems: 'flex-end',
        transform: {sm: `scale(${scale})`},
        transformOrigin: 'bottom center',
        'svg' : {
          w: {base: '98%', sm: '100%'},
          '#mobile-clickers': {
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
      <svg xmlns="http://www.w3.org/2000/svg" width="338.813" height="393.745" viewBox="0 0 338.813 393.745">
        <g id="Group_6957" data-name="Group 6957" transform="translate(-269.619 -11867.902)">
          <path id="Path_2690" data-name="Path 2690" d="M702.676,12345.809s21.667,40.526,84,59.959" transform="translate(-363.496 -465.967)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>
          <path id="Path_2691" data-name="Path 2691" d="M695.563,12334.387s29.139,55.566,78.172,67.57" transform="translate(-272.385 -391.844)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>
          <path id="Path_2692" data-name="Path 2692" d="M0,0S48.622,72.811,109.28,76.061" transform="matrix(0.839, 0.545, -0.545, 0.839, 503.279, 12010.447)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>
          <path id="Path_2693" data-name="Path 2693" d="M0,0S12.19,34.405,44.514,44.607" transform="matrix(0.839, 0.545, -0.545, 0.839, 553.1, 12133.756)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>
          <path id="Path_2694" data-name="Path 2694" d="M0,73.474S50.643,21.61,136.81,0" transform="matrix(0.839, 0.545, -0.545, 0.839, 451.398, 12120.897)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>
          <path id="Path_2695" data-name="Path 2695" d="M695.49,12334.387s-3.322,56.264,24.149,97.834" transform="translate(-308.258 -249.702)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>
          <path id="Path_2696" data-name="Path 2696" d="M696.027,12334.387s11.306,56.707,80.8,67.365" transform="translate(-389.719 -320.913)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="5" opacity="0.533"/>

          <g id='mobile-clickers'>


            <g id="dubro" transform="translate(490.898 11996.437)" onClick={dubro.onOpen}>
              <ellipse id="white_circle" data-name="white circle" cx="7" cy="6" rx="7" ry="6" transform="translate(4.721 6.467)" fill="#fff"/>
              <circle id="Ellipse_18" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.279 0.467)" fill="#c3a873"/>
              <circle id="Ellipse_17" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.721 5.467)" fill="#006bb7"/>
            </g>
            <Modal onClose={dubro.onClose} isOpen={dubro.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '375px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        dimension='314x205'
                        mx='auto'
                        mock='dubro'
                        src='./images/dubro.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='90px' color='primary'>Dubrovnik</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {`Marvellous walled city
                          Dubrovnik is a charming clutter
                           of belltowers, churches,
                            monasteries and flag-stoned
                            squares.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={dubro.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>


            <g id="corfu" transform="translate(541.068 12121.86)" onClick={corfu.onOpen}>
              <ellipse id="white_circle-2" data-name="white circle" cx="7.5" cy="7" rx="7.5" ry="7" transform="translate(4.551 5.043)" fill="#fff"/>
              <circle id="Ellipse_18-2" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.449 0.043)" fill="#c3a873"/>
              <circle id="Ellipse_17-2" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.551 5.043)" fill="#006bb7"/>
            </g>
            <Modal onClose={corfu.onClose} isOpen={corfu.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '375px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='corfu'
                        src='./images/corfu.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='95px' color='primary'>Corfu</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {` Corfu provides a
                          splendid old town and
                          Venetian fortress, and has a
                          rugged interior draped in olive
                          groves.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={corfu.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>


            <g id="argo" transform="translate(553.014 12182.781)" onClick={argo.onOpen}>
              <ellipse id="white_circle-3" data-name="white circle" cx="7.5" cy="7" rx="7.5" ry="7" transform="translate(4.607 5.123)" fill="#fff"/>
              <circle id="Ellipse_18-3" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.393 0.123)" fill="#c3a873"/>
              <circle id="Ellipse_17-3" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.607 5.123)" fill="#006bb7"/>
            </g>
            <Modal onClose={argo.onClose} isOpen={argo.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '395px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='argo'
                        src='./images/argo.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='95px' color='primary'>Argostoli</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {` Argostoli is the gateway
                            to Cephalonia, a verdant
                            Greek island that blends cultural
                            influences from Venice, Italy and
                            Britain.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={argo.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>


            <g id="messina" transform="translate(398.92 12170.836)" onClick={messina.onOpen}>
              <ellipse id="white_circle-4" data-name="white circle" cx="6.5" cy="7" rx="6.5" ry="7" transform="translate(5.699 5.068)" fill="#fff"/>
              <circle id="Ellipse_18-4" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.301 0.068)" fill="#c3a873"/>
              <circle id="Ellipse_17-4" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.699 5.068)" fill="#006bb7"/>
            </g>
            <Modal onClose={messina.onClose} isOpen={messina.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '395px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='messina'
                        src='./images/messina.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='95px' color='primary'>Messina</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {`From time-worn Messina in Sicily,
                          explore celebrity haunt Taormina
                          with its stunning Greek theatre
                           and Mt Etna views.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={messina.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>


            <g id="sorrento" transform="translate(375.029 12069.302)" onClick={sorrento.onOpen}>
              <circle id="white_circle-5" data-name="white circle" cx="7.5" cy="7.5" r="7.5" transform="translate(4.59 4.601)" fill="#fff"/>
              <circle id="Ellipse_18-5" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.41 -0.399)" fill="#c3a873"/>
              <circle id="Ellipse_17-5" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.59 4.601)" fill="#006bb7"/>
            </g>
            <Modal onClose={sorrento.onClose} isOpen={sorrento.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '375px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='sorrento'
                        src='./images/sorrento.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='95px' color='primary'>Sorrento</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {`Sorrento on the Amalfi Coast
                          features plunging cliffs,
                          turquoise water and towns in
                          pastel shades.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={sorrento.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>

            <g id="rome" transform="translate(293.803 12001.214)" onClick={rome.onOpen}>
              <circle id="white_circle-6" data-name="white circle" cx="7" cy="7" r="7" transform="translate(4.817 4.689)" fill="#fff"/>
              <circle id="Ellipse_18-6" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.183 -0.311)" fill="#c3a873"/>
              <circle id="Ellipse_17-6" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.817 4.689)" fill="#006bb7"/>
            </g>
            <Modal onClose={rome.onClose} isOpen={rome.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '395px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='rome'
                        src='./images/rome.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='95px' color='primary'>Rome</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {`Rome’s stunning must-sees such as
                           the Colosseum and Sistine Chapel
                            compete for your time with stylish
                             shops and café terraces.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={rome.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>


            <g id="zadar" transform="translate(410.867 11927.154)" onClick={zadar.onOpen}>
              <circle id="white_circle-7" data-name="white circle" cx="6.5" cy="6.5" r="6.5" transform="translate(5.753 5.749)" fill="#fff"/>
              <circle id="Ellipse_18-7" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(0.753 0.749)" fill="#c3a873"/>
              <circle id="Ellipse_17-7" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(5.753 5.749)" fill="#006bb7"/>
            </g>
            <Modal onClose={zadar.onClose} isOpen={zadar.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '375px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='zadar'
                        src='./images/zadar.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' fontSize='110px' lineHeight='90px' color='primary'>zadar</Text>
                        <PreLine  {...texts.cardContent}>
                          {`Peninsula-hugging old town
                          Zadar in Croatia fronts a sparkling
                          Adriatic Sea, scattered with
                          pine-scented islands.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={zadar.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>


            <g id="venice" data-name="venice" onClick={venice.onOpen}>
              <ellipse id="white_circle-8" data-name="white circle" cx="7" cy="6.5" rx="7" ry="6.5" transform="translate(335.621 11872.902)" fill="#fff"/>
              <circle id="Ellipse_18-8" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(330.621 11867.902)" fill="#c3a873"/>
              <circle id="Ellipse_17-8" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(335.621 11872.902)" fill="#006bb7"/>
            </g>
            <Modal onClose={venice.onClose} isOpen={venice.isOpen} isCentered>
              <BlurredOverlay />

              <ModalContent alignItems={'center'} bg='none' boxShadow={0}>
                <ModalBody maxW={{base: '395px'}}>
                  <Card boxShadow={'xl'} borderRadius='2xl' p="10px 10px 60px">
                    <CardBody p='0'>
                      <Img
                        mx='auto'
                        dimension={'314x205'}
                        mock='venice'
                        src='./images/venice.jpg'
                        borderRadius='lg'
                      />
                      <Stack mt='30px'>
                        <Text as='h3' px='15px' fontFamily='sloop' whiteSpace={'nowrap'} pos='relative' left='-8px' fontSize='80px' lineHeight='95px' color='primary'>Venice</Text>
                        <PreLine px='10px' {...texts.cardContent}>
                          {`Where better for a grand
                          finale than Venice, packed
                          with architectural beauty and
                          cultural treasures.`}
                        </PreLine>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>

                <IconButton onClick={venice.onClose} bg='none' aria-label='close button' _hover={{ bg: 'transparent'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.055" height="26.055" viewBox="0 0 26.055 26.055">
                    <g id="X" transform="translate(-1645 -12035)">
                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="13.027" cy="13.027" r="13.027" transform="translate(1645 12035)" fill="#e2d5bb"/>
                      <rect id="Rectangle_1672" data-name="Rectangle 1672" width="3.619" height="17.37" rx="1.809" transform="translate(1663.251 12040.606) rotate(45)" fill="#fff"/>
                      <rect id="Rectangle_1673" data-name="Rectangle 1673" width="3.619" height="17.37" rx="1.809" transform="translate(1665.81 12052.89) rotate(135)" fill="#fff"/>
                    </g>
                  </svg>
                </IconButton>
              </ModalContent>
            </Modal>

          </g>

          <text id="VENICE" transform="translate(303.119 11882.402)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-18.305" y="0">VENICE</tspan></text>
          <text id="ZADAR-2" data-name="ZADAR" transform="translate(457.365 11933.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-16.62" y="0">ZADAR</tspan></text>
          <text id="DUBROVNIK" transform="translate(552.621 12003.904)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-29.915" y="0">DUBROVNIK</tspan></text>
          <text id="CORFU-2" data-name="CORFU" transform="translate(590.432 12128.904)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-17.1" y="0">CORFU</tspan></text>
          <text id="ARGOSTOLI" transform="translate(564.619 12223.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-27.885" y="0">ARGOSTOLI</tspan></text>
          <text id="MESSINA-2" data-name="MESSINA" transform="translate(414.619 12213.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-21.09" y="0">MESSINA</tspan></text>
          <text id="ROME-2" data-name="ROME" transform="translate(284.619 11993.904)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-14.5" y="0">ROME</tspan></text>
          <text id="SORRENTO_CAPRI" data-name="SORRENTO/CAPRI" transform="translate(313.619 12092.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-26.82" y="7">SORRENTO</tspan><tspan x="-15.89" y="18">/CAPRI</tspan></text>
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
    fontSize: {base: '11px', sm: '14px'},
    lineHeight: {base: '16px', sm: '20px'},
    letterSpacing: {base: '0.7px'},
  }
}

