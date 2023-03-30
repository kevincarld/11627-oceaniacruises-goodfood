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
      <Figure pos='relative' overflow='hidden'>
        <Img display={{base: 'block', d: 'none'}} dimension='750x1704' w='full'  src='./images/map-mob.png' alt='map' draggable='false' />
        <Img display={{base: 'none', d: 'block'}} dimension='1920x1555' mx='auto' src='./images/map.png' alt='map' draggable='false' />

        {/* mobile clickers */}
        <MobileClickers scale={scale} />

        {/* desktop clickers */}
        <DesktopClickers desktopScale={desktopScale} controllers={{dubro,corfu,argo,messina,sorrento,rome,zadar,venice}}/>

      </Figure>
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

