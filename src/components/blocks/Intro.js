import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

import NineLink from 'components/util/NineLink'
export default function Intro() {

  return (
    <Box pos='relative' zIndex={123} >

      <Grid justifyContent='center' alignItems='center' overflowX='hidden'
            pt={{base:'251px',lg:'275px'}} pb={{base:'134px',lg:'117px'}} textAlign='center'
            pl={{base:'18px'}} pr={{base:'18px'}}
      >
        <GridItem placeSelf='center'>
          <motion.div
              initial={{y: -100, opacity: 0}}
              whileInView={{y: -20, opacity: 1, transition: {duration: 1.2, ease: 'easeOut'}}}
            >
            <Text fontFamily='adobe' fontSize={{base:'14px',lg:'21px'}} letterSpacing='1px' lineHeight={{base:'19px',lg:'28px'}}>
              WHEN THE WORLD BECKONS
            </Text>
            <Text  {...texts.heading2} mt={{base:'-15px', lg:0}}>
              OCEANIA CRUISES
            </Text>

            <Text {...texts.heading} mt={{base:'-20px', lg: 0}}>
              TAKES YOUR THERE IN
            </Text>
          </motion.div>

          <motion.div
            initial={{scale: 2, opacity: 0}}
            whileInView={{scale: 1, opacity: 1, transition: {duration: 1.2, ease: 'easeOut'}}}
          >
            <Box mt={{base:'-30px', lg:'-60px'}} pt={{base:'0px', md:'30px' }} mr={{base:"-70px"}} pl={{base:'30px'}}>
              <Box mx='auto' display={{base: 'block', lg: 'none'}} as='svg'  width="349.819" height="169.635" viewBox="0 0 349.819 169.635">
                <defs>
                  <clipPath id="pathintromob">
                    <rect id="Rectangle_1614" data-name="Rectangle 1614" width="230.188" height="88.85" fill="#c3a873"/>
                  </clipPath>
                </defs>
                <g id="Group_6962" data-name="Group 6962" transform="translate(-808.945 -1215.222)">
                  <g id="DECORATIVE_SWIRL" data-name="DECORATIVE SWIRL" transform="translate(808.945 1219.373)" opacity="0.161">
                    <g id="Group_6015" data-name="Group 6015" transform="translate(0 0)" clip-path="url(#pathintromob)">
                      <path id="Path_2300" data-name="Path 2300" d="M76.212,17.584a20.42,20.42,0,0,0-8.672,8.957c18.471,4.384,34.571,14.1,45.45,20.574l2.3,1.381c1.589.947,3.472,2,5.462,3.118a66.1,66.1,0,0,0,6.867-3.98c2.887-1.924,6.54-4.47,10.76-7.419q1.154-.8,2.337-1.63c-30.974-22.159-47.588-30.55-64.5-21M65.9,36.26c.855,8.583,7.481,16.813,16.115,20.021,10.161,3.772,21.726,2.118,31.7-1.6-.905-.564-1.79-1.1-2.631-1.6l-.757-.449C99.333,46.087,83.948,36.584,65.9,32.481a19.579,19.579,0,0,0,0,3.778m116.787-2.154c6.141.722,10.87-.434,13.676-3.344a9.887,9.887,0,0,0,2.691-7.912,8.83,8.83,0,0,0-4.974-6.13c-2.708-1.4-8.583-3.086-17.5,1.372-3.43,1.713-7.408,4.045-11.624,6.694a27.341,27.341,0,0,0,17.731,9.32M158.033,15.5c1.769,2.815,3.741,5.174,5.61,7.66,4.354-2.735,8.467-5.151,12.008-6.923,9.739-4.868,16.326-2.94,19.383-1.358a10.886,10.886,0,0,1,6.067,7.66,12.037,12.037,0,0,1-3.246,9.665c-2.283,2.364-6.81,4.975-15.408,3.962-7.015-.825-13.894-4.74-19.326-10.22-4.645,2.964-9.528,6.258-14.274,9.528.487.35.967.689,1.464,1.045,34.371,24.67,60.939,22.56,71.981,8.123,8.4-10.986,5.87-21.545,3.612-26.861-3.5-8.23-10.885-14.983-17.19-15.714a1.036,1.036,0,1,1,.238-2.058c6.987.8,15.1,8.1,18.859,16.965,2.435,5.729,5.168,17.11-3.873,28.928-11.631,15.212-42.415,22.281-77.773-3.395-1.241-.9-2.457-1.776-3.656-2.64-1,.692-1.981,1.378-2.94,2.049-4.236,2.958-7.891,5.509-10.8,7.443a66.2,66.2,0,0,1-5.883,3.478c1.927,1.108,3.9,2.278,5.768,3.5,16.685,10.858,37.784,23.962,56.216,26.724,13.461,2.02,23.033-1.91,28.109-5.991,5.9-4.752,9.337-10.482,10.027-17.155a1.038,1.038,0,0,1,2.064.214c-.746,7.211-4.969,14.556-11.3,19.644a42.346,42.346,0,0,1-30.743,8.818c-19.472-2.2-42.677-16.659-59.529-27.63-2.652-1.726-5.2-3.374-7.591-4.895-10.695,4.253-23.439,6.314-34.616,2.163C71.947,54.754,64.771,45.8,63.835,36.468a25.226,25.226,0,0,1-.048-4.44,73.243,73.243,0,0,0-26.832-.58C5.643,36.759,2.174,52.975,2.516,63.209c.228,6.926,4.868,14.126,11.544,17.922,7.832,4.452,17.422,4,27.007-1.287a1.036,1.036,0,0,1,1,1.815C31.828,87.3,21.515,87.754,13.036,82.933,5.643,78.731.621,71.428.1,63.7c-1.384-20.274,11.978-33.636,35.94-38.245A73.446,73.446,0,0,1,65.077,26a21.7,21.7,0,0,1,9.2-11.138C93.7,2.841,110.193,8.095,147.049,34.192c4.844-3.344,9.848-6.727,14.621-9.783a77.577,77.577,0,0,1-6.584-9.432c-.831-1.34-.459-5.112,2.947.523" transform="translate(0 0)" fill="#c3a873"/>
                    </g>
                  </g>
                  <path id="Path_2716" data-name="Path 2716" d="M-.67-126.183c-2.456-5.171-9.308-6.464-13.833-6.464-18.1,0-34.906,13.316-61.925,46.8-23.4,29.088-42.275,46.929-62.7,44.085-9.437-1.293-15.126-8.4-13.445-19.651,1.551-10.213,9.438-21.848,22.366-34.13,19.651-18.746,37.621-25.856,46.283-20.039,5.559,3.878,3.749,12.152,1.551,17.065-3.361,7.5-11.765,16.677-20.3,24.434-9.437,8.533-20.168,18.616-31.544,18.616-3.1,0-4.913-1.293-5.559-2.456-.517-.776-.776-2.068-1.293-1.939-.388,0-.646,1.034-.259,1.939.776,2.068,3.361,3.878,7.24,3.878,11.635,0,23.141-6.981,33.613-16.548,10.6-9.7,16.677-18.616,20.168-27.278,2.2-5.43,4.008-14.479-2.715-19-8.533-5.818-30.769-1.164-50.419,17.582-15,14.479-20.3,27.408-21.331,36.974C-156.065-49-149.731-41.633-139-39.953c20.039,2.715,43.05-10.73,68.907-43.438C-46.823-113-31.568-131.1-15.149-131.1c3.878,0,8.4.776,11.118,6.335.776,1.422,1.164,2.844,2.068,2.715C-.024-122.046-.153-125.02-.67-126.183Zm69.553,16.031c2.068-11.765-5.559-24.434-30.64-24.175-19.78.259-43.05,12.023-61.8,25.6a268.885,268.885,0,0,0-30.51,26.373c-2.973.129-8.015.517-9.567.776-.388.129-1.034.259-1.164.776-.129.388,0,.776,1.034.646,3.1-.259,5.688-.517,7.886-.517C-66.086-70.334-72.421-63.094-75.265-58.44c-2.973,4.913-3.1,9.955,1.034,11.506,3.749,1.293,8.92-1.293,14.609-5.559,4.783-3.62,11.118-9.05,14.35-12.023.517-.646,1.422-1.293.9-2.068-.517-.517-1.293,0-1.81.388-4.137,3.878-10.86,9.437-13.833,11.765C-64.276-51.2-70.094-47.71-72.292-49c-3.491-2.068,3.878-10.73,17.194-24.563,2.715-2.844,4.654-4.783,6.981-7.11,2.973-.259,8.92-.388,11.118-.388a1.516,1.516,0,0,0,1.422-.646c.388-.776-.388-.9-.646-.9-2.844-.259-8.145,0-9.955,0,5.818-5.559,17.194-15.514,25.21-21.978,18.1-14.221,40.336-27.537,58.952-27.8,23.141-.259,30.122,10.86,27.8,23.271a15.468,15.468,0,0,1-4.654,8.4c-1.034.776-.9.646-.776,1.164.129.388.388.517,1.422,0C64.1-100.715,67.72-104.205,68.883-110.152ZM3.208-85.589c0-.259-.517-.259-1.034-.259-2.327,0-4.913.259-6.593,1.293-5.3,3.361-10.989,9.05-14.479,12.282C-25.233-66.585-33.766-59.086-38.032-55.6c-4.137,3.361-10.472,7.369-12.152,6.335s.9-4.525,4.913-9.437A239.761,239.761,0,0,1-17.606-84.813c-1.81-.129-5.688.259-7.886,1.551-5.688,3.1-14.738,10.6-20.168,16.16-9.567,9.955-12.8,20.039-4.783,20.039,3.232,0,8.662-3.491,13.187-7.11,3.1-2.456,4.783-4.008,7.24-6.076-10.86,11.635-30.122,31.415-43.05,42.275-25.468,21.331-52.617,36.2-80.8,35.423-25.6-.646-38.655-19.392-29.476-38.267a12.846,12.846,0,0,0,1.293-3.361c-1.034-.9-3.232,2.456-4.137,4.266C-194.85-.522-181.4,18.87-153.221,19.516c25.6.517,54.944-9.825,86.618-36.069,13.316-10.989,41.628-40.982,45.895-45.895,6.981-7.11,11.377-11.894,17.97-18.229A37.629,37.629,0,0,1,2.3-84.813C2.821-85.2,3.208-85.2,3.208-85.589Zm144.407-39.689c2.2-11.635-5.947-24.822-30.9-24.822-21.59,0-42.921,11.894-61.8,25.468C31.65-107.954,12.9-87.528,4.243-78.608-3.9-70.2-9.978-62.965-12.822-58.569c-4.008,6.335-3.1,10.6.646,11.635,3.491.776,8.015-1.939,13.187-5.559a143.866,143.866,0,0,0,15.255-12.54c.517-.388,1.034-.9.517-1.422-.646-.646-1.293,0-1.81.388-5.3,4.525-10.6,9.05-14.35,11.765C-5.195-50.3-8.556-48.356-10.366-49.39c-3.1-1.681,7.5-13.833,17.97-24.563,16.548-17.065,34.13-34.389,49.515-46.541,18.1-14.35,38.914-27.408,58.823-27.408,22.495,0,30.9,11.247,28.7,23.788a15.656,15.656,0,0,1-4.783,8.274c-.9.9-.9.776-.776,1.164s.517.517,1.422,0A14.75,14.75,0,0,0,147.615-125.278ZM46.259-85.718c-4.525-2.586-19.78,5.688-29.605,15C8.38-62.706,6.7-56.371,6.57-53.915c-.517,4.654,2.456,6.593,5.818,6.981,5.042.388,11.247-2.715,15.772-5.947A133.407,133.407,0,0,0,43.027-64.9c.517-.517,1.164-1.164.646-1.81-.388-.517-1.293,0-1.81.517A121.141,121.141,0,0,1,25.445-53.139c-5.3,3.361-10.472,5.042-12.8,4.137-4.783-2.068,4.266-13.316,12.282-20.814,2.586,1.551,12.152-1.681,16.289-4.525C46.13-77.832,50.525-83.262,46.259-85.718Zm-.776,1.164c1.293,1.034-1.422,4.654-5.688,8.015-5.688,4.525-12.152,6.723-14.092,5.947C32.038-76.8,43.932-85.847,45.483-84.555Z" transform="translate(1010.807 1365.322)" fill="#001736"/>
                </g>
              </Box>

              <Box mx='auto' display={{base: 'none', lg: 'block'}} as='svg' width="514.119" height="249.307" viewBox="0 0 514.119 249.307">
                <defs>
                  <clipPath id="pathintro">
                    <rect id="Rectangle_1614" data-name="Rectangle 1614" width="338.3" height="130.58" fill="#c3a873"/>
                  </clipPath>
                </defs>
                <g id="Group_6961" data-name="Group 6961" transform="translate(-738 -1232.9)">
                  <g id="DECORATIVE_SWIRL" data-name="DECORATIVE SWIRL" transform="translate(726 1066)" opacity="0.161">
                    <g id="Group_6015" data-name="Group 6015" transform="translate(12 173)" clip-path="url(#pathintro)">
                      <path id="Path_2300" data-name="Path 2300" d="M112.005,25.843A30.01,30.01,0,0,0,99.26,39.008c27.146,6.443,50.808,20.729,66.8,30.236l3.382,2.03c2.336,1.392,5.1,2.933,8.027,4.583a97.149,97.149,0,0,0,10.092-5.849c4.243-2.828,9.612-6.569,15.814-10.9q1.7-1.177,3.435-2.4c-45.521-32.567-69.938-44.9-94.8-30.865M96.85,53.29c1.257,12.614,11,24.709,23.684,29.424,14.933,5.544,31.93,3.113,46.582-2.353-1.33-.829-2.631-1.624-3.867-2.357l-1.113-.659c-16.15-9.612-38.761-23.579-65.287-29.608a28.774,28.774,0,0,0,0,5.553m171.638-3.165c9.026,1.061,15.975-.637,20.1-4.915a14.531,14.531,0,0,0,3.954-11.629c-.549-3.561-3.282-6.926-7.31-9.009-3.98-2.06-12.615-4.536-25.719,2.017-5.04,2.518-10.887,5.945-17.084,9.838a40.183,40.183,0,0,0,26.059,13.7M232.256,22.778c2.6,4.138,5.5,7.6,8.245,11.258,6.4-4.02,12.444-7.57,17.647-10.175,14.313-7.155,23.994-4.321,28.486-2,4.888,2.528,8.224,6.736,8.917,11.258a17.691,17.691,0,0,1-4.771,14.2c-3.355,3.475-10.008,7.311-22.645,5.822-10.31-1.213-20.419-6.966-28.4-15.019-6.827,4.356-14,9.2-20.977,14,.715.515,1.421,1.012,2.151,1.536,50.515,36.256,89.56,33.156,105.788,11.939,12.35-16.146,8.627-31.663,5.309-39.477-5.137-12.1-16-22.021-25.264-23.095a1.522,1.522,0,1,1,.349-3.025c10.269,1.183,22.186,11.9,27.717,24.933,3.578,8.42,7.6,25.146-5.692,42.515-17.094,22.357-62.336,32.746-114.3-4.99-1.824-1.322-3.61-2.61-5.373-3.881-1.463,1.017-2.912,2.026-4.32,3.012-6.226,4.347-11.6,8.1-15.872,10.938A97.3,97.3,0,0,1,180.6,77.65c2.832,1.629,5.736,3.348,8.477,5.138C213.6,98.746,244.607,118,271.7,122.064c19.783,2.968,33.851-2.807,41.311-8.8,8.677-6.984,13.722-15.4,14.736-25.212a1.525,1.525,0,0,1,3.034.314c-1.1,10.6-7.3,21.392-16.605,28.87a62.235,62.235,0,0,1-45.182,12.959c-28.617-3.238-62.721-24.483-87.488-40.607-3.9-2.536-7.637-4.959-11.156-7.194-15.718,6.251-34.448,9.28-50.874,3.178-13.736-5.1-24.281-18.251-25.657-31.974a37.075,37.075,0,0,1-.07-6.525,107.643,107.643,0,0,0-39.433-.852C8.294,54.023,3.2,77.856,3.7,92.9c.335,10.18,7.154,20.76,16.966,26.339,11.51,6.542,25.6,5.875,39.691-1.891a1.523,1.523,0,0,1,1.471,2.668c-15.05,8.293-30.206,8.957-42.668,1.872C8.294,115.708.913,104.975.145,93.622c-2.035-29.8,17.6-49.433,52.82-56.208a107.941,107.941,0,0,1,42.676.795A31.893,31.893,0,0,1,109.168,21.84C137.7,4.175,161.948,11.9,216.113,50.251c7.119-4.915,14.474-9.886,21.488-14.378a114.012,114.012,0,0,1-9.677-13.863c-1.221-1.969-.675-7.513,4.331.768" transform="translate(0 0)" fill="#c3a873"/>
                    </g>
                  </g>
                  <path id="Path_2716" data-name="Path 2716" d="M87.685-114.95c-3.61-7.6-13.68-9.5-20.33-9.5-26.6,0-51.3,19.57-91.01,68.78C-58.045-12.92-85.785,13.3-115.8,9.12c-13.87-1.9-22.23-12.35-19.76-28.88,2.28-15.01,13.87-32.11,32.87-50.16,28.88-27.55,55.29-38,68.02-29.45,8.17,5.7,5.51,17.86,2.28,25.08-4.94,11.02-17.29,24.51-29.83,35.91-13.87,12.54-29.64,27.36-46.36,27.36-4.56,0-7.22-1.9-8.17-3.61-.76-1.14-1.14-3.04-1.9-2.85-.57,0-.95,1.52-.38,2.85,1.14,3.04,4.94,5.7,10.64,5.7,17.1,0,34.01-10.26,49.4-24.32,15.58-14.25,24.51-27.36,29.64-40.09,3.23-7.98,5.89-21.28-3.99-27.93-12.54-8.55-45.22-1.71-74.1,25.84-22.04,21.28-29.83,40.28-31.35,54.34-1.9,19.57,7.41,30.4,23.18,32.87,29.45,3.99,63.27-15.77,101.27-63.84,34.2-43.51,56.62-70.11,80.75-70.11,5.7,0,12.35,1.14,16.34,9.31,1.14,2.09,1.71,4.18,3.04,3.99C88.635-108.87,88.445-113.24,87.685-114.95Zm102.22,23.56c3.04-17.29-8.17-35.91-45.03-35.53-29.07.38-63.27,17.67-90.82,37.62A395.173,395.173,0,0,0,9.215-50.54c-4.37.19-11.78.76-14.06,1.14-.57.19-1.52.38-1.71,1.14-.19.57,0,1.14,1.52.95,4.56-.38,8.36-.76,11.59-.76-15.01,15.2-24.32,25.84-28.5,32.68-4.37,7.22-4.56,14.63,1.52,16.91,5.51,1.9,13.11-1.9,21.47-8.17,7.03-5.32,16.34-13.3,21.09-17.67.76-.95,2.09-1.9,1.33-3.04-.76-.76-1.9,0-2.66.57C14.725-21.09,4.845-12.92.475-9.5c-6.27,4.75-14.82,9.88-18.05,7.98-5.13-3.04,5.7-15.77,25.27-36.1,3.99-4.18,6.84-7.03,10.26-10.45,4.37-.38,13.11-.57,16.34-.57a2.228,2.228,0,0,0,2.09-.95c.57-1.14-.57-1.33-.95-1.33-4.18-.38-11.97,0-14.63,0,8.55-8.17,25.27-22.8,37.05-32.3,26.6-20.9,59.28-40.47,86.64-40.85,34.01-.38,44.27,15.96,40.85,34.2a22.734,22.734,0,0,1-6.84,12.35c-1.52,1.14-1.33.95-1.14,1.71.19.57.57.76,2.09,0C182.875-77.52,188.195-82.65,189.905-91.39Zm-96.52,36.1c0-.38-.76-.38-1.52-.38-3.42,0-7.22.38-9.69,1.9-7.79,4.94-16.15,13.3-21.28,18.05-9.31,8.36-21.85,19.38-28.12,24.51C26.695-6.27,17.385-.38,14.915-1.9s1.33-6.65,7.22-13.87c6.65-7.79,23.56-24.7,40.66-38.38-2.66-.19-8.36.38-11.59,2.28-8.36,4.56-21.66,15.58-29.64,23.75C7.5-13.49,2.755,1.33,14.535,1.33c4.75,0,12.73-5.13,19.38-10.45,4.56-3.61,7.03-5.89,10.64-8.93C28.595-.95.285,28.12-18.715,44.08c-37.43,31.35-77.33,53.2-118.75,52.06-37.62-.95-56.81-28.5-43.32-56.24.76-1.52,2.09-4.56,1.9-4.94-1.52-1.33-4.75,3.61-6.08,6.27-12.73,28.5,7.03,57,48.45,57.95,37.62.76,80.75-14.44,127.3-53.01,19.57-16.15,61.18-60.23,67.45-67.45,10.26-10.45,16.72-17.48,26.41-26.79,3.61-3.23,5.51-4.94,7.41-6.08C92.815-54.72,93.385-54.72,93.385-55.29Zm212.23-58.33c3.23-17.1-8.74-36.48-45.41-36.48-31.73,0-63.08,17.48-90.82,37.43-34.2,24.51-61.75,54.53-74.48,67.64C82.935-32.68,74-22.04,69.825-15.58c-5.89,9.31-4.56,15.58.95,17.1,5.13,1.14,11.78-2.85,19.38-8.17a211.437,211.437,0,0,0,22.42-18.43c.76-.57,1.52-1.33.76-2.09-.95-.95-1.9,0-2.66.57-7.79,6.65-15.58,13.3-21.09,17.29-8.55,5.89-13.49,8.74-16.15,7.22-4.56-2.47,11.02-20.33,26.41-36.1,24.32-25.08,50.16-50.54,72.77-68.4,26.6-21.09,57.19-40.28,86.45-40.28,33.06,0,45.41,16.53,42.18,34.96a23.009,23.009,0,0,1-7.03,12.16c-1.33,1.33-1.33,1.14-1.14,1.71s.76.76,2.09,0C298.585-99.75,304.1-104.88,305.615-113.62ZM156.655-55.48c-6.65-3.8-29.07,8.36-43.51,22.04-12.16,11.78-14.63,21.09-14.82,24.7-.76,6.84,3.61,9.69,8.55,10.26,7.41.57,16.53-3.99,23.18-8.74A196.063,196.063,0,0,0,151.9-24.89c.76-.76,1.71-1.71.95-2.66-.57-.76-1.9,0-2.66.76-5.32,4.94-15.01,13.49-24.13,19.19-7.79,4.94-15.39,7.41-18.81,6.08-7.03-3.04,6.27-19.57,18.05-30.59,3.8,2.28,17.86-2.47,23.94-6.65C156.465-43.89,162.925-51.87,156.655-55.48Zm-1.14,1.71c1.9,1.52-2.09,6.84-8.36,11.78-8.36,6.65-17.86,9.88-20.71,8.74C135.755-42.37,153.235-55.67,155.515-53.77Z" transform="translate(946 1383)" fill="#001736"/>
                </g>
              </Box>
            </Box>
          </motion.div>

          <motion.div
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 20, opacity: 1, transition: {duration: 1.2, ease: 'easeOut'}}}
            >
            <PreLine {...texts.content}  maxW='650px' mx='auto' textAlign={{base:'start',lg:'center'}} px={{base: '18px', lg:0}} pt={{base:'57px'}}>
              {`Catering to only 650 to 1238 guests, the line’s small, luxurious ships such as `} <NineLink href='https://ad.doubleclick.net/ddm/clk/553201362;362248100;o' textDecor='underline'>Regatta</NineLink>, <NineLink href='https://ad.doubleclick.net/ddm/clk/553201556;362246648;i' textDecor='underline'>Marina</NineLink> and brand-new <NineLink href='https://ad.doubleclick.net/ddm/clk/553201565;362246648;i' textDecor='underline'>Vista</NineLink> {`feature stunning interiors, imaginative dining concepts, and the highest standards of residential-style luxury.

              Guests can enjoy spaces and sanctuaries for every mood, from restorative spas to charming libraries and a variety of lounges, bars and restaurants. Elegant furniture and elevated art give these ships a boutique-hotel feel, providing a sophisticated experience matched by attentive and personalised service.`}
            </PreLine>

            <Box mt='49px' mx='auto' w={{base: '83px'}} h={{base: '1px'}} bg='primary' />
          </motion.div>

        </GridItem>
      </Grid >
    </Box>
  )
}

// font styles
const texts = {
  content: {
    fontFamily: 'body',
    fontWeight: 'normal',
    color: 'black',
    fontSize: {base: '17px', lg: '17px'},
    lineHeight: {base: '30px', lg: '32px'}
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    color: 'black',
    fontSize: {base: '22px', lg: '33px'},
    lineHeight: {base: '29px', lg: '44px'}
  },
  heading2:{
    fontFamily: 'heading',
    fontWeight: 'normal',
    color: 'primary',
    fontSize: {base: '56px', lg: '83px'},
    lineHeight: {base: '50px', lg: '50px'}
  }
}

