import React from "react"
import { Flex, Heading, Box, Spacer, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex p="4">
      <Box p="2">
        <Heading size="md">footer</Heading>
      </Box>
      <Spacer />
      <Box>
        <Text>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Text>
      </Box>
    </Flex>
  )
}

export default Footer
