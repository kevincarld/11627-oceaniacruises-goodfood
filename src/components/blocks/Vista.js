import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import { useResponsive } from 'utils/common'
export default function Vista() {
  const isWide = useResponsive('up','wide')

  return (
    <Container>
      <Grid templateColumns={{lg: '6fr 6fr', }} gap={{lg: '30px'}}>
        <GridItem>
          <Text {...texts.content} maxW={{lg: '490px'}} p={{base: '53px 15px 106px'}} px={{wide: 0}} ml={{wide: '50px'}} pt={{d:0}}>
            Guests will be first to experience the glamorous ship and enjoy exclusive celebrations, inaugural cocktail receptions and other special events while sailing to enticing destinations in Italy, Greece, and Croatia.
          </Text>

          <Figure ml={{wide: '-150px', hd:'-215px' }} mb={{base: '10px', lg: '23px'}}>
            <Img mx='auto' mr={{wide: 'unset'}} dimension='778x712' src="./images/vista-1.jpg" />
          </Figure>
        </GridItem>

        <GridItem>
          <Figure mr={{wide: '-150px', hd: '-236px'}} mb={{base: '10px', lg: '28px'}}>
            <Img mx={{base:'auto', wide: 'unset'}} dimension='918x638' src="./images/vista-2.jpg" />
          </Figure>

          <Figure mr={{wide: '-119px', }} mb={{base: '10px', lg: 0}}>
            <Img mx={{base:'auto', wide: 'unset'}} dimension='801x494' src="./images/vista-3.jpg" />
          </Figure>
        </GridItem>
      </Grid>

      <Grid templateColumns={{lg: '6fr 6fr', }} gap={{lg: '30px'}}>
        <Figure ml={{hd: '-230px'}} mt={{wide: '-30px', hd: '-80px'}}>
          <Img dimension='888x677' mx='auto' src="./images/vista-4.jpg" />
        </Figure>

        <GridItem mr={{wide: '-90px'}} display={{wide: 'flex'}} justifyContent='flex-end'>
          <Box
            pos='relative'
            bg='#006BB7'
            mx={{base: 'auto', wide: 'unset'}}
            mt={{lg: '-170px', hd: '-30px'}}
            w={{wide: '610px'}}
            h={{wide: '479px'}}
            maxW={{base: '435px', wide: '610px'}}
            p={{base: '40px 40px 45px', wide: '126px 71px 46px 136px'}}
          >
            <Box pos={{wide:'absolute'}} top={{wide: '-12px'}} left={{wide: '30px'}} as='svg' width="56.481" height="32.454" viewBox="0 0 56.481 32.454">
              <path id="Path_2306" data-name="Path 2306" d="M89.08-118.686c-.524-1.31-1.31-.786-2.358-.524a64.165,64.165,0,0,0-17.816,9.956c-2.882,2.358-8.384,7.336-10.48,12.314-1.572,4.454.262,8.646,3.93,9.694,3.93.786,7.6-1.31,9.17-5.5,1.048-2.882,0-7.336-2.882-8.384,2.358-6.288,12.576-13.1,19.126-15.72A1.745,1.745,0,0,0,89.08-118.686Zm-25.414,0c-.262-1.31-1.31-.786-2.358-.524a68.312,68.312,0,0,0-17.816,9.956c-2.882,2.358-8.384,7.336-10.218,12.314-1.834,4.454.262,8.646,3.93,9.694,3.93.786,7.336-1.31,8.908-5.5,1.048-2.882,0-7.336-2.882-8.384,2.358-6.288,12.576-13.1,19.126-15.72A1.745,1.745,0,0,0,63.666-118.686Z" transform="translate(-32.599 119.537)" fill="#fff"/>
            </Box>

            <Text {...texts.vista}
              pos={{wide:'absolute'}}
              top={{wide: '20px'}}
              left={{wide: '5px'}}
            >
              Vista
            </Text>

            <PreLine {...texts.quote} mt={{base: '-30px'}}>
              <Box as='span' textIndent={'100px'} display={{base: 'none', wide: 'block'}}>
                also has eight
              </Box>
              {
                !isWide
                  ? `also has eight bars
                  and lounges and
                  Aquamar Spa, for an
                  entirely new era of
                  wellness. `
                  : `bars and lounges and
                  Aquamar Spa, for an
                  entirely new era of
                  wellness. `
              }
            </PreLine>

            <Box mt={{base: '30px', d:'25px'}}>
              <Text pos='relative' mb="0!important" {...texts.author}>
                <Box pos='absolute' top={{base: '-50px'}} right={{base: '60px', wide: '170px'}} as='svg' width="56.481" height="32.454" viewBox="0 0 56.481 32.454">
                  <path id="Path_2307" data-name="Path 2307" d="M32.6-87.935c.524,1.31,1.31.786,2.358.524a64.165,64.165,0,0,0,17.816-9.956c2.882-2.358,8.384-7.336,10.48-12.314,1.572-4.454-.262-8.646-3.93-9.694-3.93-.786-7.6,1.31-9.17,5.5-1.048,2.882,0,7.336,2.882,8.384-2.358,6.288-12.576,13.1-19.126,15.72A1.745,1.745,0,0,0,32.6-87.935Zm25.414,0c.262,1.31,1.31.786,2.358.524a68.312,68.312,0,0,0,17.816-9.956c2.882-2.358,8.384-7.336,10.218-12.314,1.834-4.454-.262-8.646-3.93-9.694-3.93-.786-7.336,1.31-8.908,5.5-1.048,2.882,0,7.336,2.882,8.384-2.358,6.288-12.576,13.1-19.126,15.72A1.745,1.745,0,0,0,58.012-87.935Z" transform="translate(-32.599 119.537)" fill="#fff"/>
                </Box>

                JASON WORTH
              </Text>

              <PreLine mt={{base: "7px", wide: '17px'}}  {...texts.authorSubtitle}>
                {`Vice President Sales and General Manager
                Asia Pacific.`}
              </PreLine>
            </Box>
          </Box>
        </GridItem>

      </Grid>
    </Container>
  )
}

// font styles
const texts = {
  vista: {
    color: 'primary',
    fontFamily: 'sloop',
    fontSize: {base: '125px', sm: '136px'},
    lineHeight: {base: '147px', sm: '157px'},

  },
  content: {
    fontFamily: 'body',
    fontWeight: 'normal',
    fontSize: {base: '17px'},
    lineHeight: {base: '30px', d:'32px'},
  },
  quote: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base:'17px', sm: '24px', md:'26px', d:'27px'},
    letterSpacing: {base: '1.1px'},
    lineHeight: {base:'27px', sm: '32px', d:'40px'},
    textTransform: 'uppercase',
  },
  author: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base:'16px', sm: '20px', d: '21px' },
    lineHeight: {base:'15px', sm: '18px'},
    letterSpacing: {base: '1px'},
    textTransform: 'uppercase',
  },
  authorSubtitle: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base:'10px', sm: '11px', d:'13px'},
    lineHeight: {base:'16px', sm: '18px'},
    textTransform: 'uppercase',
  }
}

