import React, { useEffect } from "react"
import Typed from "typed.js"
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

  const formattedDesc =
    data.site.siteMetadata.description +
    " in " +
    data.site.siteMetadata.location

  const fontColor = useColorModeValue("gray.500", "blue.500")

  useEffect(() => {
    // Options for the Typed object
    const options = {
      strings: [formattedDesc],
      typeSpeed: 50,
      cursorChar: "|",
    }
    // New Typed instance
    const typed = new Typed("#typed", options)
    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy()
    }
  }, [formattedDesc])

  return (
    <Center minH="100vh">
      <Box pl={["6", "0"]}>
        <Text fontSize="6xl" mb="2" lineHeight="none" fontWeight="black">
          {data.site.siteMetadata.author}
        </Text>
        <Text
          id="typed"
          display="inline-flex"
          color={fontColor}
          whiteSpace="pre"
        ></Text>
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
