import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Flex, Box, Spacer, Button } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

const Header = ({ siteTitle }) => (
  <Flex p="4">
    <ColorModeSwitcher />
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
