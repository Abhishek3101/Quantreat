import React from 'react'
import logosource from '../images/favicon1.png'
import {HStack,Image,Text} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  return (
    <HStack h={"56px"} py={"48px"} px={"36px"} position={'sticky'} top={0} backgroundColor={"blackAlpha.900"} zIndex={9999}>
        <HStack mr={280}>
          <Image src={logosource} h={"50px"} mr={'5px'}/>
          <Text as={"b"} color={"white"} fontSize={"20px"} lineHeight={"45px"}>
            Quant Club IIT Kharagpur
          </Text>
        </HStack>
        <HStack spacing={'32px'}>
          <Text color={"white"} fontSize={'16px'} _hover={{color:'green'}} cursor={'pointer'} onClick={()=>{navigate('/QuantClub')}}>
            Home
          </Text>
          {/* <Text color={"white"} fontSize={'15px'} _hover={{color:'green'}} cursor={'pointer'} onClick={()=>{navigate('/story')}}>
            Our Story
          </Text> */}
          <Text color={"white"} fontSize={'16px'} _hover={{color:'green'}} cursor={'pointer'} onClick={()=>{navigate('/QuantClub/team')}}>
            Team
          </Text>
          <Text color={"white"} fontSize={'16px'} _hover={{color:'green'}} cursor={'pointer'} onClick={()=>{navigate('/QuantClub/projects')}}>
            Projects
          </Text>
          <Text color={"white"} fontSize={'16px'} _hover={{color:'green'}} cursor={'pointer'} onClick={()=>{navigate('/QuantClub/blog')}}>
            Blog
          </Text>
          {/* <Text color={"white"} fontSize={'15px'} _hover={{color:'green'}} cursor={'pointer'} onClick={()=>{navigate('/contacts')}}>
            Contact Us
          </Text> */}
        </HStack>
      </HStack>
  )
}

export default Navbar