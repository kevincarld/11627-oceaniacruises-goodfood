import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import NineLink from 'components/util/NineLink'
import Mover from 'components/util/Mover'

export default function Notable() {

  return (
    <Container pb={{d: '100px', wide: '178px'}}>
      <Flex gap={{lg:'53px'}} pt={{lg:'76px'}} direction={{base:'column-reverse', lg:'row'}}>

        <Box ml={{d:'-182px'}}>
          <Mover y={[0,-10]}>
            <Img dimension='780x473' w={{base: 'full'}} fit='cover' src='./images/notable-1.jpg'/>
          </Mover>
        </Box>

        <Box p={{base: '69px 15px 47px 18px'}} pt={{lg:0}} maxW={{lg:'456px'}} >
          <PreLine {...texts.content}>
            {`Also notable is Vista’s variety of staterooms, including the most spacious standard staterooms at sea, and staterooms for solo travellers at Concierge Level. Vista also has eight bars and lounges and Aquamar Spa, for an entirely new era of wellness. Its 1200 guests are served by 800 crew members.

            Vista makes its maiden voyage on a seven-day`} <NineLink href='https://ad.doubleclick.net/ddm/clk/553202117;362639625;d' textDecor='underline'>Founder’s Cruise</NineLink> {`between Rome and Venice on 13 May 2023, introduced earlier than planned due to exceptional demand. The journey is hosted by Oceania Cruises’ founder Frank J. Del Rio in celebration of the new ship and the brand’s 20th anniversary.`}
          </PreLine>
        </Box>
      </Flex>
    </Container>
  )
}

// font styles
const texts = {
  content: {
    fontFamily: 'body',
    fontWeight: 'normal',
    color: 'black',
    fontSize: {base: '17px',},
    lineHeight: {base: '30px', lg: '32px'}
  },

}

