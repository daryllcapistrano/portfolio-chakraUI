import React from "react"
import {
  Flex,
  Box,
  Button,
  Slide,
  useDisclosure,
  Spacer,
  CloseButton,
  Link,
  VStack,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

function SlideMenu() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle} size="sm" ml="2" variant="outline">
        MENU
      </Button>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box minH="50vh" color="white" bg="gray.900" shadow="md">
          <Flex p="4">
            <Spacer />
            <CloseButton onClick={onToggle} />
          </Flex>
          <VStack p="10">
            <Link as={GatsbyLink} to="#about" onClick={onToggle}>
              About
            </Link>
            <Link as={GatsbyLink} to="#stack" onClick={onToggle}>
              Stack
            </Link>
            <Link as={GatsbyLink} to="#projects" onClick={onToggle}>
              Projects
            </Link>
            <Link as={GatsbyLink} to="#contact" onClick={onToggle}>
              Contact
            </Link>
          </VStack>
        </Box>
      </Slide>
    </>
  )
}

const Header = () => (
  <Flex
    as="header"
    pos="absolute"
    alignItems="center"
    borderTop="6px solid #1F7A8C"
    w="100%"
    px="4"
    py="2"
  >
    <ColorModeSwitcher />
    <Spacer />
    <SlideMenu />
  </Flex>
)

export default Header
