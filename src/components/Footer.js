import React from 'react'
import {ChevronRightIcon, EmailIcon, Icon, PhoneIcon} from '@chakra-ui/icons'
import {Text, Box, HStack, Circle, List, ListIcon, ListItem, Link} from '@chakra-ui/react'
import {FaFacebook, FaLinkedin, FaGithub, FaHome} from 'react-icons/fa'
function Footer() {
  return (
    <Box py={"32px"} px={"204px"} bgColor={"black"} display={'inline-flex'} w={'full'}>
        <Box w={"350px"} mr={'48px'}>
          <Text
            color={"white"}
            fontSize={"18px"}
            lineHeight={"28px"}
            mb={"48px"}
          >
            Quant
          </Text>
          <Text
            color={"whiteAlpha.700"}
            fontSize={"16px"}
            lineHeight={"28px"}
            mb={"48px"}
          >
            Far far away, behind the word mountains, far from the countries.
          </Text>
          <HStack spacing={"14px"}>
            <Circle
              w={"40px"}
              h={"40px"}
              bgColor={"gray.500"}
              className={'social'}
            >
              <Icon as={FaFacebook} w={'25px'} h={'25px'} cursor={'pointer'}/>
            </Circle>
            <Circle
              w={"40px"}
              h={"40px"}
              bgColor={"gray.500"}
              className={'social'}
            >
              <Icon as={FaLinkedin} w={'25px'} h={'25px'} cursor={'pointer'}/>
            </Circle>
            <Circle
              w={"40px"}
              h={"40px"}
              bgColor={"gray.500"}
              className={'social'}
            >
              <Icon as={FaGithub} w={'25px'} h={'25px'} cursor={'pointer'}/>
            </Circle>
          </HStack>
        </Box>
        <Box w={"350px"} mr={'32px'}>
          <Text
            color={"white"}
            fontSize={"18px"}
            lineHeight={"28px"}
            mb={"48px"}
          >
            Community
          </Text>
          <List spacing={1} color={'white'}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="gray.500" />
              Projects
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="gray.500" />
              Teams
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="gray.500" />
              Blog
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            {/* <ListItem>
              <ListIcon as={ChevronRightIcon} color="gray.500" />
              FAQs
            </ListItem> */}
          </List>
        </Box>
        <Box w={"400px"}>
          <Text
            color={"white"}
            fontSize={"18px"}
            lineHeight={"28px"}
            mb={"48px"}
          >
            Want to Connect?
          </Text>
          <List spacing={2} color={'white'}>
            <ListItem>
              <ListIcon as={FaHome} color="gray.500" w={'20px'} h={'20px'}/>
              Quant Club, IIT Kharagpur, Kharagpur, 721302
            </ListItem>
            <ListItem>
              <ListIcon as={PhoneIcon} color="gray.500" w={'20px'} h={'20px'} />
              +91 8959984399
            </ListItem>
            <ListItem>
              <ListIcon as={EmailIcon} color="gray.500" w={'20px'} h={'20px'} />
              <Link href='mailto:quantclubiitkgp@gmail.com?subject=Hi I had something to ask'>quantclubiitkgp@gmail.com</Link>
            </ListItem>
          </List>
        </Box>
      </Box>
  )
}

export default Footer