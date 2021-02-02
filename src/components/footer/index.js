import React from "react"
import { SimpleGrid, Box, Text, Spacer, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const Footer = () => {
  return (
    <Box p="6">
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Box>
          <Text>Contact Info</Text>
        </Box>
        <Box>
          <Text>
            <Link as={GatsbyLink} to="/">
              LINK
            </Link>
            <Link as={GatsbyLink} to="/">
              LINK
            </Link>
            <Link as={GatsbyLink} to="/">
              LINK
            </Link>
            <Link as={GatsbyLink} to="/">
              LINK
            </Link>
            <Link as={GatsbyLink} to="/">
              LINK
            </Link>
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text textAlign="end" fontSize="xs">
            © {new Date().getFullYear()} Daryll Capistrano
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Footer
