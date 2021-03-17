import React, { useEffect } from "react"
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
  HStack,
  IconButton,
  Center,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

import { SiGmail } from "@react-icons/all-files/si/SiGmail"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram"

import { IconContext } from "@react-icons/all-files"
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

function Menu() {
  const { isOpen, onToggle } = useDisclosure()

  // Stop body from scrolling when the Menu is open
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden")
    !isOpen && (document.body.style.overflow = "unset")
  }, [isOpen])

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
            <CloseButton onClick={onToggle} size="lg" />
          </Flex>
          <VStack p={8} spacing={6} alignItems="flex-start">
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
          <Center mt={60} p={6}>
            <Text fontWeight="semibold">Daryll Capistrano</Text>
            <Text color="GrayText">Web Developer</Text>
          </Center>
          <HStack width="100%" p={6} justifyContent="space-between">
            <Link href="mailto:dcapistrano.dev@gmail.com" isExternal>
              <IconButton
                aria-label="send me an email"
                icon={<SiGmail />}
                isRound
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daryll-capistrano-142b32202/"
              isExternal
            >
              <IconButton
                aria-label="check out my LinkedIN"
                icon={<SiLinkedin />}
                isRound
              />
            </Link>
            <Link href="https://www.github.com/daryllcapistrano" isExternal>
              <IconButton
                aria-label="check out my GitHub"
                icon={<SiGithub />}
                isRound
              />
            </Link>
            <Link href="https://www.instagram.com/brotherdaryll/" isExternal>
              <IconButton
                aria-label="check out my Instagram"
                icon={<SiInstagram />}
                isRound
              />
            </Link>
          </HStack>
        </Box>
      </Slide>
    </>
  )
}

const Header = () => (
  <Flex
    as="header"
    position="absolute"
    alignItems="center"
    borderTop="6px solid #1F7A8C"
    w="100%"
    p="1"
  >
    <Spacer />
    <ColorModeSwitcher />
    <Menu />
  </Flex>
)

export default Header
