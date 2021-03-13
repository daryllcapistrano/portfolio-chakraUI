import React from "react"
import {
  SimpleGrid,
  Box,
  Text,
  HStack,
  Heading,
  IconButton,
  Link,
} from "@chakra-ui/react"

import { SiGmail } from "@react-icons/all-files/si/SiGmail"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram"

const Footer = () => {
  return (
    <Box id="contact" minH="50vh" pt="10" pb="2">
      <Box px="4" w={{ base: `100%`, md: `75%` }} m="0 auto">
        <Heading borderBottom="1px" fontWeight="black" pl="2">
          Get in touch
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing="40px" mt="10">
          <Box>
            <Text textAlign="center">
              I am actively looking for job opportunities to contribute my
              skills.
            </Text>
          </Box>
          <Box>
            <HStack justifyContent="space-evenly">
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
        </SimpleGrid>
      </Box>
      {/* <Box>
        <Text fontSize="xs" textAlign="center">
          © {new Date().getFullYear()} Daryll Capistrano
        </Text>
      </Box> */}
    </Box>
  )
}

export default Footer
