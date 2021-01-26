import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Flex, Box, Spacer } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

const Header = ({ siteTitle }) => (
  <Flex pos="fixed" w="100%" p="4" borderTop="6px solid #1F7A8C">
    {/* <Box alignSelf="center">
      <Text>{siteTitle}</Text>
    </Box> */}
    {/* <Spacer /> */}
    {/* <Box alignSelf="center">
      <ColorModeSwitcher />
    </Box> */}
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
