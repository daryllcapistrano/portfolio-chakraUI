import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Flex, Heading, Box, Spacer, Button } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <Flex p="4">
    {/* <Box p="2">
      <Heading size="md">{siteTitle}</Heading>
    </Box> */}
    <Spacer />
    <Box>
      <Button colorScheme="blue" mr="4">
        dark mode
      </Button>
      <Button colorScheme="blue">light mode</Button>
    </Box>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
