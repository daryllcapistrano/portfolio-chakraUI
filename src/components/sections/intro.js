import React from "react"
import PropTypes from "prop-types"
import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react"
// import Avatar from "../../assets/svg/avataaars.svg"
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

  const fontColor = useColorModeValue("gray.500", "blue.500")

  return (
    <Center minH="100vh">
      <Box pl={["6", "0"]}>
        <Text fontSize="6xl" lineHeight="none" fontWeight="black">
          {data.site.siteMetadata.author}
        </Text>
        <Text fontSize="lg" color={fontColor} mt="2">
          {data.site.siteMetadata.description} in{" "}
          {data.site.siteMetadata.location}
        </Text>
      </Box>
    </Center>
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
