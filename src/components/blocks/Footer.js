import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex, Center } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'


export default function Footer() {

  return (
    <Container pt={{base: '166px', lg: '300px'}} pb={{base: '150px', lg: '200px'}}>
      <Center>
        <Box textAlign='center' color='white'>
          <Box pos='relative' left={{lg: '-40px'}}>
            <Text ml={{base: '60px', sm: '60px', md: '180px'}} {...texts.heading}>Luxurious</Text>
            <Box display={{base: 'block', md: 'none'}} mt={{base: '-45px', sm: '-40px'}} mb={{base: '-40px', sm: '-30px'}} maxW={{base: '95%', sm: 'none'}} maxH={{base: '100px'}} as="svg" width="566.351" height="189.003" viewBox="0 0 566.351 189.003">
              <path id="Path_2721" data-name="Path 2721" d="M180.892-90.692c1.8-5.576-3.28-11.316-14.924-12.3-13.284-1.312-27.224,1.148-36.408,3.936a154.717,154.717,0,0,0-32.8-3.936c-25.42,0-49.528,7.708-67.24,23.288C14.432-66.42,5.412-49.528,5.576-33.456,5.9-19.68,12.792-8.692,27.88-7.544c-.82,12.3,9.84,18.86,22.632,18.7,15.744,0,37.884-10.66,53.464-22.8,3.936-2.952,8.036-6.724,10.824-9.184,3.772-3.444,5.084-4.428,4.1-5.412-.82-.82-2.3,1.148-5.9,4.1-2.952,2.624-6.888,5.9-11.316,9.184C86.1-1.312,65.272,8.692,50.676,8.2,39.852,7.872,33.62,1.148,37.72-11.152,41.984-23.944,55.268-38.376,73.472-47.4c6.068-3.28,15.088-7.052,21.156-6.888,2.624,2.3,6.888,3.772,9.02,4.428,2.3.492,4.92.492,5.576-.82.328-1.148-2.132-2.624-4.592-3.608-1.64-.492-7.216-1.8-9.02-1.64-1.476-3.28.984-9.84,5.576-15.58,5.084-6.56,16.564-17.876,31.652-23.452,7.38,1.148,14.1,2.624,20.5,3.772,7.38,1.476,14.924,3.28,21.156,3.28C177.612-87.9,180.236-89.052,180.892-90.692Zm-1.64-.82c-.82,1.64-2.624,1.968-4.92,1.968-4.264,0-13.612-1.968-20.336-3.772-4.592-1.148-9.676-2.46-14.924-3.772,7.38-2.3,17.22-4.756,27.388-3.936C176.464-100.2,180.728-95.284,179.252-91.512Zm-56.908-4.92C108.568-90.2,98.892-79.212,95.12-72.652c-3.608,6.888-3.608,13.94-1.64,16.728a78.92,78.92,0,0,0-34.6,9.512C46.576-39.36,30.012-24.6,28.208-9.676,15.252-10.5,8.528-20.336,8.364-33.292c-.328-14.6,8.692-31.98,23.452-43.952,18.7-15.088,43.952-20.664,65.436-20.664A229.842,229.842,0,0,1,122.344-96.432ZM176.3-44.772a3.848,3.848,0,0,0-3.936-3.772c-5.9-.328-16.4,10.5-19.844,13.448-3.936,3.28-6.724,6.232-8.692,7.872l-.492-.328c12.956-13.612,11.808-20.336,4.756-20.828-3.116-.328-8.692,1.8-17.22,9.84-5.412,5.248-13.284,12.3-19.844,18.368-.328.328-.82,1.148-.328,1.64.328.656,1.312.328,1.8,0,7.052-6.56,14.76-13.612,20.828-19.188,5.412-5.084,11.152-9.348,13.612-7.052,1.476,1.64-1.64,8.036-6.56,13.12-6.4,7.216-14.924,15.416-17.548,17.712C115.784-7.872,109.06-3.608,105.124-3.608a7.837,7.837,0,0,1-4.1-.984c-.328-.328-.984-.984-1.476-.82-.82.656-1.148,2.46-.82,3.772.492,1.312,1.64,2.952,4.92,2.952,5.9,0,12.956-6.068,20.5-13.284,2.132-1.968,4.756-4.592,6.4-6.232l.656.492c-6.232,7.872-10.332,17.22-2.788,19.024,4.592.984,11.316-2.3,19.844-8.528,3.116-2.3,11.808-9.676,17.22-14.6.656-.492,1.476-1.148.82-2.3-.492-.82-1.476,0-2.132.656C159.9-19.68,151.7-12.792,145.632-8.036c-5.248,4.1-10.168,6.4-12.628,5.74-2.46-.82-1.64-4.756,2.46-11.152,2.46-4.264,8.036-10.824,13.448-15.58,7.708-6.724,16.072-14.6,21.484-14.6a9.8,9.8,0,0,1,3.772.492c.656.164.984.656,1.476.328A1.7,1.7,0,0,0,176.3-44.772Zm40.672-15.416c.164-.984-1.8-1.312-2.788-1.312-2.3,0-6.724.984-12.136,4.428-8.2,5.084-16.564,11.644-28.044,23.944-27.552,30.012-50.512,55.1-69.7,71.176C67.568,68.716,32.8,83.968-3.608,82.984-36.08,82.164-52.644,58.384-41,34.44c.656-1.312,1.8-3.936,1.64-4.264-1.312-1.148-4.1,3.116-5.248,5.412-10.988,24.6,6.068,49.2,41.82,50.02,35.1.82,72.488-10.824,113.16-44.608C128.9,25.584,154.16-1.312,166.624-14.76c13.12-14.1,39.2-33.292,43.46-30.176,2.624,1.8-8.364,13.284-15.088,20.008C175.972-5.412,169.9-.656,163.836-1.312A3.383,3.383,0,0,1,160.72-3.28c-.164-.656-.492-1.476-1.312-1.312-1.148.164-.984,2.788.656,4.1a7.11,7.11,0,0,0,4.592,1.64c10.168.164,23.288-7.052,37.72-21.648,9.512-9.676,15.908-24.6,10-27.552-6.068-2.788-28.372,13.94-35.26,20.664,7.38-8.856,18.532-20.336,26.732-27.06,3.772-2.952,7.38-4.756,10.66-5.084C215.332-59.7,216.972-59.7,216.972-60.188Zm37.556,12.3c-5.74-3.28-25.092,7.216-37.556,19.024-10.5,10.168-12.628,18.2-12.792,21.32-.656,5.9,3.116,8.364,7.38,8.856,6.4.492,14.268-3.444,20.008-7.544a169.235,169.235,0,0,0,18.86-15.252c.656-.656,1.476-1.476.82-2.3-.492-.656-1.64,0-2.3.656C244.36-18.86,236-11.48,228.124-6.56,221.4-2.3,214.84-.164,211.888-1.312c-6.068-2.624,5.412-16.892,15.58-26.4,3.28,1.968,15.416-2.132,20.664-5.74C254.364-37.884,259.94-44.772,254.528-47.888Zm-.984,1.476c1.64,1.312-1.8,5.9-7.216,10.168-7.216,5.74-15.416,8.528-17.876,7.544C236.488-36.572,251.576-48.052,253.544-46.412Zm45.1,3.936a4.281,4.281,0,0,0-3.772-4.92c-8.036-1.476-25.092,13.448-34.112,21.32l-.492-.656A124.91,124.91,0,0,1,283.392-47.56c-4.1,0-8.856.984-11.48,2.788-3.936,2.46-9.676,7.544-14.924,13.12-8.692,9.02-16.728,19.024-21.156,27.388-.82,1.64-.492,6.4,1.476,6.4C246-8.856,247.64-11.152,258.136-21.156c11.152-10.5,25.092-21.156,31.816-20.828a8.2,8.2,0,0,1,4.264,1.312,20.09,20.09,0,0,0,1.968,1.312C296.84-39.2,298.48-40.344,298.644-42.476Zm33.784-18.7a4.693,4.693,0,0,0-4.592-4.592,4.693,4.693,0,0,0-4.592,4.592,4.693,4.693,0,0,0,4.592,4.592A4.693,4.693,0,0,0,332.428-61.172ZM319.8-47.56a20.321,20.321,0,0,0-9.02,1.64c-6.56,3.608-18.86,15.088-25.256,21.648-12.3,12.956-16.892,25.584-5.9,25.584,4.756,0,12.136-4.428,17.548-8.364,3.444-2.624,13.12-10.332,17.384-14.6.656-.492,1.312-1.148.656-1.8-.82-.82-1.64,0-2.3.492-3.444,3.116-11.644,10-17.22,14.1-4.592,3.444-13.12,8.692-15.744,7.544-2.46-1.148.656-6.068,5.74-12.3C291.428-20.336,305.7-34.932,319.8-47.56Zm32.472-.328c-5.74-3.28-25.092,7.216-37.556,19.024-10.5,10.168-12.628,18.2-12.792,21.32-.656,5.9,3.116,8.364,7.38,8.856,6.4.492,14.268-3.444,20.008-7.544a169.236,169.236,0,0,0,18.86-15.252c.656-.656,1.476-1.476.82-2.3-.492-.656-1.64,0-2.3.656C342.1-18.86,333.74-11.48,325.868-6.56c-6.724,4.264-13.284,6.4-16.236,5.248-6.068-2.624,5.412-16.892,15.58-26.4,3.28,1.968,15.416-2.132,20.664-5.74C352.108-37.884,357.684-44.772,352.272-47.888Zm-.984,1.476c1.64,1.312-1.8,5.9-7.216,10.168-7.216,5.74-15.416,8.528-17.876,7.544C334.232-36.572,349.32-48.052,351.288-46.412Zm51.5,23.78c-.656-.82-1.312-.164-1.968.328-4.592,3.772-12.136,10.5-17.876,14.6-6.4,4.592-13.12,7.544-14.76,6.4-1.64-1.312-.656-3.772,5.248-9.84,3.444-3.608,7.872-8.036,13.12-12.792,7.872-7.052,21.976-20.828,11.48-24.108-6.724-2.3-30.176,14.1-39.688,21.812,7.544-8.528,16.892-17.22,22.8-21.32-4.1,0-8.528.82-11.316,2.624a98.943,98.943,0,0,0-15.088,13.284C346.04-22.632,338-12.628,333.576-4.264c-.82,1.64-.492,6.4,1.476,6.4,8.692-10.988,10.332-13.284,20.828-23.288,11.152-10.5,36.08-26.076,39.852-24.436,3.28,1.312-10.66,12.136-16.236,17.22-6.724,6.232-10,9.184-14.1,14.924-5.412,7.708-3.444,13.776.656,14.76,3.772.82,10.824-1.968,17.384-6.724,6.068-4.1,13.284-10.332,18.368-14.76C402.62-20.828,403.6-21.812,402.784-22.632ZM441.16-38.376c.984-2.132,3.116-7.216-.328-9.184-5.576-3.28-23.288,5.74-36.08,17.548-8.2,7.544-13.94,16.072-13.94,23.452-.164,5.084,3.608,8.528,10,7.872,7.216-.82,13.94-4.92,19.68-9.02a173.781,173.781,0,0,0,17.22-14.432c.656-.492.82-1.312.328-1.64-.492-.492-1.312-.164-1.968.328A229.53,229.53,0,0,1,416.4-7.708c-4.1,2.788-14.268,8.364-18.2,6.232-3.608-2.132,0-11.152,14.268-24.764,8.528-8.2,23.944-21.812,27.06-19.68,2.3,1.476.656,6.068-6.232,10.332-2.624,1.64-6.888,4.756-5.084,7.052,1.64,1.968,4.92-.164,6.4-1.476A22.892,22.892,0,0,0,441.16-38.376ZM477.9-47.888c-5.74-3.28-25.092,7.216-37.556,19.024-10.5,10.168-12.628,18.2-12.792,21.32-.656,5.9,3.116,8.364,7.38,8.856,6.4.492,14.268-3.444,20.008-7.544A169.236,169.236,0,0,0,473.8-21.484c.656-.656,1.476-1.476.82-2.3-.492-.656-1.64,0-2.3.656C467.728-18.86,459.364-11.48,451.492-6.56c-6.724,4.264-13.284,6.4-16.236,5.248-6.068-2.624,5.412-16.892,15.58-26.4,3.28,1.968,15.416-2.132,20.664-5.74C477.732-37.884,483.308-44.772,477.9-47.888Zm-.984,1.476c1.64,1.312-1.8,5.9-7.216,10.168C462.48-30.5,454.28-27.716,451.82-28.7,459.856-36.572,474.944-48.052,476.912-46.412Zm41.164-14.1c-1.968-1.64-5.576.492-11.316,5.74a94.287,94.287,0,0,0-10.824,11.644c-4.1,4.756-12.956,12.464-19.516,18.04-2.132,0-4.756,2.132-7.708,4.756-1.968,1.64-5.576,4.756-7.052,5.9-3.608,3.28-5.9,6.888-5.9,9.512-.164,4.428,3.444,6.068,7.708,6.232,3.28.328,11.48-.82,17.056-3.444,7.052-3.116,19.188-10.66,28.7-19.352.492-.328,1.148-1.476.492-1.968a.994.994,0,0,0-1.64,0c-7.544,6.724-18.04,14.76-28.7,19.68,14.6-9.676,14.924-22.632,16.4-30.176.492-2.624,1.312-6.232,3.116-8.364,2.3-2.46,7.216-5.248,11.152-8.036C517.256-55.432,519.388-59.368,518.076-60.516ZM494.952-39.524c-1.968,7.544-8.856,20.5-14.6,26.732-6.4,7.216-13.448,10.66-18.368,10.66-1.968,0-4.264-.984-4.1-3.28.164-1.8,1.312-3.772,3.936-5.74,2.3-1.64,6.232-4.1,8.2-5.576,4.1-2.624,6.888-5.248,7.38-6.724C483.964-28.864,490.524-34.6,494.952-39.524Z" transform="translate(47.911 103.354)" fill="#c3a873"/>
            </Box>
            <Box as='svg' display={{base: 'none', md: 'block'}} mt={{base: '-60px'}} mb={{base: '-70px'}} width="566.351" height="189.003" viewBox="0 0 566.351 189.003">
              <path id="Path_2721" data-name="Path 2721" d="M180.892-90.692c1.8-5.576-3.28-11.316-14.924-12.3-13.284-1.312-27.224,1.148-36.408,3.936a154.717,154.717,0,0,0-32.8-3.936c-25.42,0-49.528,7.708-67.24,23.288C14.432-66.42,5.412-49.528,5.576-33.456,5.9-19.68,12.792-8.692,27.88-7.544c-.82,12.3,9.84,18.86,22.632,18.7,15.744,0,37.884-10.66,53.464-22.8,3.936-2.952,8.036-6.724,10.824-9.184,3.772-3.444,5.084-4.428,4.1-5.412-.82-.82-2.3,1.148-5.9,4.1-2.952,2.624-6.888,5.9-11.316,9.184C86.1-1.312,65.272,8.692,50.676,8.2,39.852,7.872,33.62,1.148,37.72-11.152,41.984-23.944,55.268-38.376,73.472-47.4c6.068-3.28,15.088-7.052,21.156-6.888,2.624,2.3,6.888,3.772,9.02,4.428,2.3.492,4.92.492,5.576-.82.328-1.148-2.132-2.624-4.592-3.608-1.64-.492-7.216-1.8-9.02-1.64-1.476-3.28.984-9.84,5.576-15.58,5.084-6.56,16.564-17.876,31.652-23.452,7.38,1.148,14.1,2.624,20.5,3.772,7.38,1.476,14.924,3.28,21.156,3.28C177.612-87.9,180.236-89.052,180.892-90.692Zm-1.64-.82c-.82,1.64-2.624,1.968-4.92,1.968-4.264,0-13.612-1.968-20.336-3.772-4.592-1.148-9.676-2.46-14.924-3.772,7.38-2.3,17.22-4.756,27.388-3.936C176.464-100.2,180.728-95.284,179.252-91.512Zm-56.908-4.92C108.568-90.2,98.892-79.212,95.12-72.652c-3.608,6.888-3.608,13.94-1.64,16.728a78.92,78.92,0,0,0-34.6,9.512C46.576-39.36,30.012-24.6,28.208-9.676,15.252-10.5,8.528-20.336,8.364-33.292c-.328-14.6,8.692-31.98,23.452-43.952,18.7-15.088,43.952-20.664,65.436-20.664A229.842,229.842,0,0,1,122.344-96.432ZM176.3-44.772a3.848,3.848,0,0,0-3.936-3.772c-5.9-.328-16.4,10.5-19.844,13.448-3.936,3.28-6.724,6.232-8.692,7.872l-.492-.328c12.956-13.612,11.808-20.336,4.756-20.828-3.116-.328-8.692,1.8-17.22,9.84-5.412,5.248-13.284,12.3-19.844,18.368-.328.328-.82,1.148-.328,1.64.328.656,1.312.328,1.8,0,7.052-6.56,14.76-13.612,20.828-19.188,5.412-5.084,11.152-9.348,13.612-7.052,1.476,1.64-1.64,8.036-6.56,13.12-6.4,7.216-14.924,15.416-17.548,17.712C115.784-7.872,109.06-3.608,105.124-3.608a7.837,7.837,0,0,1-4.1-.984c-.328-.328-.984-.984-1.476-.82-.82.656-1.148,2.46-.82,3.772.492,1.312,1.64,2.952,4.92,2.952,5.9,0,12.956-6.068,20.5-13.284,2.132-1.968,4.756-4.592,6.4-6.232l.656.492c-6.232,7.872-10.332,17.22-2.788,19.024,4.592.984,11.316-2.3,19.844-8.528,3.116-2.3,11.808-9.676,17.22-14.6.656-.492,1.476-1.148.82-2.3-.492-.82-1.476,0-2.132.656C159.9-19.68,151.7-12.792,145.632-8.036c-5.248,4.1-10.168,6.4-12.628,5.74-2.46-.82-1.64-4.756,2.46-11.152,2.46-4.264,8.036-10.824,13.448-15.58,7.708-6.724,16.072-14.6,21.484-14.6a9.8,9.8,0,0,1,3.772.492c.656.164.984.656,1.476.328A1.7,1.7,0,0,0,176.3-44.772Zm40.672-15.416c.164-.984-1.8-1.312-2.788-1.312-2.3,0-6.724.984-12.136,4.428-8.2,5.084-16.564,11.644-28.044,23.944-27.552,30.012-50.512,55.1-69.7,71.176C67.568,68.716,32.8,83.968-3.608,82.984-36.08,82.164-52.644,58.384-41,34.44c.656-1.312,1.8-3.936,1.64-4.264-1.312-1.148-4.1,3.116-5.248,5.412-10.988,24.6,6.068,49.2,41.82,50.02,35.1.82,72.488-10.824,113.16-44.608C128.9,25.584,154.16-1.312,166.624-14.76c13.12-14.1,39.2-33.292,43.46-30.176,2.624,1.8-8.364,13.284-15.088,20.008C175.972-5.412,169.9-.656,163.836-1.312A3.383,3.383,0,0,1,160.72-3.28c-.164-.656-.492-1.476-1.312-1.312-1.148.164-.984,2.788.656,4.1a7.11,7.11,0,0,0,4.592,1.64c10.168.164,23.288-7.052,37.72-21.648,9.512-9.676,15.908-24.6,10-27.552-6.068-2.788-28.372,13.94-35.26,20.664,7.38-8.856,18.532-20.336,26.732-27.06,3.772-2.952,7.38-4.756,10.66-5.084C215.332-59.7,216.972-59.7,216.972-60.188Zm37.556,12.3c-5.74-3.28-25.092,7.216-37.556,19.024-10.5,10.168-12.628,18.2-12.792,21.32-.656,5.9,3.116,8.364,7.38,8.856,6.4.492,14.268-3.444,20.008-7.544a169.235,169.235,0,0,0,18.86-15.252c.656-.656,1.476-1.476.82-2.3-.492-.656-1.64,0-2.3.656C244.36-18.86,236-11.48,228.124-6.56,221.4-2.3,214.84-.164,211.888-1.312c-6.068-2.624,5.412-16.892,15.58-26.4,3.28,1.968,15.416-2.132,20.664-5.74C254.364-37.884,259.94-44.772,254.528-47.888Zm-.984,1.476c1.64,1.312-1.8,5.9-7.216,10.168-7.216,5.74-15.416,8.528-17.876,7.544C236.488-36.572,251.576-48.052,253.544-46.412Zm45.1,3.936a4.281,4.281,0,0,0-3.772-4.92c-8.036-1.476-25.092,13.448-34.112,21.32l-.492-.656A124.91,124.91,0,0,1,283.392-47.56c-4.1,0-8.856.984-11.48,2.788-3.936,2.46-9.676,7.544-14.924,13.12-8.692,9.02-16.728,19.024-21.156,27.388-.82,1.64-.492,6.4,1.476,6.4C246-8.856,247.64-11.152,258.136-21.156c11.152-10.5,25.092-21.156,31.816-20.828a8.2,8.2,0,0,1,4.264,1.312,20.09,20.09,0,0,0,1.968,1.312C296.84-39.2,298.48-40.344,298.644-42.476Zm33.784-18.7a4.693,4.693,0,0,0-4.592-4.592,4.693,4.693,0,0,0-4.592,4.592,4.693,4.693,0,0,0,4.592,4.592A4.693,4.693,0,0,0,332.428-61.172ZM319.8-47.56a20.321,20.321,0,0,0-9.02,1.64c-6.56,3.608-18.86,15.088-25.256,21.648-12.3,12.956-16.892,25.584-5.9,25.584,4.756,0,12.136-4.428,17.548-8.364,3.444-2.624,13.12-10.332,17.384-14.6.656-.492,1.312-1.148.656-1.8-.82-.82-1.64,0-2.3.492-3.444,3.116-11.644,10-17.22,14.1-4.592,3.444-13.12,8.692-15.744,7.544-2.46-1.148.656-6.068,5.74-12.3C291.428-20.336,305.7-34.932,319.8-47.56Zm32.472-.328c-5.74-3.28-25.092,7.216-37.556,19.024-10.5,10.168-12.628,18.2-12.792,21.32-.656,5.9,3.116,8.364,7.38,8.856,6.4.492,14.268-3.444,20.008-7.544a169.236,169.236,0,0,0,18.86-15.252c.656-.656,1.476-1.476.82-2.3-.492-.656-1.64,0-2.3.656C342.1-18.86,333.74-11.48,325.868-6.56c-6.724,4.264-13.284,6.4-16.236,5.248-6.068-2.624,5.412-16.892,15.58-26.4,3.28,1.968,15.416-2.132,20.664-5.74C352.108-37.884,357.684-44.772,352.272-47.888Zm-.984,1.476c1.64,1.312-1.8,5.9-7.216,10.168-7.216,5.74-15.416,8.528-17.876,7.544C334.232-36.572,349.32-48.052,351.288-46.412Zm51.5,23.78c-.656-.82-1.312-.164-1.968.328-4.592,3.772-12.136,10.5-17.876,14.6-6.4,4.592-13.12,7.544-14.76,6.4-1.64-1.312-.656-3.772,5.248-9.84,3.444-3.608,7.872-8.036,13.12-12.792,7.872-7.052,21.976-20.828,11.48-24.108-6.724-2.3-30.176,14.1-39.688,21.812,7.544-8.528,16.892-17.22,22.8-21.32-4.1,0-8.528.82-11.316,2.624a98.943,98.943,0,0,0-15.088,13.284C346.04-22.632,338-12.628,333.576-4.264c-.82,1.64-.492,6.4,1.476,6.4,8.692-10.988,10.332-13.284,20.828-23.288,11.152-10.5,36.08-26.076,39.852-24.436,3.28,1.312-10.66,12.136-16.236,17.22-6.724,6.232-10,9.184-14.1,14.924-5.412,7.708-3.444,13.776.656,14.76,3.772.82,10.824-1.968,17.384-6.724,6.068-4.1,13.284-10.332,18.368-14.76C402.62-20.828,403.6-21.812,402.784-22.632ZM441.16-38.376c.984-2.132,3.116-7.216-.328-9.184-5.576-3.28-23.288,5.74-36.08,17.548-8.2,7.544-13.94,16.072-13.94,23.452-.164,5.084,3.608,8.528,10,7.872,7.216-.82,13.94-4.92,19.68-9.02a173.781,173.781,0,0,0,17.22-14.432c.656-.492.82-1.312.328-1.64-.492-.492-1.312-.164-1.968.328A229.53,229.53,0,0,1,416.4-7.708c-4.1,2.788-14.268,8.364-18.2,6.232-3.608-2.132,0-11.152,14.268-24.764,8.528-8.2,23.944-21.812,27.06-19.68,2.3,1.476.656,6.068-6.232,10.332-2.624,1.64-6.888,4.756-5.084,7.052,1.64,1.968,4.92-.164,6.4-1.476A22.892,22.892,0,0,0,441.16-38.376ZM477.9-47.888c-5.74-3.28-25.092,7.216-37.556,19.024-10.5,10.168-12.628,18.2-12.792,21.32-.656,5.9,3.116,8.364,7.38,8.856,6.4.492,14.268-3.444,20.008-7.544A169.236,169.236,0,0,0,473.8-21.484c.656-.656,1.476-1.476.82-2.3-.492-.656-1.64,0-2.3.656C467.728-18.86,459.364-11.48,451.492-6.56c-6.724,4.264-13.284,6.4-16.236,5.248-6.068-2.624,5.412-16.892,15.58-26.4,3.28,1.968,15.416-2.132,20.664-5.74C477.732-37.884,483.308-44.772,477.9-47.888Zm-.984,1.476c1.64,1.312-1.8,5.9-7.216,10.168C462.48-30.5,454.28-27.716,451.82-28.7,459.856-36.572,474.944-48.052,476.912-46.412Zm41.164-14.1c-1.968-1.64-5.576.492-11.316,5.74a94.287,94.287,0,0,0-10.824,11.644c-4.1,4.756-12.956,12.464-19.516,18.04-2.132,0-4.756,2.132-7.708,4.756-1.968,1.64-5.576,4.756-7.052,5.9-3.608,3.28-5.9,6.888-5.9,9.512-.164,4.428,3.444,6.068,7.708,6.232,3.28.328,11.48-.82,17.056-3.444,7.052-3.116,19.188-10.66,28.7-19.352.492-.328,1.148-1.476.492-1.968a.994.994,0,0,0-1.64,0c-7.544,6.724-18.04,14.76-28.7,19.68,14.6-9.676,14.924-22.632,16.4-30.176.492-2.624,1.312-6.232,3.116-8.364,2.3-2.46,7.216-5.248,11.152-8.036C517.256-55.432,519.388-59.368,518.076-60.516ZM494.952-39.524c-1.968,7.544-8.856,20.5-14.6,26.732-6.4,7.216-13.448,10.66-18.368,10.66-1.968,0-4.264-.984-4.1-3.28.164-1.8,1.312-3.772,3.936-5.74,2.3-1.64,6.232-4.1,8.2-5.576,4.1-2.624,6.888-5.248,7.38-6.724C483.964-28.864,490.524-34.6,494.952-39.524Z" transform="translate(47.911 103.354)" fill="#c3a873"/>
            </Box>
            <Text ml={{base: '5px', sm: '5px', md: '150px'}} {...texts.heading}>await</Text>
          </Box>

          <PreLine mt='30px' {...texts.content} display={{base: 'block', lg: 'none'}}>
            {`For more information on Oceania Cruises’
            small-ship luxury product, exquisitely crafted
            cuisine, and expertly curated travel experiences`}
          </PreLine>
          <PreLine mb='10px!important' mt={{lg: '60px'}} {...texts.content} display={{base: 'none', lg: 'block'}}>
            {`For more information on Oceania Cruises’ small-ship luxury product,
            exquisitely crafted cuisine, and expertly curated travel experiences`}
          </PreLine>

          <Text as={Link} href='https://www.oceaniacruises.com/' target='_blank' referrer='sponsored noreferrer' fontSize='20px' mb='0!important' color='#F6F1E8' textTransform={'uppercase'}>
            VISIT oceaniacruises.com
          </Text>

          <Text {...texts.content}>
            Call 1300 355 200 or consult your travel advisor.
          </Text>

          <Button as={Link} href='https://www.oceaniacruises.com/' target='_blank' referrer='sponsored noreferrer' _hover={{textDecor:'none'}} bgColor='primary' color='white' p={{base:'13px 48px'}} borderRadius='0' mt={{base:'20px'}} >
            READ MORE
          </Button>

          <Center mt='20px'>
            <svg width="94" height="36.283" viewBox="0 0 94 36.283">
              <defs>
                <clipPath id="clip-pathzzz">
                  <rect id="Rectangle_1614" data-name="Rectangle 1614" width="94" height="36.283" fill="#c3a873"/>
                </clipPath>
              </defs>
              <g id="DECORATIVE_SWIRL" data-name="DECORATIVE SWIRL" transform="translate(-12 -173)">
                <g id="Group_6015" data-name="Group 6015" transform="translate(12 173)" clip-path="url(#clip-pathzzz)">
                  <path id="Path_2300" data-name="Path 2300" d="M31.122,7.181a8.339,8.339,0,0,0-3.541,3.658c7.543,1.79,14.117,5.76,18.56,8.4l.94.564c.649.387,1.418.815,2.23,1.273a26.992,26.992,0,0,0,2.8-1.625c1.179-.786,2.671-1.825,4.394-3.03q.471-.327.954-.666C44.815,6.708,38.031,3.281,31.122,7.181m-4.211,7.626a10.253,10.253,0,0,0,6.581,8.176c4.149,1.54,8.872.865,12.943-.654-.37-.23-.731-.451-1.074-.655l-.309-.183c-4.488-2.671-10.77-6.552-18.141-8.227a8,8,0,0,0,0,1.543m47.691-.88c2.508.295,4.439-.177,5.585-1.366a4.038,4.038,0,0,0,1.1-3.231,3.606,3.606,0,0,0-2.031-2.5c-1.106-.573-3.505-1.26-7.146.56-1.4.7-3.025,1.652-4.747,2.734A11.165,11.165,0,0,0,74.6,13.928m-10.068-7.6c.722,1.15,1.528,2.113,2.291,3.128,1.778-1.117,3.458-2.1,4.9-2.827,3.977-1.988,6.667-1.2,7.915-.554A4.445,4.445,0,0,1,82.122,9.2,4.916,4.916,0,0,1,80.8,13.15c-.932.965-2.781,2.032-6.292,1.618a13.763,13.763,0,0,1-7.892-4.173c-1.9,1.21-3.891,2.556-5.829,3.891.2.143.395.281.6.427,14.036,10.074,24.885,9.213,29.394,3.317A10.612,10.612,0,0,0,92.251,7.261C90.823,3.9,87.806,1.142,85.231.844a.423.423,0,1,1,.1-.84c2.853.329,6.165,3.307,7.7,6.928a11.428,11.428,0,0,1-1.581,11.813c-4.75,6.212-17.321,9.1-31.76-1.386-.507-.367-1-.725-1.493-1.078-.407.283-.809.563-1.2.837-1.73,1.208-3.223,2.25-4.41,3.039a27.035,27.035,0,0,1-2.4,1.42c.787.453,1.594.93,2.355,1.428,6.814,4.434,15.43,9.785,22.956,10.913,5.5.825,9.406-.78,11.479-2.446a10.231,10.231,0,0,0,4.095-7.005.424.424,0,0,1,.843.087A12.292,12.292,0,0,1,87.3,32.574a17.293,17.293,0,0,1-12.554,3.6c-7.951-.9-17.428-6.8-24.309-11.283-1.083-.7-2.122-1.378-3.1-2-4.367,1.737-9.572,2.579-14.136.883a11.131,11.131,0,0,1-7.129-8.884,10.3,10.3,0,0,1-.019-1.813,29.91,29.91,0,0,0-10.957-.237C2.3,15.011.888,21.633,1.028,25.812a9.23,9.23,0,0,0,4.714,7.319c3.2,1.818,7.115,1.632,11.028-.525a.423.423,0,0,1,.409.741c-4.182,2.3-8.393,2.489-11.856.52A10.118,10.118,0,0,1,.041,26.014C-.525,17.735,4.932,12.278,14.717,10.4a29.993,29.993,0,0,1,11.858.221,8.862,8.862,0,0,1,3.759-4.548C38.262,1.16,45,3.306,60.05,13.963c1.978-1.366,4.022-2.747,5.971-4a31.68,31.68,0,0,1-2.689-3.852c-.339-.547-.188-2.087,1.2.213" transform="translate(-0.001 0)" fill="#c3a873"/>
                </g>
              </g>
            </svg>
          </Center>

        </Box>

      </Center>
    </Container>
  )
}

// font styles
const texts = {
  content: {
    fontFamily: 'body',
    fontWeight: 'normal',
    color: 'white',
    fontSize: {base: '14px', sm: '17px',},
    lineHeight: {base: '25px', sm: '28px',}
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    color: 'white',
    fontSize: {base: '20px', sm: '24px', md: '43px'},
    lineHeight: {base: '26px', sm: '30px', md: '53px'},
    textTransform: 'uppercase',
  },
}

