import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import Carousel from "../carousel"

function StackSection() {
  const fontColor = useColorModeValue("black", "white")

  const calendarTheme = {
    background: "transparent",
    text: fontColor,
    grade4: "rgb(8,81,156)",
    grade3: "rgb(49,130,189)",
    grade2: "rgb(107,174,214)",
    grade1: "rgb(189,215,231)",
    grade0: "rgb(239,243,255)",
  }

  return (
    <Box
      id="stack"
      minH="100vh"
      py="10"
      px="4"
      w={{ base: `100%`, md: `75%` }}
      m="auto"
    >
      <Heading borderBottom="1px" fontWeight="black">
        Skills
      </Heading>
      <Carousel />
      <Box mt="10">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Main Skills
        </Text>
        <Text mb="2">
          JavaScript/ES6, React, Gatsby, GraphQL, Git, CSS3/Sass and HTML.
        </Text>
      </Box>
      <Box mt="10">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Secondary Skills
        </Text>
        <Text mb="2">Python, Node.js, jQuery, SQL, MongoDB and Express</Text>
      </Box>
      <Box mt="10">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Other Skills
        </Text>
        <Text mb="2">Photoshop, Illustrator, Slappys and Kickflips</Text>
      </Box>
      <Flex justifyContent="center" mt="10">
        <GitHubCalendar username="daryllcapistrano" theme={calendarTheme}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Flex>
    </Box>
  )
}

export default StackSection
