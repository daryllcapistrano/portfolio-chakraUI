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
    <Box id="contact" px="8" py="16">
      <Heading fontWeight="black">Get in touch</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing="12" mt="4">
        <Text>
          I am actively looking for job opportunities to contribute my skills.
        </Text>
        <HStack justifyContent="space-between">
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
      </SimpleGrid>
    </Box>
  )
}

export default Footer
