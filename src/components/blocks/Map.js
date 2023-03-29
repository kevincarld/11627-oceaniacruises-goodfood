import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import useResizeObserver from 'use-resize-observer'

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
              <g id="dubro" transform="translate(490.898 11996.437)">
                <ellipse id="white_circle" data-name="white circle" cx="7" cy="6" rx="7" ry="6" transform="translate(4.721 6.467)" fill="#fff"/>
                <circle id="Ellipse_18" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.279 0.467)" fill="#c3a873"/>
                <circle id="Ellipse_17" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.721 5.467)" fill="#006bb7"/>
              </g>
              <g id="corfu" transform="translate(541.068 12121.86)">
                <ellipse id="white_circle-2" data-name="white circle" cx="7.5" cy="7" rx="7.5" ry="7" transform="translate(4.551 5.043)" fill="#fff"/>
                <circle id="Ellipse_18-2" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.449 0.043)" fill="#c3a873"/>
                <circle id="Ellipse_17-2" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.551 5.043)" fill="#006bb7"/>
              </g>
              <g id="argo" transform="translate(553.014 12182.781)">
                <ellipse id="white_circle-3" data-name="white circle" cx="7.5" cy="7" rx="7.5" ry="7" transform="translate(4.607 5.123)" fill="#fff"/>
                <circle id="Ellipse_18-3" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.393 0.123)" fill="#c3a873"/>
                <circle id="Ellipse_17-3" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.607 5.123)" fill="#006bb7"/>
              </g>
              <g id="messina" transform="translate(398.92 12170.836)">
                <ellipse id="white_circle-4" data-name="white circle" cx="6.5" cy="7" rx="6.5" ry="7" transform="translate(5.699 5.068)" fill="#fff"/>
                <circle id="Ellipse_18-4" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.301 0.068)" fill="#c3a873"/>
                <circle id="Ellipse_17-4" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.699 5.068)" fill="#006bb7"/>
              </g>
              <g id="sorrento" transform="translate(375.029 12069.302)">
                <circle id="white_circle-5" data-name="white circle" cx="7.5" cy="7.5" r="7.5" transform="translate(4.59 4.601)" fill="#fff"/>
                <circle id="Ellipse_18-5" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.41 -0.399)" fill="#c3a873"/>
                <circle id="Ellipse_17-5" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.59 4.601)" fill="#006bb7"/>
              </g>
              <g id="rome" transform="translate(293.803 12001.214)">
                <circle id="white_circle-6" data-name="white circle" cx="7" cy="7" r="7" transform="translate(4.817 4.689)" fill="#fff"/>
                <circle id="Ellipse_18-6" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(-0.183 -0.311)" fill="#c3a873"/>
                <circle id="Ellipse_17-6" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(4.817 4.689)" fill="#006bb7"/>
              </g>
              <g id="zadar" transform="translate(410.867 11927.154)">
                <circle id="white_circle-7" data-name="white circle" cx="6.5" cy="6.5" r="6.5" transform="translate(5.753 5.749)" fill="#fff"/>
                <circle id="Ellipse_18-7" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(0.753 0.749)" fill="#c3a873"/>
                <circle id="Ellipse_17-7" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(5.753 5.749)" fill="#006bb7"/>
              </g>
              <text id="VENICE" transform="translate(303.119 11882.402)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-18.305" y="0">VENICE</tspan></text>
              <text id="ZADAR-2" data-name="ZADAR" transform="translate(457.365 11933.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-16.62" y="0">ZADAR</tspan></text>
              <text id="DUBROVNIK" transform="translate(552.621 12003.904)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-29.915" y="0">DUBROVNIK</tspan></text>
              <text id="CORFU-2" data-name="CORFU" transform="translate(590.432 12128.904)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-17.1" y="0">CORFU</tspan></text>
              <text id="ARGOSTOLI" transform="translate(564.619 12223.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-27.885" y="0">ARGOSTOLI</tspan></text>
              <text id="MESSINA-2" data-name="MESSINA" transform="translate(414.619 12213.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-21.09" y="0">MESSINA</tspan></text>
              <text id="ROME-2" data-name="ROME" transform="translate(284.619 11993.904)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-14.5" y="0">ROME</tspan></text>
              <text id="SORRENTO_CAPRI" data-name="SORRENTO
          /CAPRI" transform="translate(313.619 12092.902)" fill="#001736" font-size="10" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-26.82" y="7">SORRENTO</tspan><tspan x="-15.89" y="18">/CAPRI</tspan></text>
              <g id="venice-2" data-name="venice">
                <ellipse id="white_circle-8" data-name="white circle" cx="7" cy="6.5" rx="7" ry="6.5" transform="translate(335.621 11872.902)" fill="#fff"/>
                <circle id="Ellipse_18-8" data-name="Ellipse 18" cx="12" cy="12" r="12" transform="translate(330.621 11867.902)" fill="#c3a873"/>
                <circle id="Ellipse_17-8" data-name="Ellipse 17" cx="7" cy="7" r="7" transform="translate(335.621 11872.902)" fill="#006bb7"/>
              </g>
            </g>
          </svg>
        </Box>

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
              <text id="VENICE-2" data-name="VENICE" transform="translate(677 12350)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-32.949" y="0">VENICE</tspan></text>
              <text id="ZADAR-2" data-name="ZADAR" transform="translate(937 12439)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-29.916" y="0">ZADAR</tspan></text>
              <text id="DUBROVNIK" transform="translate(1092 12546)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-53.847" y="0">DUBROVNIK</tspan></text>
              <text id="CORFU-2" data-name="CORFU" transform="translate(1146 12749)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-30.78" y="0">CORFU</tspan></text>
              <text id="ARGOSTOLI" transform="translate(1178 12873)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-50.193" y="0">ARGOSTOLI</tspan></text>
              <text id="MESSINA-2" data-name="MESSINA" transform="translate(876 12873)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-37.962" y="0">MESSINA</tspan></text>
              <text id="ROME-2" data-name="ROME" transform="translate(638 12588)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-26.1" y="0">ROME</tspan></text>
              <text id="SORRENTO_CAPRI" data-name="SORRENTO
          /CAPRI" transform="translate(672 12686)" fill="#001736" font-size="18" font-family="AGaramondPro-Regular, Adobe Garamond Pro"><tspan x="-48.276" y="13">SORRENTO</tspan><tspan x="-28.602" y="35">/CAPRI</tspan></text>
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

