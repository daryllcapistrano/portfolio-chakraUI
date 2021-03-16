import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import Carousel from "../carousel"

function StackSection() {
  const fontColor = useColorModeValue("black", "white")

  return (
    <Box id="stack" minH="100vh" px="8" py="16">
      <Heading fontWeight="black">Skills</Heading>
      <Carousel />
      <Box>
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Main Skills
        </Text>
        <Text mb="2">
          JavaScript/ES6, React, Gatsby, GraphQL, Git, CSS3/Sass and HTML.
        </Text>
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Secondary Skills
        </Text>
        <Text mb="2">Python, Node.js, jQuery, SQL, MongoDB and Express</Text>
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Other Skills
        </Text>
        <Text mb="2">Photoshop, Illustrator, Slappys and Kickflips</Text>
      </Box>
      <GitHubCalendar username="daryllcapistrano">
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </Box>
  )
}

export default StackSection
