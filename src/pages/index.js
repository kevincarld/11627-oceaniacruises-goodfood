
import Layout from "components/util/Layout"
//
import Hero from "components/blocks/Hero"
import Intro from "components/blocks/Intro"
import Adventure from "components/blocks/Adventure"
import OnBoard from "components/blocks/OnBoard"
import Charting from "components/blocks/Charting"
import Notable from "components/blocks/Notable"
import Footer from "components/blocks/Footer"

import Finest from "components/blocks/Finest"
import Slider1 from "components/blocks/Slider1"
import Slider2 from "components/blocks/Slider2"
import Vista from "components/blocks/Vista"
import Map from "components/blocks/Map/Map"

import { Box } from "@chakra-ui/react"
import Img from "components/util/Img"
import { useRef } from "react"
import MaskMover from "components/util/MaskMover"

export default function Home() {
  const target= useRef(null)
  const target2= useRef(null)
  const target3= useRef(null)
  return (
    <Layout>
      <Box pos='relative' overflow='hidden'>

        <Hero />

        <Box ref={target} pos='relative' zIndex={10}>
          <MaskMover target={target}>
            <Img draggable='false' fit='cover' dimension='1920x900' h='full' w='full' src={'./images/fixed.jpg'} />
          </MaskMover>

          <Box className='mas' pos='absolute' backdropFilter={'blur(41px) '} bg='rgba(246,241,232, .7)' inset='0 0 0 0' zIndex={12} />

          <Box
            pos='absolute'
            inset='0 0 0 0'
            display={{base: 'block', d:'none'}}
          >
            <Img draggable='false' fit='cover' dimension='1920x900' h='full' w='full' src={'./images/fixed.jpg'} />

          </Box>
          <Intro />
        </Box>


          <Finest />

          <Box ref={target2} pos='relative'  zIndex={10}>
            <MaskMover target={target2}>
              <Img draggable='false' fit='cover' dimension='1920x900' h='full' w='full' src={'./images/fixed.jpg'} />
            </MaskMover>

            <Box pos='absolute' backdropFilter={'blur(41px) '} bg='rgba(246,241,232, .7)' inset='0 0 0 0' zIndex={12} />

            <Box
            pos='absolute'
            inset='0 0 0 0'
            display={{base: 'block', d:'none'}}
          >
            <Img draggable='false' fit='cover' dimension='1920x900' h='full' w='full' src={'./images/fixed.jpg'} />
          </Box>

            <Adventure />
          </Box>

          <Box pos='relative' bg='white' zIndex={30}>

            <OnBoard />
            <Slider1 />
            <Charting />
            <Slider2 />
            <Notable />
            <Vista />
            <Map />
          </Box>

          <Box ref={target3} pos='relative'  zIndex={10}>
            <MaskMover target={target3}>
              <Img draggable='false' fit='cover' dimension='1920x900' h='full' w='full' src={'./images/fixed.jpg'} />
            </MaskMover>

            <Box pos='absolute' backdropFilter={'blur(5px) '} inset='0 0 0 0' zIndex={12} />

            <Box
            pos='absolute'
            inset='0 0 0 0'
            display={{base: 'block', d:'none'}}
          >
            <Img draggable='false' fit='cover' dimension='1920x900' h='full' w='full' src={'./images/fixed.jpg'} />
          </Box>

          <Box pos='relative' zIndex={20}>
            <Footer />
          </Box>
        </Box>

      </Box>

    </Layout>
  )
}
