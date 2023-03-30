import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import { Popover, PopoverTrigger, PopoverContent, useDisclosure} from '@chakra-ui/react'

import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import useResizeObserver from 'use-resize-observer'
import MobileClickers from './MobileClickers'

export default function Map() {
  const containerRef  = React.useRef(null)
  const [scale, setScale] = React.useState(1)
  const [desktopScale, setDesktopScale] = React.useState(1)
  const { width } = useResizeObserver({ ref: containerRef })

  React.useEffect(() => {
    setScale((width ? width : 375)/375)
    setDesktopScale((width ? width : 1920)/1920)
  }, [width])


  return (
    <Box ref={containerRef}>
      <Figure pos='relative' overflow='hidden'>
        <Img display={{base: 'block', d: 'none'}} dimension='750x1704' w='full'  src='./images/map-mob.png' alt='map' draggable='false' />
        <Img display={{base: 'none', d: 'block'}} dimension='1920x1555' mx='auto' src='./images/map.png' alt='map' draggable='false' />

        {/* mobile clickers */}
        <MobileClickers scale={scale} />

        {/* desktop clickers */}
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
            'svg' : {
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
          <svg width="618" height="617.789" viewBox="0 0 618 617.789">
            <g id="Group_6958" data-name="Group 6958" transform="translate(-611 -12327)">
              <path id="Path_2690" data-name="Path 2690" d="M702.676,12345.809s34.094,63.77,132.176,94.348" transform="translate(40.711 -0.086)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
              <path id="Path_2691" data-name="Path 2691" d="M695.563,12334.387s45.852,87.434,123.008,106.324" transform="translate(180 110)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
              <path id="Path_2692" data-name="Path 2692" d="M678.587,12375.754s76.509,114.572,171.958,119.686" transform="matrix(0.839, 0.545, -0.545, 0.839, 7172.813, 1802.473)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
              <path id="Path_2693" data-name="Path 2693" d="M678.587,12375.754s19.182,54.139,70.044,70.191" transform="matrix(0.839, 0.545, -0.545, 0.839, 7251.208, 1996.504)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
              <path id="Path_2694" data-name="Path 2694" d="M678.587,12491.369s79.689-81.611,215.278-115.615" transform="matrix(0.839, 0.545, -0.545, 0.839, 7091.176, 1976.272)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
              <path id="Path_2695" data-name="Path 2695" d="M695.563,12334.387s-5.227,88.531,38,153.945" transform="translate(123.438 333.668)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>
              <path id="Path_2696" data-name="Path 2696" d="M696.027,12334.387s17.79,89.23,127.139,106" transform="translate(-4.365 221.613)" fill="none" stroke="#006bb7" stroke-linecap="round" stroke-width="6" opacity="0.533"/>

              <g id='desktop-clickers'>
                <g id="dubro" transform="translate(70 281)">
                  <circle id="white_circle" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="corfu" transform="translate(149 477)">
                  <circle id="white_circle-2" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-2" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-2" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="argo" transform="translate(168 573)">
                  <circle id="white_circle-3" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-3" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-3" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="messina" transform="translate(-74 554)">
                  <circle id="white_circle-4" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-4" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-4" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="sorrento" transform="translate(-112 394)">
                  <circle id="white_circle-5" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-5" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-5" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="rome" transform="translate(-240 288)">
                  <circle id="white_circle-6" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-6" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-6" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="venice" transform="translate(-182 78)">
                  <circle id="white_circle-7" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-7" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-7" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
                <g id="zadar" transform="translate(-55 172)">
                  <circle id="white_circle-8" data-name="white circle" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#fff"/>
                  <circle id="Ellipse_18-8" data-name="Ellipse 18" cx="19" cy="19" r="19" transform="translate(912 12249)" fill="#c3a873"/>
                  <circle id="Ellipse_17-8" data-name="Ellipse 17" cx="11" cy="11" r="11" transform="translate(920 12257)" fill="#006bb7"/>
                </g>
              </g>

              <text id="VENICE-2" data-name="VENICE" transform="translate(677 12350)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-32.949" y="0">VENICE</tspan></text>
              <text id="ZADAR-2" data-name="ZADAR" transform="translate(937 12439)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-29.916" y="0">ZADAR</tspan></text>
              <text id="DUBROVNIK" transform="translate(1092 12546)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-53.847" y="0">DUBROVNIK</tspan></text>
              <text id="CORFU-2" data-name="CORFU" transform="translate(1146 12749)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-30.78" y="0">CORFU</tspan></text>
              <text id="ARGOSTOLI" transform="translate(1178 12873)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-50.193" y="0">ARGOSTOLI</tspan></text>
              <text id="MESSINA-2" data-name="MESSINA" transform="translate(876 12873)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-37.962" y="0">MESSINA</tspan></text>
              <text id="ROME-2" data-name="ROME" transform="translate(638 12588)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-26.1" y="0">ROME</tspan></text>
              <text id="SORRENTO_CAPRI" data-name="SORRENTO/CAPRI" transform="translate(672 12686)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-48.276" y="13">SORRENTO</tspan><tspan x="-28.602" y="35">/CAPRI</tspan></text>
            </g>
          </svg>

        </Box>
      </Figure>
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

