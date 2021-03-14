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
  Text,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

import { IconContext } from "@react-icons/all-files"
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

function Menu() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle} size="md" variant="ghost">
        <IconContext.Provider value={{ size: "2em" }}>
          <HiMenu />
        </IconContext.Provider>
      </Button>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box color="white" bg="gray.900" shadow="md">
          <Flex p="4">
            <Spacer />
            <CloseButton onClick={onToggle} size="lg" marginRight=".75em" />
          </Flex>
          <VStack minH="100vh" p="8" spacing={6} alignItems="flex-start">
            <Link as={GatsbyLink} to="/" onClick={onToggle}>
              <Text fontSize="3xl" fontWeight="black">
                Home
              </Text>
            </Link>
            <Link as={GatsbyLink} to="#about" onClick={onToggle}>
              <Text fontSize="3xl" fontWeight="black">
                About
              </Text>
            </Link>
            <Link as={GatsbyLink} to="#projects" onClick={onToggle}>
              <Text fontSize="3xl" fontWeight="black">
                Work
              </Text>
            </Link>
            <Link as={GatsbyLink} to="#contact" onClick={onToggle}>
              <Text fontSize="3xl" fontWeight="black">
                Contact
              </Text>
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
    p="2"
  >
    <Spacer />
    <ColorModeSwitcher />
    <Menu />
  </Flex>
)

export default Header
