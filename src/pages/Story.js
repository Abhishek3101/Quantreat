import React from 'react'
import {Image, Center, Text, Box, Button, HStack} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import bgsource from '../images/bg.jpg'
import {useNavigate} from 'react-router-dom'
import Card from '../components/Card'
import source from '../images/about.jpg'
import Footer from '../components/Footer'

function Story() {
  const navigate = useNavigate()
  return (
    <>
      <Image
        src={bgsource}
        h={"356px"}
        w={"full"}
        position={"absolute"}
        top={0}
        zIndex={-1}
      />
      <Navbar />
      <Box align={"center"} mt={"72px"}>
        <Text color={"white"} fontSize={"40px"} lineHeight={"56px"}>
          Our Story
        </Text>
      </Box>
      <HStack px={"150px"} py={"70px"} spacing={"120px"} mt={'120px'}>
        <Box w={"653px"} h={"416px"}>
          <Text fontSize={"60px"} lineHeight={"90px"} mb={"24px"}>
            Quant
          </Text>
          <Text color={"gray.500"} mb={"16px"}>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Text>
          <Text color={"gray.500"}>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </Text>
        </Box>
        <Image src={source} w={"353px"} h={"416px"} />
      </HStack>
      <Footer/>
    </>
  );
}

export default Story