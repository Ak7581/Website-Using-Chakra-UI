import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Input,
  Stack,
  VStack,
  
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
function Footer() {
  return (
    <div>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['coloum', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', "left"]}>
              Subscribe to be get Update
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder={'Enter Email Here......'}
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />

              <Button
                p={'0'}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0 '}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Vidio Hub
            </Heading>
            <Text>All right received</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme='whiteAlpha'>
             <a target='blank'  href= 'https://github.com/Ak7581' >Github</a>
             </Button>
             <Button variant={'link'} colorScheme='whiteAlpha'>
             <a target='blank' href= 'https://github.com/Ak7581' >Instagram</a>
             </Button>


             <Button variant={'link'} colorScheme='whiteAlpha'>
             <a target='blank' href= 'https://github.com/Ak7581' > youtube</a>


            </Button>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
}

export default Footer;
