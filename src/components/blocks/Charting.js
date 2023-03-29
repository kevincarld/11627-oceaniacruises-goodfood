import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'


export default function Charting() {

  return (
    <Grid gridTemplateColumns={{lg:'6fr 6fr',wide:'7fr 5fr'}} gap={{lg:'51px'}} pt={{lg:'93px'}} pb={{lg:'43px'}}>
      <GridItem >
        <Img dimension='1072x631' w={{base: 'full'}} fit='cover' mock='charting-1'/>
        <Flex  direction='column' justify='center' align='center'  pt={{base:'32px',lg:'70px'}} pl={{base:'18px'}} 
          pr={{base:'18px'}} pb={{base:'45px'}}>
          <Flex align={{lg:'end'}} textAlign='center'direction={{base:'column' ,lg:'row'}}>
            <Text {...texts.heading} fontSize={{base:'70px' ,lg:'136px'}}>Charting</Text>
            <Text {...texts.heading} >A NEW COURSE</Text>
          </Flex>
          <Text {...texts.content} pt={{base:'100px'}} maxW='490px' >
            Oceania Cruises introduces a new Allura-class vessel with its latest ship Vista, and reinforces the company’s reputation for culinary excellence with 11 exquisite dining options, three of which are brand-new, including innovative American restaurant Ember.
          </Text>
        </Flex>
      </GridItem>
      <GridItem mt={{lg:'142px'}}>
        <Img dimension='793x866' w={{base: 'full'}} h='full' fit='cover' mock='charting-2'/>
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
    lineHeight: {base: '30px', lg: '32px'}
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    color: 'black',
    fontSize: {base: '37px', lg: '36px'},
    lineHeight: {base: '44px', lg: '29px'}
  },
}

