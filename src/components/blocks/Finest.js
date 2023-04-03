import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import Mover from 'components/util/Mover'

export default function Finest() {

  return (
    <Box pos='relative' zIndex={20} bg='white'>
      <Container>

        <Grid templateColumns={{lg:"6fr 6fr", wide: '8fr 4fr'}}>
          <GridItem pr={{wide: '20px'}}  ml={{wide: '-200px'}}>
            <Mover y={[15,0]}>
              <Img dimension="1121x1062" mock="finest-1" src='./images/finest-1.jpg'  w='full'/>
            </Mover>
          </GridItem>

          <GridItem pl={{lg: "80px"}}>
            <Mover x={[10,0]}>
              <Box display="flex" flexDirection="column" justifyContent={{base:"center", lg:"flex-start"}} alignItems={{base:"center", lg:"flex-start"}}>
                <Text
                  mb="0!important" {...texts.extra}
                  pos="relative"
                  bottom={{base: "-26px", wide: '-40px'}}
                  left={{base: "10px", lg:'90px', wide:'60px'}}
                >
                  THE
                </Text>
                <Box
                  sx={{
                    position: {lg:"relative"},
                    left: {lg: "-99px"},
                    "svg": {
                      width: "100%",
                    }
                  }}
                  mx={{base:"auto", lg:"0"}}
                  maxW={{base:"319px", lg:"none"}}
                >
                  <svg width="429.991" height="194.162" viewBox="0 0 429.991 194.162">
                    <g id="Group_6959" data-name="Group 6959" transform="translate(-1105.176 -1679.148)">
                      <path id="Path_2718" data-name="Path 2718" d="M189.72-74.528c-.136-.272-.952.136-2.312.272-1.9.272-4.08,0-7.48-.544-10.608-1.9-19.856-4.216-27.336-5.848,2.176-2.04,6.8-5.3,10.064-6.256.272-.136,2.176-.544,2.312-1.224.136-.952-2.04-.544-3.128-.136a42.666,42.666,0,0,0-12.512,6.936c-12.1-2.312-39.44-8.16-63.92-8.16-29.512,0-43.248,5.44-55.76,13.192-12.92,7.888-18.9,21.352-19.04,30.056-.408,9.792,3.4,14.28,5.712,15.776-5.44,7.616-8.84,15.64-9.112,22.576-.68,13.736,9.52,18.5,20.264,18.5,27.744,0,50.864-15.1,79.424-45.016a120.256,120.256,0,0,1,15.64.68c1.632,0,3.4.408,3.944,0,.68-.68.68-1.768-1.5-2.04-3.536-.408-9.928-.68-16.456-.68,1.36-1.224,5.984-6.12,7.208-7.48,9.52-10.336,19.04-20.808,33.728-33.864,10.608,2.04,20.808,3.808,29.92,4.9a23.627,23.627,0,0,0,8.3-.136C188.768-73.168,189.992-73.848,189.72-74.528Zm-44.064-4.08c-12.1,10.2-23.664,20.944-36.312,33.32-1.768,1.9-7.208,7.48-9.248,9.248-4.216.272-7.616.408-12.648.952C84.728-34.68,79.7-34,76.976-32.912,87.448-43.656,93.432-56.848,86.632-61.2c-2.04-1.36-5.3-2.04-9.52-2.04-10.744,0-27.2,4.352-41.616,14.144A79.62,79.62,0,0,0,17.272-31.688c-2.856-2.584-4.76-7.208-4.624-14.416,0-8.16,5.168-19.176,19.312-27.472C43.248-80.1,58.616-84.728,85.272-84.728,105.672-84.728,137.224-79.968,145.656-78.608Zm-47.6,44.472C75.208-12.24,50.32,8.3,27.608,8.3,17.68,8.3,8.568,4.624,9.248-7.888c.68-11.424,14.416-26.384,29.376-36.448,12.784-8.568,29.512-17,40.528-17.136,2.856,0,5.168.136,7.072,1.9,4.9,4.216-1.9,16.864-12.512,27.88a33.916,33.916,0,0,0-8.16,4.9c-1.9,1.36-4.352,4.352-3.536,5.168.952.952,2.992-.408,4.9-2.04,2.176-1.9,4.488-4.216,6.12-5.3,2.856-2.04,7.616-3.4,11.424-4.08C88.672-33.592,93.568-33.864,98.056-34.136Zm53.72-16.592a3.892,3.892,0,0,0-3.808-3.808,3.892,3.892,0,0,0-3.808,3.808,3.892,3.892,0,0,0,3.808,3.808A3.892,3.892,0,0,0,151.776-50.728ZM141.3-39.44a16.852,16.852,0,0,0-7.48,1.36c-5.44,2.992-15.64,12.512-20.944,17.952-10.2,10.744-14.008,21.216-4.9,21.216,3.944,0,10.064-3.672,14.552-6.936,2.856-2.176,10.88-8.568,14.416-12.1.544-.408,1.088-.952.544-1.5-.68-.68-1.36,0-1.9.408-2.856,2.584-9.656,8.3-14.28,11.7-3.808,2.856-10.88,7.208-13.056,6.256-2.04-.952.544-5.032,4.76-10.2A364.316,364.316,0,0,1,141.3-39.44Zm40.528,20.672c-.544-.68-1.088-.136-1.632.272-3.808,3.128-10.064,8.7-14.824,12.1-5.3,3.808-10.88,6.256-12.24,5.3-1.36-1.088-.544-3.128,4.352-8.16,2.856-2.992,6.528-6.664,10.88-10.608,6.528-5.848,18.224-17.272,9.52-19.992-5.576-1.9-25.024,11.7-32.912,18.088,6.256-7.072,14.008-14.28,18.9-17.68-3.4,0-7.072.68-9.384,2.176a82.05,82.05,0,0,0-12.512,11.016c-7.208,7.48-13.872,15.776-17.544,22.712-.68,1.36-.408,5.3,1.224,5.3,7.208-9.112,8.568-11.016,17.272-19.312,9.248-8.7,29.92-21.624,33.048-20.264,2.72,1.088-8.84,10.064-13.464,14.28-5.576,5.168-8.3,7.616-11.7,12.376-4.488,6.392-2.856,11.424.544,12.24,3.128.68,8.976-1.632,14.416-5.576a176.081,176.081,0,0,0,15.232-12.24C181.7-17.272,182.512-18.088,181.832-18.768Zm31.824-20.944c-4.76-2.72-20.808,5.984-31.144,15.776-8.7,8.432-10.472,15.1-10.608,17.68-.544,4.9,2.584,6.936,6.12,7.344,5.3.408,11.832-2.856,16.592-6.256a140.342,140.342,0,0,0,15.64-12.648c.544-.544,1.224-1.224.68-1.9-.408-.544-1.36,0-1.9.544A127.439,127.439,0,0,1,191.76-5.44C186.184-1.9,180.744-.136,178.3-1.088c-5.032-2.176,4.488-14.008,12.92-21.9,2.72,1.632,12.784-1.768,17.136-4.76C213.52-31.416,218.144-37.128,213.656-39.712Zm-.816,1.224c1.36,1.088-1.5,4.9-5.984,8.432-5.984,4.76-12.784,7.072-14.824,6.256C198.7-30.328,211.208-39.848,212.84-38.488Zm34.136-11.7c-1.632-1.36-4.624.408-9.384,4.76a78.191,78.191,0,0,0-8.976,9.656c-3.4,3.944-10.744,10.336-16.184,14.96-1.768,0-3.944,1.768-6.392,3.944-1.632,1.36-4.624,3.944-5.848,4.9-2.992,2.72-4.9,5.712-4.9,7.888-.136,3.672,2.856,5.032,6.392,5.168,2.72.272,9.52-.68,14.144-2.856,5.848-2.584,15.912-8.84,23.8-16.048.408-.272.952-1.224.408-1.632a.824.824,0,0,0-1.36,0c-6.256,5.576-14.96,12.24-23.8,16.32,12.1-8.024,12.376-18.768,13.6-25.024.408-2.176,1.088-5.168,2.584-6.936,1.9-2.04,5.984-4.352,9.248-6.664C246.3-45.968,248.064-49.232,246.976-50.184ZM227.8-32.776c-1.632,6.256-7.344,17-12.1,22.168-5.3,5.984-11.152,8.84-15.232,8.84-1.632,0-3.536-.816-3.4-2.72.136-1.5,1.088-3.128,3.264-4.76,1.9-1.36,5.168-3.4,6.8-4.624,3.4-2.176,5.712-4.352,6.12-5.576A144.954,144.954,0,0,0,227.8-32.776Zm156.672-32.64c2.176-12.376-5.848-25.7-32.232-25.432-20.808.272-45.288,12.648-65.008,26.928a282.86,282.86,0,0,0-32.1,27.744c-3.128.136-8.432.544-10.064.816-.408.136-1.088.272-1.224.816-.136.408,0,.816,1.088.68,3.264-.272,5.984-.544,8.3-.544-10.744,10.88-17.408,18.5-20.4,23.392-3.128,5.168-3.264,10.472,1.088,12.1,3.944,1.36,9.384-1.36,15.368-5.848,5.032-3.808,11.7-9.52,15.1-12.648.544-.68,1.5-1.36.952-2.176-.544-.544-1.36,0-1.9.408C259.08-15.1,252.008-9.248,248.88-6.8c-4.488,3.4-10.608,7.072-12.92,5.712-3.672-2.176,4.08-11.288,18.088-25.84,2.856-2.992,4.9-5.032,7.344-7.48,3.128-.272,9.384-.408,11.7-.408a1.6,1.6,0,0,0,1.5-.68c.408-.816-.408-.952-.68-.952-2.992-.272-8.568,0-10.472,0,6.12-5.848,18.088-16.32,26.52-23.12,19.04-14.96,42.432-28.968,62.016-29.24,24.344-.272,31.688,11.424,29.24,24.48a16.272,16.272,0,0,1-4.9,8.84c-1.088.816-.952.68-.816,1.224.136.408.408.544,1.5,0C379.44-55.488,383.248-59.16,384.472-65.416Z" transform="translate(1098 1770)" fill="#c3a873"/>
                      <path id="Path_2717" data-name="Path 2717" d="M151.5-75.072c0-6.256-8.024-10.2-17.816-10.2a80.836,80.836,0,0,0-24.208,3.808,123.941,123.941,0,0,0-28.832-3.808c-19.448,0-36.04,4.352-50.728,14.144C15.368-61.336,3.808-44.2,3.808-27.064c-.136,15.912,8.16,25.3,22.848,24.752a9.189,9.189,0,0,0,3.672-.68c1.9,7.888,9.52,11.56,18.36,11.288C59.16,7.888,68.952,3.672,77.928-2.04c6.256-3.808,12.512-8.976,17.816-13.328.816-.68,1.9-1.9,1.224-2.584s-1.632.544-2.312,1.088A213.045,213.045,0,0,1,76.976-3.808c-8.3,5.3-18.9,9.656-28.016,9.928S35.768,1.632,35.768-4.352c0-12.1,15.368-33.048,34-49.1C82.824-64.736,97.1-73.3,110.3-78.472c6.392.952,11.832,2.176,16.728,3.264,5.848,1.36,13.872,3.808,19.584,3.808C149.328-71.4,151.5-72.9,151.5-75.072Zm-1.5-.136c0,1.36-1.36,2.312-3.672,2.312-5.44,0-13.056-2.312-18.768-3.808-3.808-1.088-8.024-2.312-12.512-3.4a57.7,57.7,0,0,1,18.632-3.4C142.528-83.5,150.008-80.648,150.008-75.208Zm-46.784-4.216A147.807,147.807,0,0,0,59.568-53.448C45.016-41.072,29.1-20.944,30.192-4.624a19.217,19.217,0,0,1-3.4.544c-12.92,0-20.808-8.3-20.672-23.256.136-15.232,10.608-30.872,26.248-40.8,15.1-9.52,30.328-12.512,48.28-12.512A189.941,189.941,0,0,1,103.224-79.424Zm43.792,39.712a19.049,19.049,0,0,0-7.344,1.36C134.232-35.088,124.44-25.976,119-20.4c-2.176,2.312-9.52,9.384-12.92,12.24C102.136-5.168,95.2-.408,93.024-1.36c-2.04-.952.952-4.9,5.168-10.064,4.76-5.848,16.728-17.544,28.832-27.472-1.9-.136-6.392.408-8.432,1.632-5.576,3.128-15.5,11.288-20.808,16.864-4.9,5.168-8.432,10.336-9.52,14.28C86.9-1.9,87.856.952,92.344.952c4.08,0,10.336-4.624,14.688-7.888,1.088-.952,2.992-2.312,4.76-4.08C107.984-4.488,108.12.68,114.1.952c3.536.136,9.928-4.624,14.144-7.888,2.856-2.312,8.976-7.208,13.056-11.152.408-.272.816-1.088.408-1.5-.68-.68-1.36,0-1.768.272-3.808,3.264-8.84,7.888-13.192,11.288C123.488-5.44,116.28-.408,114.24-1.36s1.088-4.9,5.3-10.064C124.3-17.272,135.32-28.968,147.016-39.712Zm32.232-11.016a3.892,3.892,0,0,0-3.808-3.808,3.892,3.892,0,0,0-3.808,3.808,3.892,3.892,0,0,0,3.808,3.808A3.892,3.892,0,0,0,179.248-50.728ZM168.776-39.44a16.852,16.852,0,0,0-7.48,1.36c-5.44,2.992-15.64,12.512-20.944,17.952-10.2,10.744-14.008,21.216-4.9,21.216,3.944,0,10.064-3.672,14.552-6.936,2.856-2.176,10.88-8.568,14.416-12.1.544-.408,1.088-.952.544-1.5-.68-.68-1.36,0-1.9.408-2.856,2.584-9.656,8.3-14.28,11.7-3.808,2.856-10.88,7.208-13.056,6.256-2.04-.952.544-5.032,4.76-10.2A364.314,364.314,0,0,1,168.776-39.44Zm31.96-10.744c-1.632-1.36-4.624.408-9.384,4.76a78.191,78.191,0,0,0-8.976,9.656c-3.4,3.944-10.744,10.336-16.184,14.96-1.768,0-3.944,1.768-6.392,3.944-1.632,1.36-4.624,3.944-5.848,4.9-2.992,2.72-4.9,5.712-4.9,7.888-.136,3.672,2.856,5.032,6.392,5.168,2.72.272,9.52-.68,14.144-2.856,5.848-2.584,15.912-8.84,23.8-16.048.408-.272.952-1.224.408-1.632a.824.824,0,0,0-1.36,0c-6.256,5.576-14.96,12.24-23.8,16.32,12.1-8.024,12.376-18.768,13.6-25.024.408-2.176,1.088-5.168,2.584-6.936,1.9-2.04,5.984-4.352,9.248-6.664C200.056-45.968,201.824-49.232,200.736-50.184ZM181.56-32.776c-1.632,6.256-7.344,17-12.1,22.168-5.3,5.984-11.152,8.84-15.232,8.84-1.632,0-3.536-.816-3.4-2.72.136-1.5,1.088-3.128,3.264-4.76,1.9-1.36,5.168-3.4,6.8-4.624,3.4-2.176,5.712-4.352,6.12-5.576A144.954,144.954,0,0,0,181.56-32.776Zm49.912-17.952a3.892,3.892,0,0,0-3.808-3.808,3.892,3.892,0,0,0-3.808,3.808,3.892,3.892,0,0,0,3.808,3.808A3.892,3.892,0,0,0,231.472-50.728ZM221-39.44a16.852,16.852,0,0,0-7.48,1.36c-5.44,2.992-15.64,12.512-20.944,17.952-10.2,10.744-14.008,21.216-4.9,21.216,3.944,0,10.064-3.672,14.552-6.936,2.856-2.176,10.88-8.568,14.416-12.1.544-.408,1.088-.952.544-1.5-.68-.68-1.36,0-1.9.408-2.856,2.584-9.656,8.3-14.28,11.7-3.808,2.856-10.88,7.208-13.056,6.256-2.04-.952.544-5.032,4.76-10.2A364.314,364.314,0,0,1,221-39.44Zm40.528,20.672c-.544-.68-1.088-.136-1.632.272-3.808,3.128-10.064,8.7-14.824,12.1-5.3,3.808-10.88,6.256-12.24,5.3-1.36-1.088-.544-3.128,4.352-8.16,2.856-2.992,6.528-6.664,10.88-10.608,6.528-5.848,18.224-17.272,9.52-19.992-5.576-1.9-25.024,11.7-32.912,18.088,6.256-7.072,14.008-14.28,18.9-17.68-3.4,0-7.072.68-9.384,2.176A82.05,82.05,0,0,0,221.68-26.248c-7.208,7.48-13.872,15.776-17.544,22.712-.68,1.36-.408,5.3,1.224,5.3,7.208-9.112,8.568-11.016,17.272-19.312,9.248-8.7,29.92-21.624,33.048-20.264,2.72,1.088-8.84,10.064-13.464,14.28-5.576,5.168-8.3,7.616-11.7,12.376-4.488,6.392-2.856,11.424.544,12.24,3.128.68,8.976-1.632,14.416-5.576a176.081,176.081,0,0,0,15.232-12.24C261.392-17.272,262.208-18.088,261.528-18.768Zm31.824-20.944c-4.76-2.72-20.808,5.984-31.144,15.776C253.5-15.5,251.736-8.84,251.6-6.256c-.544,4.9,2.584,6.936,6.12,7.344,5.3.408,11.832-2.856,16.592-6.256a140.339,140.339,0,0,0,15.64-12.648c.544-.544,1.224-1.224.68-1.9-.408-.544-1.36,0-1.9.544A127.44,127.44,0,0,1,271.456-5.44C265.88-1.9,260.44-.136,257.992-1.088c-5.032-2.176,4.488-14.008,12.92-21.9,2.72,1.632,12.784-1.768,17.136-4.76C293.216-31.416,297.84-37.128,293.352-39.712Zm-.816,1.224c1.36,1.088-1.5,4.9-5.984,8.432-5.984,4.76-12.784,7.072-14.824,6.256C278.392-30.328,290.9-39.848,292.536-38.488Z" transform="translate(1240 1865)" fill="#c3a873"/>
                    </g>
                  </svg>
                </Box>
                <Text mt={{lg: '10px'}} ml={{lg: '40px'}} {...texts.extra}>AT SEA <sup style={{left:'-10px'}}>®</sup></Text>
              </Box>
            </Mover>

            <Text mr={{ wide: '-140px'}} ml={{hd: '30px'}} maxW={{lg:"445px", hd: '490px'}} mt="52px" mb="69px" px={{base:"18px", lg: "0"}} pr={{lg:"35px", d:0}} {...texts.content}>
              “Rivalling the world’s best shore-side restaurants is no small feat and has been Oceania Cruises’ distinguishing achievement through our unwavering commitment to the finest quality produce and perfectly crafted recipes,” says Jason Worth, Vice President Sales and General Manager Asia Pacific.
              Oceania Cruises is committed to discovering and sourcing the best possible ingredients from around the world. “Our premium French Planchot flour is custom milled to exact specifications, our prized Castilla-La Mancha saffron is cultivated in Spain’s heartland, and our superb lobster has been supplied by the same father-son team from southern Nova Scotia since Oceania Cruises’ inception 20 years ago,” Worth explains.
            </Text>
          </GridItem>
        </Grid>

        <Grid templateColumns={{lg: '6fr 6fr', wide: '8fr 4fr'}} gap={{lg: '35px'}}>
          <Figure pl={{hd: '30px'}} order={{lg:1}} position="relative" mt={{wide: '-80px'}} mr={{wide: '-150px', hd: '-300px'}}>
            <Box
              sx={{
                svg: {
                  position: 'absolute',
                  top: '-50px',
                  right: '0px',
                  opacity: '0.2',
                }
              }}
            >
              <Mover x={[10, 0]}>
                <svg width="186.556" height="72.009" viewBox="0 0 186.556 72.009">
                  <path id="Path_2300" data-name="Path 2300" d="M61.766,14.251a16.549,16.549,0,0,0-7.029,7.26c14.97,3.553,28.018,11.431,36.835,16.674L93.438,39.3c1.288.768,2.814,1.617,4.427,2.527a53.572,53.572,0,0,0,5.565-3.226c2.34-1.56,5.3-3.623,8.721-6.013q.935-.649,1.894-1.321c-25.1-17.959-38.568-24.76-52.278-17.02M53.409,29.387c.693,6.956,6.063,13.626,13.061,16.226,8.235,3.057,17.608,1.716,25.688-1.3-.734-.457-1.451-.9-2.132-1.3l-.614-.364c-8.906-5.3-21.375-13-36-16.327a15.868,15.868,0,0,0,0,3.062m94.651-1.746c4.977.585,8.809-.351,11.084-2.71a8.013,8.013,0,0,0,2.181-6.413,7.156,7.156,0,0,0-4.031-4.968c-2.195-1.136-6.957-2.5-14.183,1.112-2.78,1.389-6,3.278-9.421,5.425a22.159,22.159,0,0,0,14.37,7.553m-19.981-15.08c1.434,2.282,3.032,4.193,4.547,6.208,3.529-2.217,6.863-4.174,9.732-5.611,7.893-3.945,13.232-2.383,15.709-1.1a8.822,8.822,0,0,1,4.917,6.208,9.756,9.756,0,0,1-2.631,7.833c-1.85,1.916-5.519,4.032-12.488,3.211-5.686-.669-11.26-3.842-15.663-8.283-3.765,2.4-7.722,5.072-11.568,7.722.394.284.784.558,1.186.847,27.856,19.994,49.388,18.284,58.337,6.584a21.061,21.061,0,0,0,2.927-21.77c-2.833-6.67-8.822-12.143-13.932-12.736a.84.84,0,1,1,.192-1.668c5.663.652,12.235,6.564,15.285,13.749A22.68,22.68,0,0,1,181.491,37.2c-9.426,12.329-34.375,18.058-63.032-2.751-1.006-.729-1.991-1.439-2.963-2.14-.807.561-1.606,1.117-2.382,1.661-3.433,2.4-6.4,4.465-8.753,6.032a53.654,53.654,0,0,1-4.768,2.819c1.562.9,3.163,1.846,4.675,2.833,13.523,8.8,30.622,19.42,45.56,21.659,10.909,1.637,18.667-1.548,22.781-4.855,4.785-3.851,7.567-8.495,8.126-13.9a.841.841,0,0,1,1.673.173c-.6,5.844-4.027,11.8-9.157,15.92a34.32,34.32,0,0,1-24.916,7.146c-15.781-1.786-34.587-13.5-48.245-22.393-2.149-1.4-4.212-2.734-6.152-3.967-8.667,3.447-19,5.117-28.054,1.753-7.575-2.811-13.39-10.064-14.148-17.632a20.445,20.445,0,0,1-.038-3.6,59.36,59.36,0,0,0-21.746-.47C4.574,29.791,1.762,42.934,2.04,51.228c.185,5.614,3.945,11.448,9.356,14.525,6.347,3.608,14.12,3.24,21.888-1.043a.84.84,0,0,1,.811,1.471c-8.3,4.573-16.657,4.939-23.529,1.032C4.574,63.808.5,57.889.08,51.628c-1.122-16.431,9.707-27.26,29.128-31a59.525,59.525,0,0,1,23.534.438,17.588,17.588,0,0,1,7.46-9.027C75.937,2.3,89.307,6.561,119.177,27.711c3.926-2.71,7.982-5.452,11.85-7.929a62.874,62.874,0,0,1-5.336-7.645c-.673-1.086-.372-4.143,2.389.423" transform="translate(-0.001 0)" fill="#c3a873"/>
                </svg>
              </Mover>
            </Box>

            <Mover y={[10,0]}>
              <Img dimension="835x840" mock="finest-2" src='./images/finest-2.jpg'  w='full' h={{hd: '840px'}} />
            </Mover>
          </Figure>

          <PreLine {...texts.content} mt={{base: "59px", wide: '80px'}} maxW={{lg:'445px'}} ml={{lg:'40px', wide: '100px'}} px={{base: '18px', lg: 0}}>
            {`Oceania Cruises’ chefs hail from more than 40 countries, guided by Executive Culinary Director Jacques Pépin, the French-American celebrity TV chef and cookbook author, and formerly a personal chef to three French presidents.

            Guests have a raft of diverse speciality dining venues to choose from, such as classic American steakhouse Polo Grill, authentic Italian fare at Toscana, and Red Ginger for bold pan-Asian cuisine, including two of the most popular dishes on board, the duck and watermelon salad, and lobster pad thai. “Our take on the classic pad thai is light, fragrant and not too spicy – although you can add an extra kick if your palate prefers,” says Worth.`}
          </PreLine>
        </Grid>

        <Grid templateColumns={{lg: '6fr 7fr', d: '5fr 7fr'}} mt={{hd: '-250px'}}>
          <Mover x={[0,10]}>
            <Figure mt={{base: '67px'}} ml={{wide: '-150px', hd: '-300px'}}>
                <Img dimension="856x482" mock="finest-3" src='./images/finest-3.jpg' w='full' />
            </Figure>
          </Mover>

          <Mover x={[10,0]}>

            <Box
              position="relative"
              bg="primary"
              mt={{md: '-100px', lg: '-20px'}}
              maxW={{base: '395px', lg:'643px'}}
              mx={{base: 'auto'}}
              p={{base:"20px 8px 36px 30px", sm:"20px 8px 60px 30px", lg: '62px 46px 86px 60px'}}
              left={{hd: '-150px'}}
              top={{ hd: '170px'}}
              maxH={{wide: '500px'}}
            >
              <Box pos='relative' left={{hd: '-75px'}} as='svg' width="56.482" height="32.454" viewBox="0 0 56.482 32.454">
                <path id="Path_2305" data-name="Path 2305" d="M89.08-118.686c-.524-1.31-1.31-.786-2.358-.524a64.165,64.165,0,0,0-17.816,9.956c-2.882,2.358-8.384,7.336-10.48,12.314-1.572,4.454.262,8.646,3.93,9.694,3.93.786,7.6-1.31,9.17-5.5,1.048-2.882,0-7.336-2.882-8.384,2.358-6.288,12.576-13.1,19.126-15.72A1.745,1.745,0,0,0,89.08-118.686Zm-25.414,0c-.262-1.31-1.31-.786-2.358-.524a68.312,68.312,0,0,0-17.816,9.956c-2.882,2.358-8.384,7.336-10.218,12.314-1.834,4.454.262,8.646,3.93,9.694,3.93.786,7.336-1.31,8.908-5.5,1.048-2.882,0-7.336-2.882-8.384,2.358-6.288,12.576-13.1,19.126-15.72A1.745,1.745,0,0,0,63.666-118.686Z" transform="translate(-32.598 119.538)" fill="#fff"/>
              </Box>


              <Box pos='relative'>
                <Text {...texts.quote} mt="20px" display={{base: 'block', d: 'none'}} >
                  Rivalling the world’s best shore-side restaurants is no small feat and has been Oceania Cruises’ distinguishing Achievement.
                </Text>

                <PreLine pos='relative' {...texts.quote} mt="23px" display={{base: 'none', d: 'block'}}>
                  {`Rivalling the world’s best
                  shoreside restaurants is no
                  small feat and has been Oceania
                  Cruises’ distinguishing
                  Achievement.`}
                </PreLine>

                <Box
                  as='svg'
                  pos='absolute'
                  bottom={{base: '0', sm: '-15px', lg: '-40px', d:'-10px' }}
                  right={{base: '0', sm: '40px', lg: 0, d:'230px' }}
                  width="56.482" height="32.375" viewBox="0 0 56.482 32.375"
                >
                  <path id="Path_2304" data-name="Path 2304" d="M85.15-108.73c1.834-4.454-.262-8.646-3.93-9.694-3.93-.786-7.336,1.048-8.908,5.5-1.048,2.882,0,7.336,2.882,8.384-2.358,6.288-12.838,13.1-19.388,15.72a2.063,2.063,0,0,0-1.31,1.834c.524,1.048,1.31.786,2.62.524a68.311,68.311,0,0,0,17.816-9.956C77.814-99.036,83.316-103.752,85.15-108.73Zm-25.414,0c1.834-4.454,0-8.646-3.93-9.694-3.93-.786-7.336,1.048-8.908,5.5-1.048,2.882,0,7.336,2.882,8.384-2.358,6.288-12.576,13.1-19.126,15.72a1.745,1.745,0,0,0-1.31,1.834c.262,1.048,1.31.786,2.358.524a68.311,68.311,0,0,0,17.816-9.956C52.4-99.036,57.9-103.752,59.736-108.73Z" transform="translate(-29.344 118.601)" fill="#fff"/>
                </Box>
              </Box>

              <Box mt={{base: '20px', d:'25px'}}>
                <Text mb="0!important" {...texts.author}>
                  JASON WORTH
                </Text>

                <PreLine mt="7px"  {...texts.authorSubtitle}>
                  {`Vice President Sales and General Manager
                  Asia Pacific.`}
                </PreLine>
              </Box>

              <Box as='svg' pos='absolute' right='-10' width="320.131" height="123.567" viewBox="0 0 320.131 123.567" opacity='.2'>
                <defs>
                  <clipPath id="clip-pathasdd" >
                    <rect id="Rectangle_1614" data-name="Rectangle 1614" width="320.131" height="123.567" fill="#fff"/>
                  </clipPath>
                </defs>
                <g id="Group_6015" data-name="Group 6015" clip-path="url(#clip-pathasdd)">
                  <path id="Path_2300" data-name="Path 2300" d="M105.99,24.455A28.4,28.4,0,0,0,93.929,36.913c25.688,6.1,48.079,19.616,63.209,28.612l3.2,1.921c2.21,1.317,4.828,2.776,7.6,4.337a91.93,91.93,0,0,0,9.55-5.535c4.015-2.676,9.1-6.216,14.965-10.318q1.605-1.114,3.25-2.267c-43.076-30.818-66.182-42.487-89.709-29.207M91.649,50.428c1.189,11.936,10.4,23.382,22.412,27.843,14.131,5.246,30.215,2.945,44.08-2.226-1.259-.784-2.49-1.536-3.659-2.23l-1.053-.624c-15.283-9.1-36.68-22.313-61.78-28.018a27.228,27.228,0,0,0,0,5.255m162.42-3c8.541,1,15.117-.6,19.02-4.651a13.751,13.751,0,0,0,3.742-11c-.519-3.37-3.106-6.554-6.918-8.525-3.766-1.95-11.937-4.292-24.337,1.908-4.77,2.383-10.3,5.626-16.166,9.31a38.025,38.025,0,0,0,24.659,12.961M219.782,21.555c2.46,3.916,5.2,7.2,7.8,10.653,6.055-3.8,11.776-7.163,16.7-9.628,13.545-6.77,22.706-4.089,26.956-1.888,4.625,2.392,7.782,6.374,8.438,10.653a16.741,16.741,0,0,1-4.515,13.441c-3.175,3.288-9.47,6.919-21.429,5.51-9.756-1.148-19.322-6.592-26.877-14.213-6.46,4.122-13.251,8.7-19.851,13.251.677.487,1.345.958,2.036,1.453,47.8,34.309,84.75,31.376,100.107,11.3,11.686-15.279,8.163-29.963,5.024-37.357-4.861-11.446-15.139-20.838-23.907-21.854A1.441,1.441,0,1,1,290.6.01C300.313,1.13,311.59,11.274,316.824,23.6c3.386,7.968,7.188,23.8-5.386,40.232-16.176,21.156-58.988,30.987-108.162-4.722-1.726-1.251-3.416-2.47-5.085-3.672-1.384.963-2.756,1.917-4.088,2.85-5.892,4.114-10.975,7.662-15.02,10.351A92.072,92.072,0,0,1,170.9,73.48c2.68,1.541,5.427,3.168,8.022,4.862,23.2,15.1,52.548,33.325,78.182,37.167,18.72,2.809,32.033-2.657,39.093-8.331,8.211-6.609,12.985-14.577,13.945-23.858a1.443,1.443,0,0,1,2.871.3c-1.037,10.028-6.911,20.243-15.713,27.319A58.893,58.893,0,0,1,254.544,123.2c-27.08-3.064-59.352-23.168-82.789-38.426-3.688-2.4-7.227-4.692-10.557-6.807-14.873,5.915-32.6,8.782-48.141,3.008-13-4.824-22.977-17.27-24.279-30.256a35.084,35.084,0,0,1-.066-6.175A101.861,101.861,0,0,0,51.4,43.736C7.848,51.122,3.024,73.674,3.5,87.908c.317,9.633,6.769,19.645,16.055,24.924,10.892,6.191,24.23,5.56,37.559-1.789a1.441,1.441,0,0,1,1.392,2.525c-14.242,7.847-28.584,8.476-40.376,1.771C7.848,109.494.864,99.337.137,88.594-1.788,60.4,16.795,41.815,50.12,35.4a102.144,102.144,0,0,1,40.384.752,30.18,30.18,0,0,1,12.8-15.49c27-16.717,49.945-9.409,101.2,26.885,6.736-4.651,13.7-9.355,20.334-13.606a107.888,107.888,0,0,1-9.157-13.118c-1.155-1.863-.639-7.109,4.1.727" transform="translate(0 0)" fill="#fff"/>
                </g>
              </Box>
            </Box>
          </Mover>

        </Grid>
      </Container>
    </Box>
  )
}

// font styles
const texts = {
  extra: {
    color: '#071A2E',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base: '26px', d: '36px'},
    lineHeight: {base: '32px', d:'44px'},
  },
  content: {
    color: 'black',
    fontFamily: 'body',
    fontWeight: 'normal',
    fontSize: {base: '17px'},
    lineHeight: {base: '30px', d:'32px'},
  },
  quote: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base:'21px', sm: '26px', d:'27px'},
    letterSpacing: {base: '1.1px'},
    lineHeight: {base:'27px', sm: '32px', d:'40px'},
    textTransform: 'uppercase',
  },
  author: {
    color: 'black',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base:'16px', sm: '20px', d: '21px' },
    lineHeight: {base:'15px', sm: '18px'},
    letterSpacing: {base: '1px'},
    textTransform: 'uppercase',
  },
  authorSubtitle: {
    color: 'black',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base:'10px', sm: '11px', d:'13px'},
    lineHeight: {base:'16px', sm: '18px'},
    textTransform: 'uppercase',
  }
}

