import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Flex, Box, Spacer, Text } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

const Header = ({ siteTitle }) => (
  <Flex p="4">
    {/* <Box alignSelf="center">
      <Text>{siteTitle}</Text>
    </Box> */}
    <Spacer />
    <Box alignSelf="center">
      <ColorModeSwitcher />
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
