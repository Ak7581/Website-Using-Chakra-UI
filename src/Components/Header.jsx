import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsFilterLeft } from 'react-icons/bs';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        zIndex={'overlay'}
        left={'4'}
        colorScheme={'purple'}
        padding={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BsFilterLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <div>anil</div>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Vidio Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onclick={onclose} variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onclick={onclose} variant={'ghost'} colorScheme="purple">
                <Link to={'/Videos'}>Videos</Link>
              </Button>
              <Button onclick={onclose} variant={'ghost'} colorScheme="purple">
                <Link to={'/videos'}>Free Videos</Link>
              </Button>
              <Button onclick={onclose} variant={'ghost'} colorScheme="purple">
                <Link to={'/uplode'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onclick={onclose} colorScheme="purple">
                <Link to='/login'>Log In</Link>
              </Button>
              <Button
                onclick={onclose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to="/signup"> Singn Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
