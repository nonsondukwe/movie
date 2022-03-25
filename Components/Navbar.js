import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/Logo.png'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex pl='77px' pr='10' bg='#292929'  height='140px' alignItems='center'>
         <Box>
      <Image src={Logo}
       alt="Logo" />
    </Box>
        </Flex>
  )
}

export default Navbar