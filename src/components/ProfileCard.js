import React,{useState} from "react";
import {Image, Center, Text, Box, HStack, Circle} from '@chakra-ui/react'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import {Icon} from '@chakra-ui/icons'

function ProfileCard({data}) {
  const [hover, sethover] = useState(false);
  return (
    <Box w={"255px"} h={"428px"}>
      <Box
        w={"255px"}
        h={"328px"}
        position={"relative"}
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
      >
        <Image
          src={`https://drive.google.com/uc?export=view&id=${data.image}`}
          h={"328px"}
          w={"255px"}
          name={"Quant club"}
        />
        {hover && (
          <Center
            w={"255px"}
            h={"328px"}
            position={"absolute"}
            top={0}
            bg={"transparent"}
            opacity={0.5}
          >
            <HStack spacing={"14px"}>
              <Circle
                w={"40px"}
                h={"40px"}
                bgColor={"gray.500"}
                className={"social"}
              >
                <Icon
                  as={FaFacebook}
                  w={"25px"}
                  h={"25px"}
                  cursor={"pointer"}
                  onClick={(e) => {
                    window.open(data.fb, "blank");
                  }}
                />
              </Circle>
              <Circle
                w={"40px"}
                h={"40px"}
                bgColor={"gray.500"}
                className={"social"}
              >
                <Icon
                  as={FaLinkedin}
                  w={"25px"}
                  h={"25px"}
                  cursor={"pointer"}
                  onClick={(e) => {
                    window.open(data.linkedin, "blank");
                  }}
                />
              </Circle>
              <Circle
                w={"40px"}
                h={"40px"}
                bgColor={"gray.500"}
                className={"social"}
              >
                <Icon
                  as={FaGithub}
                  w={"25px"}
                  h={"25px"}
                  cursor={"pointer"}
                  onClick={(e) => {
                    window.open(data.github, "blank");
                  }}
                />
              </Circle>
            </HStack>
          </Center>
        )}
        <Text
          color={"white"}
          position={"absolute"}
          bottom={0}
          fontWeight={"700"}
          fontSize={"16px"}
        >
          {data.name}
        </Text>
      </Box>
      <Text fontWeight={"700"} fontSize={"16px"}>
        {data.position}
      </Text>
    </Box>
  );
}

export default ProfileCard;
