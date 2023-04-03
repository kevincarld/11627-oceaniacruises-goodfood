import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useResponsive } from 'utils/common'
import { Box } from '@chakra-ui/react'

// NOTE: USE ONLY IF ScrollerMotion is being used in layout.
export default function MaskMover({ target, children, ...chakra }) {
  const isDesktop = useResponsive('up', 'd')
  return (
    <Box
      {...chakra}
      pos='absolute'
      inset='-10% 0 -20% 0'
      display={{base: 'none', d:'block'}}
    >
      <Parallax
        {...(isDesktop && { translateY: ['0%', '2400%'] })}
        targetElement={target.current}
        style={{height:'1%', transition: 'transform 300ms cubic-bezier(0.39, 0.575, 0.55, 0.905) 0s' }}
      >
        <Box h='130vh'>
          {children}
        </Box>
      </Parallax>
    </Box>
  )
}

{/* Sample usage
  <Mover y={[50,-50]}>
    <Center h='150px' w='400px' bg='beige'>Sample Smooth Parallax</Center>
  </Mover>
*/}

