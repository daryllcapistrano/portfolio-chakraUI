import React from "react"
import PropTypes from "prop-types"
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Avatar from "../../assets/avataaars.svg"
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

  const fontColor = useColorModeValue("black", "yellow.800")

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      minH="100vh"
    >
      <Box m="auto" pl={["6", "0"]}>
        <Text>Hi, I'm</Text>
        <Text fontSize="6xl" lineHeight="none" fontWeight="black">
          {data.site.siteMetadata.author}
        </Text>
        <Text fontSize="lg" color={fontColor}>
          {data.site.siteMetadata.description} in{" "}
          {data.site.siteMetadata.location}
        </Text>
      </Box>
      <Flex flexDirection="column" alignSelf="center">
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
