import React from 'react'
import {Image, Center, Text, Box, Button, HStack} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import bgsource from '../images/bg.jpg'
import {useNavigate} from 'react-router-dom'
import Card from '../components/Card'
import source from '../images/about.jpg'
import Footer from '../components/Footer'
function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Image
        src={bgsource}
        h={"100vh"}
        w={"full"}
        position={"absolute"}
        top={0}
        zIndex={-1}
      />
      <Navbar />
      <Box align={"center"} mt={"128px"}>
        <Text color={"white"} fontSize={"60px"} lineHeight={"66px"}>
          Quant Club
        </Text>
        <Text color={"white"} fontSize={"60px"} lineHeight={"66px"} mb={"24px"}>
          IIT Kharagpur
        </Text>
        <Text color={"white"} fontSize={"18px"} lineHeight={"28px"} mb={"24px"}>
          Finance + Maths + Coding = Quant
        </Text>
        <Button
          colorScheme={"green"}
          bg={"green.600"}
          size={"lg"}
          h={"55px"}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Explore Projects
        </Button>
      </Box>
      <Center bgColor={"green.600"} mt={"226px"}>
        <Card bg={"blackAlpha.900"} heading={"Who are we?"} desc={"We are a student body of Quantitative Finance enthusiasts aiming at fostering Quant in the student community of IIT Kharagpur"}/>
        <Card bg={"green.700"} heading={"What do we do?"} desc={"As a society, we strive to nurture and promote Quant Culture and provide resources and opportunities to the student community at IIT Kharagpur."} />
        <Card bg={"blackAlpha.900"} heading={"How do we do it?"} desc={"We conduct regular Knowledge Meets, study, discuss and implement research papers, organize workshops and seminars and provide regular resources from our Facebook page."}  />
        <Card bg={"green.700"} heading={"What are we known for?"} desc={"Knowledge meets, research paper presentation sessions, corporate projects, summer of quant, workshops, Intern bootcamp, trading competitions"} />
      </Center>
      <HStack px={"150px"} py={"70px"} spacing={"120px"}>
        <Box w={"653px"} h={"416px"}>
          <Text fontSize={"60px"} lineHeight={"90px"} mb={"24px"}>
            Our Story
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

export default Home