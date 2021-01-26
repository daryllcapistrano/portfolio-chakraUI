import React from "react"
// import { Link } from "gatsby"
import { Box, Text } from "@chakra-ui/react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { IntroSection } from "../components/sections"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <Box w="100%" p={8} bg="blue.500">
      <Text fontSize="xl">Section 2</Text>
    </Box>
    <Box w="100%" p={8} bg="blue.100">
      <Text fontSize="xl">Section 3</Text>
    </Box>
    {/* <Box>
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
