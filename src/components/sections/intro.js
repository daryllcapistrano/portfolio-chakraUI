import React from "react"
import PropTypes from "prop-types"
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Avatar from "../../assets/avataaars.svg"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"
import { useStaticQuery, graphql } from "gatsby"

function IntroSection() {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
          location
        }
      }
    }
  `)

  const bg = useColorModeValue("white", "gray.800")

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      minH="100vh"
      bg={bg}
    >
      <Box m="auto" pl={{ base: `10`, sm: `0` }}>
        <Text fontSize="6xl" lineHeight="1.5">
          {data.site.siteMetadata.title}
        </Text>
        <Text fontSize="lg" mt="2">
          {data.site.siteMetadata.description} in{" "}
          {data.site.siteMetadata.location}
        </Text>
      </Box>

      <Flex flexDirection="column" alignSelf="center">
        <Box alignSelf="center">
          <ColorModeSwitcher />
        </Box>
        <Box>
          <Avatar />
        </Box>
      </Flex>
    </Flex>
  )
}

IntroSection.propTypes = {
  title: PropTypes.string,
}
IntroSection.propTypes = {
  description: PropTypes.string,
}

IntroSection.defaultProps = {
  title: ``,
}
IntroSection.defaultProps = {
  description: ``,
}

export default IntroSection
