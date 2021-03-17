import React from "react"
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react"
import Headshot from "../images/headshot"

function AboutSection() {
  const fontColor = useColorModeValue("black", "white")
  const bgColor = useColorModeValue("gray.300", "gray.900")
  // const quoteTextColor = useColorModeValue("gray.700", "gray.500")
  // const bgColorQuote = useColorModeValue("gray.500", "gray.700")

  return (
    <Box id="about" minH="100vh" px={8} py={16} bg={bgColor}>
      <Heading color={fontColor} fontWeight="black" mb={8}>
        Who Am I?
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={12}>
        <Text fontSize="xl" mt={6}>
          I'm a self-taught web developer with a passion for creating things for
          the web. When I'm not coding, I enjoy spending time skateboarding,
          which you can see here, here, and here.
        </Text>
        <Box width="300px" m="auto">
          <Headshot />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default AboutSection
