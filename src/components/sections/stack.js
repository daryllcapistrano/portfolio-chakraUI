import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import { Box, Container, Heading, Text } from "@chakra-ui/react"
import Carousel from "../carousel"

function StackSection() {
  return (
    <Box id="stack" minH="100vh" px={8} py={16}>
      <Heading fontWeight="black" mb={10}>
        What Skills Do I Have?
      </Heading>
      <Box mb={10}>
        <Container>
          <Text as="h3" fontSize="xl" fontWeight="bold" position="relative">
            Main:
          </Text>
          <Text>
            JavaScript/ES6, React, Gatsby, GraphQL, Git, CSS3/Sass and HTML.
          </Text>
        </Container>
        <Container>
          <Text as="h3" fontSize="xl" fontWeight="bold">
            Secondary:
          </Text>
          <Text>Node.js, jQuery, SQL, MongoDB and Express</Text>
        </Container>
        <Container>
          <Text as="h3" fontSize="xl" fontWeight="bold">
            Other:
          </Text>
          <Text>Slappys and Kickflips</Text>
        </Container>
      </Box>
      <GitHubCalendar username="daryllcapistrano">
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
      <Carousel />
    </Box>
  )
}

export default StackSection
