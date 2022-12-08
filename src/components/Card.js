import { Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'

function Card({bg,image,heading,desc}) {
  return (
    <VStack className={'card'} bgColor={bg} w={'278px'} h={'332px'} spacing={'32px'} py={'48px'} px={'24px'}>
        {/* <Image src={image} w={'60px'} h={'60px'}/> */}
        <Text color={'white'} fontSize={'20px'} lineHeight={'30px'}>
            {heading}
        </Text>
        <Text color={'white'} fontSize={'16px'} lineHeight={'28px'} w={'230px'} textAlign={'center'}>
            {desc}
        </Text>
    </VStack>
  )
}

export default Card