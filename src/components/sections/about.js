import React from "react"
import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react"

function AboutSection() {
  const fontColor = useColorModeValue("black", "white")
  const bgColor = useColorModeValue("gray.300", "gray.900")
  // const quoteTextColor = useColorModeValue("gray.700", "gray.500")
  // const bgColorQuote = useColorModeValue("gray.500", "gray.700")

  return (
    <Box id="about" minH="100vh" px="8" py="16" bg={bgColor}>
      <Heading color={fontColor} fontWeight="black">
        Who Am I?
      </Heading>
      <Text mt="6">
        I'm a<em> self-taught</em> web developer and skateboarder. I make
        websites and apps that are thoughtfully designed, built with performance
        and accessability in mind. One thing that attracted me to programming,
        much like skateboarding, is there are different ways to approach and
        solve your problems. <br />
        Both communities embrace inclusivity and help one another out. That
        feeling when your code compiles with no errors/warning after debugging
        is similar to trying a trick, over and over again, then finally roll
        away clean. There is no better feeling!
      </Text>
    </Box>
  )
}

export default AboutSection
