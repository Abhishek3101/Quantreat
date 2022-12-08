import React,{useState, useEffect} from 'react'
import {Image, Text, Box, VStack, Wrap, WrapItem} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import bgsource from '../images/bg.jpg'
import Footer from '../components/Footer'
import {db} from '../firebase'
import { collection, onSnapshot, query } from "firebase/firestore";
import ProfileCard from '../components/ProfileCard'


function Team() {

  const [team22, setteam22] = useState([])
  const [team21, setteam21] = useState([])
  const [team20, setteam20] = useState([])
  
  useEffect(() => {
    const q1 = query(collection(db,"Team","Core Team","2022"))
    const q2 = query(collection(db,"Team","Core Team","2021"))
    const q3 = query(collection(db,"Team","Core Team","2020"))
    onSnapshot(q1, (querySnap) => {
      setteam22(
        querySnap.docs.map((doc) => {
          return doc.data();
        })
      );
    });
    onSnapshot(q2, (querySnap) => {
      setteam21(
        querySnap.docs.map((doc) => {
          return doc.data();
        })
      );
    });
    onSnapshot(q3, (querySnap) => {
      setteam20(
        querySnap.docs.map((doc) => {
          return doc.data();
        })
      );
    });

  }, [])

  useEffect(() => {
    console.log(team22)
  }, [team22])
  
  return (
    <>
      <Image
        src={bgsource}
        h={"254px"}
        w={"full"}
        position={"absolute"}
        top={0}
        zIndex={-1}
      />
      <Navbar />
      <Box align={"center"} mt={"72px"}>
        <Text color={"white"} fontSize={"40px"} lineHeight={"56px"}>
          Our Team
        </Text>
      </Box>
      <VStack mt={'124px'}>
        <Text fontSize={'32px'} lineHeight={'40px'} fontWeight={'semibold'}>Members of Batch 2022</Text>
        <Wrap w={'1300px'} spacing='30px' justify='center'>
        {team22.map((data)=>{
          return (
            <WrapItem key={data.name}>
              <ProfileCard data={data}/>
            </WrapItem>
          );
        })}
        </Wrap>
        <Text fontSize={'32px'} lineHeight={'40px'} fontWeight={'semibold'}>Members of Batch 2021</Text>
        <Wrap w={'1300px'} spacing='30px' justify='center'>
        {team21.map((data)=>{
          return (
            <WrapItem key={data.name}>
              <ProfileCard data={data}/>
            </WrapItem>
          );
        })}
        </Wrap>
        <Text fontSize={'32px'} lineHeight={'40px'} fontWeight={'semibold'}>Members of Batch 2020</Text>
        <Wrap w={'1300px'} spacing='30px' justify='center'>
        {team20.map((data)=>{
          return (
            <WrapItem key={data.name}>
              <ProfileCard data={data}/>
            </WrapItem>
          );
        })}
        </Wrap>
      </VStack>
      <Footer/>
    </>
  );
}

export default Team