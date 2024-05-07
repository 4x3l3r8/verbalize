import { Link } from '@chakra-ui/next-js'
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { links } from './linklist'
import { CgClose } from 'react-icons/cg'

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export const MobileNav = () => {
    return (
        <>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<Icon as={isOpen ? CgClose : GiHamburgerMenu} />}
                            display={{ md: "none" }}
                            variant='solid'
                        />
                        <MenuList>
                            {links.map((link) => <MenuItem as={Link} href={"#"} key={link}>{link}</MenuItem>)}
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}