import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"
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
    <Box mt="10" p="10" w={{ base: `100%`, md: `75%` }} m="auto">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Languages / Frameworks / Technology
      </Text>
      <Carousel />
      <Box mt="10">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Main Skills
        </Text>
        <Text mb="2">
          The technology that I use on a daily basis and I am most proficient at
          are JavaScript/ES6, React, Gatsby, GraphQL, Git, CSS3 and HTML.
        </Text>
      </Box>
      <Box mt="10">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Secondary Skills
        </Text>
        <Text mb="2">
          The technology that I use less frquently but still proficient at are
          Python, Node.js, jQuery, SQL, MongoDB and Express
        </Text>
      </Box>
      <Box mt="10">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          My Focus
        </Text>
        <Text mb="2">
          Moving into this new year, I would like to learn TypeScript,
          WebSockets and code-splitting. As well as, learning how to make my
          work more A11y compliant
        </Text>
      </Box>
      <Flex justifyContent="center" mt="10">
        <GitHubCalendar
          username="daryllcapistrano"
          theme={calendarTheme}
          // showTotalCount={false}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Flex>
    </Box>
  )
}

export default StackSection
