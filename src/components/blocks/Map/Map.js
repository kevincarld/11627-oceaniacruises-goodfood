import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import { useDisclosure} from '@chakra-ui/react'

import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import useResizeObserver from 'use-resize-observer'
import MobileClickers from './MobileClickers'
import DesktopClickers from './DesktopClickers'

export default function Map() {
  const containerRef  = React.useRef(null)
  const [scale, setScale] = React.useState(1)
  const [desktopScale, setDesktopScale] = React.useState(1)
  const { width } = useResizeObserver({ ref: containerRef })

  React.useEffect(() => {
    setScale((width ? width : 375)/375)
    setDesktopScale((width ? width : 1920)/1920)
  }, [width])

  // desktop controllers
  const dubro = useDisclosure()
  const corfu = useDisclosure()
  const argo = useDisclosure()
  const messina = useDisclosure()
  const sorrento = useDisclosure()
  const rome = useDisclosure()
  const zadar = useDisclosure()
  const venice = useDisclosure()

  return (
    <Box ref={containerRef}>
      <Box pos='relative' overflow='hidden'>
        <Box pos='absolute' display={
          (dubro.isOpen || corfu.isOpen || argo.isOpen || messina.isOpen || sorrento.isOpen || rome.isOpen || zadar.isOpen || venice.isOpen )
            ? 'block'
            : 'none'
        }
        backdropFilter={'blur(3px) '} bg='rgba(246,241,232, .3)' inset='0 0 0 0' zIndex={30} />

        <Img display={{base: 'block', d: 'none'}} dimension='750x1704' w='full'  src='./images/map-mob.png' alt='map' draggable='false' />
        <Img pos='relative' zIndex='15' display={{base: 'none', d: 'block'}} dimension='1920x1555' mx='auto' src='./images/map.png' alt='map' draggable='false' />

        <Box zIndex={25} pos='absolute' inset={{base: '10% 0 auto 0', md:'15% 0 auto 0', lg: '20% 0 auto 0', d: '40px 0 auto 0', wide: '12% 0 auto 0'}}>
          <Box display={{base: 'block', md: 'none'}} as='svg' maxW={{base: '95%', sm: 'none'}} mx='auto' width="324.576" height="168.396" viewBox="0 0 324.576 168.396">
            <g id="Group_6964" data-name="Group 6964" transform="translate(-455.266 -990.346)">
              <text id="Voyage" transform="translate(561.266 1057.346)" fill="#c3a873" font-size="101" font-family="Sloop-ScriptOne, Sloop"><tspan x="-105.898" y="0">Voyage</tspan></text>
              <text id="Map" transform="translate(687.842 1124.742)" fill="#c3a873" font-size="101" font-family="Sloop-ScriptOne, Sloop"><tspan x="-87.516" y="0">Map</tspan></text>
            </g>
          </Box>

          <Box display={{base: 'none', md: 'block'}} as='svg' mx='auto' width="524" height="270" viewBox="0 0 524 270">
            <g id="Group_6965" data-name="Group 6965" transform="translate(-707 -11838)">
              <text id="Voyage" transform="translate(878 11947)" fill="#c3a873" font-size="163" font-family="Sloop-ScriptOne, Sloop"><tspan x="-170.906" y="0">Voyage</tspan></text>
              <text id="Map" transform="translate(1083 12054)" fill="#c3a873" font-size="163" font-family="Sloop-ScriptOne, Sloop"><tspan x="-141.24" y="0">Map</tspan></text>
            </g>
          </Box>

          <PreLine mt={{base: '-20px'}} textAlign='center' {...texts.subtitle}>
            {`of the
            FOUNDER’S CRUISE`}
          </PreLine>
        </Box>

        {/* mobile clickers */}
        <MobileClickers scale={scale} />

        {/* desktop clickers */}
        <DesktopClickers desktopScale={desktopScale} controllers={{dubro,corfu,argo,messina,sorrento,rome,zadar,venice}}/>

      </Box>
    </Box>
  )
}

// font styles
const texts = {
  subtitle: {
    color: '#001736',
    fontFamily: 'adobe',
    fontSize: {base: '26px', d:'34px'},
    lineHeight: {base: '36px', d:'46px'},
    textTransform: 'uppercase',
  }
}

