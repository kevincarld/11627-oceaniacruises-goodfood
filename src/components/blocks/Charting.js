import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import Mover from 'components/util/Mover'

export default function Charting() {

  return (
    <Grid maxW={'1920px'} mx='auto' gridTemplateColumns={{d:'6fr 6fr',wide:'7fr 5fr'}} gap={{d:'51px'}} pt={{d:'93px'}} pb={{d:'43px'}}>
      <GridItem >
        <Mover x={[-10,0]}>
          <Img dimension='1072x631' w={{base: 'full'}} fit='cover' src='./images/charting-1.jpg'/>
        </Mover>
        <Flex  direction='column' justify='center' align='center'  pt={{base:'32px',d:'70px'}} pl={{base:'18px'}} pr={{base:'18px'}} pb={{base:'45px'}}>

          <Flex mt={{base:'20px'}} align={{d:'end'}} textAlign='center'direction={{base:'column' ,d:'row'}}>
            <Text {...texts.heading} fontSize={{base:'112px' ,d:'116px', wide: '136px'}} lineHeight={{base: '112px'}} fontFamily='sloop' color='primary'>Charting</Text>
            <Text {...texts.heading} >A NEW COURSE</Text>
          </Flex>
          <Text {...texts.content} pt={{base:'40px'}} maxW='490px' >
            Oceania Cruises introduces a new Allura-class vessel with its latest ship Vista, and reinforces the company’s reputation for culinary excellence with 11 exquisite dining options, three of which are brand-new, including innovative American restaurant Ember.
          </Text>

        </Flex>
      </GridItem>
      <GridItem mt={{d:'142px'}}>
        <Mover x={[10,-5]}>
          <Img dimension='793x866' w={{base: 'full'}} h='full' fit='cover' src='./images/charting-2.jpg'/>
        </Mover>
      </GridItem>
    </Grid>
  )
}

// font styles
const texts = {
  content: {
    fontFamily: 'body',
    fontWeight: 'normal',
    color: 'black',
    fontSize: {base: '17px'},
    lineHeight: {base: '30px', d: '32px'}
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    color: 'black',
    fontSize: {base: '37px', d: '36px'},
    lineHeight: {base: '44px', d: '29px'}
  },
}

